const fs = require('fs');
const jsonfile = require('jsonfile');
//const puppeteer = require('puppeteer')
const foxr = require('foxr').default
//const webshot = require('webshot');

const parse = (file) => {
    return jsonfile.readFileSync(file);
}

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

const componentDir = __dirname + "/../patternfly/public/page-data/documentation/core/components"
const json2 = parse(componentDir + '/accordion/fluid/page-data.json')
const upath = json2.path;
const name = 'accordion'
const variant = 'fluid'
const id = "ws-core-c-" + name + "-" + variant;

const components = getDirectories(componentDir);
console.log(components)
// components.forEach(component => {
//     const variants = getDirectories(component)
//     variants.forEach(variant => {
//         const json = parse(component + "/" + variant + "/page-data.json");
//         const ppath = json.path;
//         const name = 'accordion'
//         const variant = 'fluid'
//     });

// });

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://localhost:8000' + path);
//     //await page.screenshot({path: id + '.png'});
//     const el = await page.$('#' + id);
//     el.screenshot({ path: id + '.png' });
//     await browser.close();
// })();
const url = "http://localhost:8000" + upath;
console.log(url);

// var renderStream = webshot(url);
// var file = fs.createWriteStream('google.png', { encoding: 'binary' });

// renderStream.on('data', function (data) {
//     file.write(data.toString('binary'), 'binary');
// });

// webshot("http://patternfly.org", "./" + id + '.png', { renderDelay: 2000 }, function (err) {
//     console.log("saved screenshot to: " + "./" + id + '.png')
// });

(async () => {
    try {
        const browser = await foxr.connect()
        const page = await browser.newPage()
        await page.goto(url)
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({ path: 'example.png' })
        //await browser.close()
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
