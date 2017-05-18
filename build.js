var rollup = require('rollup').rollup
var resolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var buble = require('rollup-plugin-buble')

rollup({
    entry: 'index.js',
    plugins: [
        resolve({ jsnext: true }),
        commonjs(),
        buble()
    ]
}).then(bundle => {
    bundle.write({
        format: 'iife',
        dest: 'bundle.js'
    })
})
