[![npm](https://img.shields.io/npm/v/ti.transform.pug.svg)](https://www.npmjs.com/package/ti.transform.pug)

# ti.transform.pug
This Titanium CLI plugin transforms [Pug](https://pugjs.org/) files.

__Note:__ This plugin requires the base support plugin [`ti.transform`](https://github.com/vladm3/ti.transform).
See the section [Installation](#installation).

## Installation
### NPM (recommended)
#### I haven't installed ti.transform
Install [`ti.transform`](https://github.com/vladm3/ti.transform) according to its [Installation guide](https://github.com/vladm3/ti.transform).

Then refer to the next section:
#### I have installed ti.transform
Run this command in a Titanium project directory

```bash
npm install --save-dev ti.transform.pug
```

The plugin will install itself to the project's local `/plugins` directory.

After that you need to enable the plugin in your `tiapp.xml`.
Add the following XML element to the `<plugins/>` section:
`<plugins/>` section:
```xml
<plugins>
  ...
  <plugin version="0.1.0">ti.transform.pug</plugin>
</plugins>
```
### Manual
#### I haven't installed ti.transform
Install [`ti.transform`](https://github.com/vladm3/ti.transform) according to its [Installation guide](https://github.com/vladm3/ti.transform).

Then refer to the next section:
#### I have installed ti.transform
At first, download the plugin.

Then copy the plugin code into the project's local `/plugins` directory:
```
${project}/plugins/ti.transform.pug/0.1.0/{plugin_files}
```

After that add the following XML element to the `<plugins/>` section:
```xml
<plugins>
  ...
  <plugin version="0.1.0">ti.transform.pug</plugin>
</plugins>
```

## Example
See the example project [ti.transform-example](https://github.com/vladm3/ti.transform-example)

## License
MIT