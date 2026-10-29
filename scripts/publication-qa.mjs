import {chromium} from '@playwright/test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {supportURL} from '../src/lib/support.mjs';
import {previewProducts,releasedProducts,hasMacApps} from '../src/lib/catalog.mjs';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({locale:'ko-KR'});const page=await context.newPage();
const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4323';const base=process.env.QA_BASE||'/JovarisAudio-Website/';
const errors=[];page.on('pageerror',e=>errors.push(e.message));
fs.mkdirSync('qa/publication',{recursive:true});
for(const width of [375,430,768,1440,1920]){
 await page.setViewportSize({width,height:1000});
 for(const route of ['','software/','software/audio-plugins/','support/','music/','journal/']){
  const response=await page.goto(origin+base+route);assert.equal(response.status(),200);
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow ${width} ${route}`);
  assert.equal(await page.locator('header nav a').count(),4);
  for(const image of await page.locator('img').all())await image.scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>[...document.images].every(i=>i.complete));
  await page.evaluate(()=>window.scrollTo(0,0));
  const broken=await page.locator('img').evaluateAll(images=>images.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));assert.deepEqual(broken,[]);
  if(route==='software/'){
   assert.equal(await page.locator('.preview-item').count(),previewProducts.length);
   assert.equal(await page.locator('.preview-item a,.preview-item button,.preview-item p').count(),0);
   assert.equal(await page.locator('.available-card').count(),releasedProducts.length);
   if(!hasMacApps)assert.equal(await page.getByRole('link',{name:'macOS Apps',exact:true}).count(),0);
   for(const link of await page.locator('.support-note a').all())assert.equal(await link.getAttribute('href'),supportURL(process.env.PUBLIC_SUPPORT_URL));
   assert(await page.locator('.support-note a').count()>0);
   await page.screenshot({path:`qa/publication/software-${width}.png`,fullPage:true});
  }
  if(route===''){
   assert.equal(await page.locator('.preview-item').count(),0);
   await page.screenshot({path:`qa/publication/home-${width}.png`,fullPage:true});
  }
 }
}
for(const p of previewProducts){const response=await page.goto(origin+base+'software/'+p.id+'/');assert.equal(response.status(),404);}
await page.goto(origin+base+'software/');await page.locator('[data-language="en"]').click();assert.equal(await page.locator('html').getAttribute('lang'),'en');assert.match(await page.locator('main').innerText(),/No products are currently available/);assert(!/[가-힣]/.test(await page.locator('main').innerText()));
await page.locator('[data-language="ko"]').click();await page.waitForURL('**/ko/software/');assert.match(await page.locator('main').innerText(),/현재 공개 다운로드/);
assert.deepEqual(errors,[]);await browser.close();console.log('PASS: 5 widths × 6 routes; loaded images, 3 minimal previews, no preview routes, bilingual copy, no browser errors');
