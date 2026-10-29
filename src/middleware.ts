import {defineMiddleware} from 'astro:middleware';
import {localizeHTML} from './lib/i18n.mjs';
export const onRequest=defineMiddleware(async (_context,next)=>{
 const response=await next();
 if(!response.headers.get('content-type')?.includes('text/html'))return response;
 const html=await response.text();
 const locale=html.match(/data-ui-language="(en|ko)"/)?.[1]||'en';
 const headers=new Headers(response.headers);headers.delete('content-length');
 return new Response(localizeHTML(html,locale),{status:response.status,headers});
});
