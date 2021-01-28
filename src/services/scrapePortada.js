const puppeteer = require('puppeteer');
const url = 'https://elpais.com/sociedad/crisis-del-coronavirus/';
const selector = '#fusion-app .section_b .first_column article';
(async function(){
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-extensions-except=/path/to/manifest/folder/',
      '--load-extension=/path/to/manifest/folder/',
    ]
  });
  const page = await browser.newPage();
  await page.goto(url);
  const news = await page.$$eval(selector, nodes => {

    return nodes.map(node => {

      let title = '';
      let body = '';
      let img = '';
      let source = '';
      let publisher = '';

      if (node.querySelector('h2')) {
        title = node.querySelector('h2 a').innerText;
      }
      if (node.querySelector('.description')) {
        body = node.querySelector('.description').innerText;
      }
      if (node.querySelector('figure.story_card_image img')) {
        img = node.querySelector('figure.story_card_image img').getAttribute('src');
      }
      if (node.querySelector('h2 a')) {
        source = 'https://elpais.com' + node.querySelector('h2 a').getAttribute('href');
      }
      if (node.querySelector('.author')) {
        publisher = node.querySelector('.author').innerText;
      }

      return {
        title,
        body,
        img,
        source,
        publisher
      }
    })
  });

  console.log('Portada Ok');

  const fs = require('fs');
  fs.writeFile('./src/services/news_portada.json', JSON.stringify(news), err => err ? console.log(err): null);
  await browser.close();
})();