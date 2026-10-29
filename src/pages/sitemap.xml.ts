import {siteData} from '../lib/site-routes.mjs';
export async function GET({site}){
 if(!site)return new Response('',{status:200});
 const {routes}=await siteData();
 const pages=[{path:'',alternates:{en:'',ko:'ko/'}},{path:'ko',alternates:{en:'',ko:'ko/'}},...routes];
 const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
 const absolute=p=>esc(new URL(import.meta.env.BASE_URL+p,site).href);
 const body=pages.map(p=>'<url><loc>'+absolute(p.path?p.path+'/':'')+'</loc>'+Object.entries(p.alternates).map(([locale,path])=>'<xhtml:link rel="alternate" hreflang="'+locale+'" href="'+absolute(path)+'"/>').join('')+'</url>').join('');
 return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'+body+'</urlset>',{headers:{'Content-Type':'application/xml'}});
}
