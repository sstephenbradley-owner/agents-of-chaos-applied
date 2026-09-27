// POST {refs:[{id, doi?, pmid?, query?}]} -> {years:[{id, year, source}]}
// Authoritative publication years from Crossref / NCBI, so no node has to guess a date.
export default async (req) => {
  if (req.method !== 'POST') return json({error:'POST only'}, 405);
  let refs; try { ({refs} = await req.json()); } catch { return json({error:'bad body'}, 400); }
  if (!Array.isArray(refs)) return json({error:'refs must be an array'}, 400);
  const out = await Promise.all(refs.slice(0, 20).map(async r => {
    try {
      if (r.pmid) {
        const d = await getJSON(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${encodeURIComponent(r.pmid)}`);
        const rec = d.result?.[r.pmid];
        const y = (rec?.pubdate || '').match(/\d{4}/);
        if (y) return {id:r.id, year:+y[0], source:'pubmed'};
      }
      if (r.doi) {
        const d = await getJSON(`https://api.crossref.org/works/${encodeURIComponent(r.doi)}`);
        const y = d.message?.issued?.['date-parts']?.[0]?.[0];
        if (y) return {id:r.id, year:y, source:'crossref'};
      }
      if (r.query) {
        const d = await getJSON(`https://api.crossref.org/works?rows=1&select=issued,title&query.bibliographic=${encodeURIComponent(r.query)}`);
        const it = d.message?.items?.[0];
        const y = it?.issued?.['date-parts']?.[0]?.[0];
        if (y) return {id:r.id, year:y, source:'crossref-search', matched:(it.title||[])[0]};
      }
    } catch {}
    return {id:r.id, year:null, source:'not-found'};
  }));
  return json({years: out});
};
export const config = { path: '/api/pubyear' };
const json = (o, s=200) => new Response(JSON.stringify(o), {status:s, headers:{'content-type':'application/json'}});
async function getJSON(u) {
  const r = await fetch(u, {headers:{'User-Agent':'Tribunal/0.1 (audit tool)','Accept':'application/json'}});
  if (!r.ok) throw new Error(String(r.status));
  return r.json();
}
