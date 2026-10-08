export function GET({site}) {return new Response(site?'User-agent: *\nAllow: /\nSitemap: '+new URL(import.meta.env.BASE_URL+'sitemap.xml',site).href:'User-agent: *\nDisallow: /');}
