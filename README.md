# select-text-loader

[![npm version](https://badge.fury.io/js/select-text-loader.svg)](https://badge.fury.io/js/select-text-loader)

select-text-loader is a simple loader which uses texts from an array as the loader content.

![](https://raw.githubusercontent.com/aswinzz/select-text-loader/master/examples/sample.gif)


[Click here for sample usage](https://github.com/aswinzz/select-text-loader-example)

## Install

``` js
npm i select-text-loader --save
```

## Use

```javascript
import SelectTextLoader from 'select-text-loader/dist/SelectTextLoader';

// loading : true/false whether to show the loading text or nott
// data : array of texts to be used for loading
// timeGap : time in milliseconds between each loading text
<SelectTextLoader loading={true} data={['hello','hi','loading']} timeGap={60}/>
```

## Development
    npm install
    npm start


## Publish
    npm login
    npm run publish:run
    npm publish