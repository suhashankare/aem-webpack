const path = require('path');

const testFolder = './src/jcr_root/apps/todo/components/';
const fs = require('fs');

const globwatcher = require("globwatcher").globwatcher;
const watcher = globwatcher("testFolder");
watcher.on("added", function (filename) {
    console.log("New MP3 detected: " + filename);
});
watcher.ready.then(function () {
    console.log("Globwatcher is now actively scanning!");
});


const glob = require("glob");

const getDirNames = fs.readdirSync(testFolder);

const createObjectKey = () => {
    let fileLists = glob.sync("./src/jcr_root/apps/todo/components/**/*.js", {ignore: './src/jcr_root/apps/todo/components/**/*.build.js'});
    let createKeyObject = {};
    let matchPattern = /([^:\\/]*?)(?:\.([^ :\\/.]*))?$/;

    for (let dirName of getDirNames) {
        for (let value of fileLists) {
            // new RegExp('/(\/'+dirName+'\/)/g').test(value) : look for folder name in he path
            if (value.search('/' + dirName + '/') > 0) {
                createKeyObject[value.replace('./src', 'src').replace(matchPattern, 'build/' + dirName)] = glob.sync(value.replace(matchPattern, '*.js'));
            }
        }
    }
    return createKeyObject;
};

const getObject = createObjectKey();
console.log(getObject);

module.exports = {
    mode: 'none',
    entry: () => new Promise((resolve) => resolve(getObject)),
   // entry:getObject,
   /* entry: {
        'src/jcr_root/apps/todo/components/item/build/item': ['./src/jcr_root/apps/todo/components/item/!*.js'],
        'src/jcr_root/apps/todo/components/page/build/page': ['./src/jcr_root/apps/todo/components/page/!*.js'],
    },*/
    context: path.resolve(__dirname),
    node: {
        __filename: true,
        __dirname: true,
        path: true
    },
    resolve: {
        extensions: []
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, './')

    },
    module: {

    }
};