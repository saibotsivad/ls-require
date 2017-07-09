#!/usr/bin/env node

const resolve = require('path').resolve

const cwd = process.argv[2] || './'

const files = []

process.stdin
	.on('data', file => {
		file
			.toString('utf8')
			.trim()
			.split(/\r?\n/)
			.filter(Boolean)
			.forEach(file => files.push(file))
	})

process.stdin.on('end', () => {
	files.forEach(file => require(file))
})
