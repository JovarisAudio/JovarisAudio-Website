import {chromium} from '@playwright/test';import assert from 'node:assert/strict';import fs from 'node:fs';
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4324';const base=process.env.QA_BASE||'/JovarisAudio-Website/';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({locale:'ko-KR'});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
fs.mkdirSync('qa/globalization',{recursive:true});
for(const width of [375,430,768,1440,1920])for(const locale of ['en','ko'])for(const route of ['','music/','journal/','software/','about/','support/']){
 await page.setViewportSize({width,height:1000});const prefix=locale==='ko'?'ko/':'';const path=base+prefix+route;
 const response=await page.goto(origin+path);assert.equal(response.status(),200,path);assert.equal(await page.locator('html').getAttribute('lang'),locale);
 assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://jovarisaudio.github.io'+path);
 assert.equal(await page.locator('meta[property="og:locale"]').getAttribute('content'),locale==='ko'?'ko_KR':'en_US');
 assert.equal(await page.locator('link[hreflang="en"]').count(),1);assert.equal(await page.locator('link[hreflang="ko"]').count(),1);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow ${locale} ${width} ${route}`);
 assert.equal(await page.locator('header nav a').count(),4);
 for(const image of await page.locator('img').all())await image.scrollIntoViewIfNeeded();
 await page.waitForFunction(()=>[...document.images].every(i=>i.complete));assert.deepEqual(await page.locator('img').evaluateAll(images=>images.filter(i=>!i.naturalWidth).map(i=>i.src)),[]);await page.evaluate(()=>scrollTo(0,0));
 if(route===''){assert.equal(await page.locator('.brand-paths a').count(),3);assert.equal(await page.locator('.preview-item').count(),0);await page.screenshot({path:`qa/globalization/home-${locale}-${width}.png`,fullPage:true});}
 if(route==='software/'){assert.equal(await page.locator('.preview-item').count(),3);assert.equal(await page.locator('.preview-item a,.preview-item button,.preview-item p').count(),0);assert.equal(await page.locator('.available-card').count(),0);assert.equal(await page.getByRole('link',{name:'macOS Apps',exact:true}).count(),0);await page.screenshot({path:`qa/globalization/software-${locale}-${width}.png`,fullPage:true});}
}
await page.goto(origin+base);assert.equal(await page.locator('html').getAttribute('lang'),'en');
await page.locator('[data-language="ko"]').click();await page.waitForURL(origin+base+'ko/');assert.equal(await page.locator('html').getAttribute('lang'),'ko');
await page.getByRole('link',{name:'Journal',exact:true}).first().click();await page.waitForURL(origin+base+'ko/journal/');
await page.locator('[data-language="en"]').click();await page.waitForURL(origin+base+'journal/');assert.equal(await page.locator('html').getAttribute('lang'),'en');
await page.locator('[data-language="ko"]').click();await page.waitForURL(origin+base+'ko/journal/');await page.goto(origin+base);await page.waitForURL(origin+base+'ko/');
// An explicit English URL is not overridden by saved Korean preference.
await page.goto(origin+base+'software/');assert.equal(await page.locator('html').getAttribute('lang'),'en');
for(const locale of ['','ko/'])for(const id of ['common-ground','orange-lift','phase-check']){assert.equal((await page.goto(origin+base+locale+'software/'+id+'/')).status(),404)}
const noJS=await browser.newContext({javaScriptEnabled:false,locale:'ko-KR'});const staticPage=await noJS.newPage();await staticPage.goto(origin+base);assert.equal(await staticPage.locator('html').getAttribute('lang'),'en');assert.match(await staticPage.locator('h1').innerText(),/On keeping going/);await staticPage.locator('[data-language="ko"]').click();await staticPage.waitForURL(origin+base+'ko/');assert.match(await staticPage.locator('h1').innerText(),/오늘도/);
assert.deepEqual(errors,[]);await browser.close();console.log('PASS: 60 responsive localized screens; canonical/hreflang/OG; EN default with Korean browser; explicit saved choice; no-JS language navigation; publication privacy');
