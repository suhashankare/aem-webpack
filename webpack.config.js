const path = require('path');

const testFolder = './src/jcr_root/apps/todo/components/';
const fs = require('fs');

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
    context: path.resolve(__dirname),
    node: {
        __filename: true,
        __dirname: true,
        path: true
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, './')

    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
};