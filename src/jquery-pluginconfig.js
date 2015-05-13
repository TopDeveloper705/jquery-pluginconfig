var getPropertyName = function getPropertyName(rawName, pluginName) {
  return rawName.replace(pluginName, '')
          .toLowerCase()
          .replace(/-(.)/g, function(match, group1) {
              return group1.toUpperCase();
          });
};

var getPropertyValue = function getPropertyValue(rawValue) {
  var value;

  try {
    value = JSON.parse(rawValue);
  }
  catch(e) {
    value = rawValue;
  }

  return value;
};

var pluginConfig = function pluginConfig(pluginName) {

  var data = this.get(0).attributes;
  var config = {};

  pluginName = 'data-' + pluginName + '-';

  $.each(data, function(index, attr) {
    if(attr.name.indexOf(pluginName) === 0) {
      config[getPropertyName(attr.name, pluginName)] = getPropertyValue(attr.value);
    }
  });

  return config;
};
