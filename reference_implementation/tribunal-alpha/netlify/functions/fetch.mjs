// POST {url} -> {title, text}. Fetches a public page server-side and strips it to readable text.
export default async (req) => {
  if (req.method !== 'POST') return json({error:'POST only'}, 405);
  let url; try { ({url} = await req.json()); } catch { return json({error:'bad body'}, 400); }
  if (!/^https?:\/\//i.test(url || '')) return json({error:'url must start with http(s)://'}, 400);
  let r;
  try { r = await fetch(url, {headers:{'User-Agent':'Mozilla/5.0 (compatible; Tribunal/0.1)','Accept':'text/html'}, redirect:'follow'}); }
  catch (e) { return json({error:'could not reach ' + url + ': ' + e.message}, 502); }
  if (!r.ok) return json({error:'site returned ' + r.status}, 502);
  const html = await r.text();
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [,''])[1].trim();
  let body = html;
  const art = html.match(/<article[\s\S]*?<\/article>/i);
  if (art && art[0].length > 1500) body = art[0];
  const text = body
    .replace(/<(script|style|noscript|svg|nav|header|footer|form|iframe)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h[1-6]|li|blockquote|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;|&rsquo;|&lsquo;/g,"'").replace(/&ldquo;|&rdquo;/g,'"').replace(/&mdash;/g,'—').replace(/&hellip;/g,'…')
    .replace(/[ \t]+/g,' ').replace(/\n\s*\n+/g,'\n\n').trim();
  if (text.length < 200) return json({error:'page had almost no readable text (paywall, login, or app-rendered)'}, 422);
  return json({title, text});
};
export const config = { path: '/api/fetch' };
const json = (o, s=200) => new Response(JSON.stringify(o), {status:s, headers:{'content-type':'application/json'}});
