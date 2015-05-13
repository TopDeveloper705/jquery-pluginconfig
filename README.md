# jquery-pluginconfig

[![Build Status](https://travis-ci.org/talyssonoc/jquery-pluginconfig.svg)](https://travis-ci.org/talyssonoc/jquery-pluginconfig)

## Installation

You can install with npm

```sh
  $ npm install jquery-pluginconfig
```

With Bower

```sh
  bower install jquery-pluginconfig
```

Or use some of the files at `dist` folder.

## Usage

Let's say you have a jQuery plugin called `my-awesome-plugin`. And you want to allow the user to set the configs of that plugin for a given element using `data-*` attributes.

You can let them do this:

```html
  <div class="my-element" data-my-awesome-plugin-config="hello" data-my-awesome-plugin-config-two="world"></div>div>
```

And then you can do this:

```js
  var config = $('.my-element').pluginConfig('my-awesome-plugin');

  // You'll get { config: "hello", configTwo: "world"}

  // Then use it

  $('.my-element').myAwesomePlugin(config);
```

You can also use it internally of your plugin, so the user won't have to call `pluginConfig` every time.

That's all, folks!
