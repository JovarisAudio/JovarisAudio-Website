import {chromium} from '@playwright/test';import assert from 'node:assert/strict';import fs from 'node:fs';
const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:390,height:844}});let errors=[];page.on('pageerror',e=>errors.push(e.message));const origin=process.env.QA_ORIGIN||'http://127.0.0.1:4321';const base=process.env.QA_BASE||'/';const goto=p=>page.goto(origin+base+p);
for(const route of ['','music/','journal/','software/','software/orange-lift/','support/']){await goto(route);assert.equal(await page.locator('header nav a').count(),4);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow ${route}`);if(route===''){fs.mkdirSync('qa',{recursive:true});await page.screenshot({path:'qa/home-mobile.png',fullPage:true});}}
await goto('software/audio-plugins/');assert(await page.getByRole('link',{name:'JA_OrangeLift',exact:true}).isVisible());
if(process.env.QA_FIXTURES==='1'){
 await goto('journal/');await page.locator('#search').fill('본문검색토큰');assert.equal(await page.locator('[data-search]:visible').count(),3);await page.locator('#search').fill('없는검색어');assert.equal(await page.locator('[data-search]:visible').count(),0);assert(await page.locator('#no-results').isVisible());
 await goto('journal/series/qa-book/');assert.deepEqual(await page.locator('#results h3 a').allTextContents(),['#001 검증 기록 1','#002 검증 기록 2','#010 검증 기록 10']);
 await goto('journal/qa-2/');assert.equal(await page.locator('.pagination a').count(),2);assert((await page.locator('.pagination').textContent()).includes('#010'));
 assert.equal(await page.locator('a[href$="software/orange-lift/"]').count(),1);
 await goto('music/qa-song/');assert.equal(await page.locator('.article section a').count(),3);
 assert(!fs.readFileSync('dist/journal/index.html','utf8').includes('비공개초안검증토큰'));
}
await page.setViewportSize({width:1440,height:1000});await goto('');await page.screenshot({path:'qa/home-desktop.png',fullPage:true});assert.equal(errors.length,0,errors.join('\n'));await browser.close();console.log('PASS: browser navigation, responsive overflow, Orange Lift, '+(process.env.QA_FIXTURES==='1'?'search/series/related/draft checks':'empty archive checks'));
