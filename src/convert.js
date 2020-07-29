const fs = require('fs');
const jsonfile = require('jsonfile');
const puppeteer = require('puppeteer')
const foxr = require('foxr').default
const parse = (file) => {
    return jsonfile.readFileSync(file);
}

const json = parse(__dirname + '/../public/page-data/documentation/core/components/accordion/fluid/page-data.json')
const upath = json.path;
const name = 'accordion'
const variant = 'fluid'
const id = "ws-core-c-" + name + "-" + variant;

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://localhost:8000' + path);
//     //await page.screenshot({path: id + '.png'});
//     const el = await page.$('#' + id);
//     el.screenshot({ path: id + '.png' });
//     await browser.close();
// })();
const url = "https://localhost:8000" + upath;
console.log(url);

(async () => {
    try {
        const browser = await foxr.connect()
        const page = await browser.newPage("https://localhost:8000")

        //        await page.goto(url)
        // await page.screenshot({ path: 'example.png' })
        // await browser.close()
    } catch (error) {
        console.error(error)
    }
})()

// const scrapeIt = require("scrape-it");
// scrapeIt("https://localhost:8000", {
//     title: ".header h1"
//   , desc: ".header h2"
//   , avatar: {
//         selector: ".header img"
//       , attr: "src"
//     }
// }).then(({ data, response }) => {
//     console.log(`Status Code: ${response.statusCode}`)
//     console.log(data)
// })

// console.log(json.result.pageContext.code)
// console.log(json)
