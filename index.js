#!/usr/bin/env node

const resolve = require('path').resolve

const cwd = process.argv[2] || './'

const files = []

process.stdin
    .on('data', file => {
        files.push(resolve(cwd, file.toString('utf8').trim()))
    })

process.stdin.on('end', () => {
    files.forEach(file => require(file))
})
