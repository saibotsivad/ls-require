# ls-require

For each filename piped in, require it. Useful for running tape tests.

## install

The normal npm way:

```bash
npm install ls-require
```

## what it does

For every piped in filename, it will `require(filename)` it.

That's it.

## But why?

Suppose you have a folder like this:

```txt
file1.spec.js
file2.spec.js
```

And those files were [tape](https://www.npmjs.com/package/tape) test
files, and you wanted to run all of them:

```bash
ls *.spec.js | ls-require
```

Of course, right now you could do `tape *.spec.js` but `tape` doesn't
have very expressive minimatch options. Therefore you could use something
like [globbit](https://www.npmjs.com/package/globbit) to get a list
of filenames, and execute those as `tape` tests, like this:

```bash
globbit 'path/**/*.spec.js' '!path/**/old-*.spec.js' | ls-require
```

## options

The only option currently available is that you can set the current
working directory as the first and only property, e.g.:

```bash
ls ../*.spec.js | ls-require ../
```

This will `require` all the piped in files using `require('../' +  filename)`.

## license

Published and released under the [Very Open License](http://veryopenlicense.com).
