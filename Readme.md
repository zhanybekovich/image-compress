# Simple gulp config for compressing images

## Image formats that can be compressed

jpg, jpeg, png, gif, svg

## Install

```
$ npm install
```

## Usage

Place your source images in: `src/images/` and run:

```
$ gulp
```

or

```
$ gulp compress
```

## Output of compressed images

You can find compressed images in: `compressed/images/`

## Quality of compressed images

You can control the compression level of images in `julpfile.js` by changing the value of `quality`. Default value is `50`
