// POST {provider, key, model, system, user, search} -> {text}. Keys pass through per request and are never stored or logged.
export default async (req) => {
  if (req.method !== 'POST') return json({error:'POST only'}, 405);
  let b; try { b = await req.json(); } catch { return json({error:'bad body'}, 400); }
  const {provider, key, model, system, user, search} = b;
  if (!key) return json({error:'missing API key for ' + provider}, 400);
  try {
    if (provider === 'anthropic') return json({text: await anthropic(key, model, system, user, search)});
    if (provider === 'gemini')    return json({text: await gemini(key, model, system, user, search)});
    return json({error:'unknown provider'}, 400);
  } catch (e) { return json({error: e.message}, 502); }
};
export const config = { path: '/api/llm' };

async function anthropic(key, model, system, user, search) {
  const body = { model, max_tokens: 4000, system, messages:[{role:'user', content:user}] };
  if (search) body.tools = [{type:'web_search_20250305', name:'web_search', max_uses:6}];
  const r = await fetch('https://api.anthropic.com/v1/messages', {method:'POST', headers:{'content-type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01'}, body:JSON.stringify(body)});
  const d = await r.json();
  if (d.error) throw new Error('Anthropic: ' + (d.error.message || JSON.stringify(d.error)));
  const texts = (d.content||[]).filter(x => x.type==='text').map(x => x.text);
  return texts[texts.length-1] || '';
}

async function gemini(key, model, system, user, search) {
  const body = { system_instruction:{parts:[{text:system}]}, contents:[{role:'user', parts:[{text:user}]}], generationConfig:{maxOutputTokens:4000, temperature:0.3} };
  if (search) body.tools = [{google_search:{}}];
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {method:'POST', headers:{'content-type':'application/json','x-goog-api-key':key}, body:JSON.stringify(body)});
  const d = await r.json();
  if (d.error) throw new Error('Gemini: ' + (d.error.message || JSON.stringify(d.error)));
  const parts = d.candidates?.[0]?.content?.parts || [];
  return parts.filter(p => p.text).map(p => p.text).join('\n');
}
const json = (o, s=200) => new Response(JSON.stringify(o), {status:s, headers:{'content-type':'application/json'}});
