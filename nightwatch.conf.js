module.exports = (function(settings) {
  console.log(settings["test_settings"]["default"]["username"]);

  if (process.env.LT_USERNAME) {
    settings["test_settings"]["default"]["username"] = process.env.LT_USERNAME;
  }

  if (process.env.LT_ACCESS_KEY) {
    settings["test_settings"]["default"]["access_key"] = process.env.LT_ACCESS_KEY;
  }
  
  if (process.env.LT_BUILD_NAME) {
    settings["test_settings"]["default"]["desiredCapabilities"]["build"] = process.env.LT_BUILD_NAME;
  }else{
    settings["test_settings"]["default"]["desiredCapabilities"]["build"] = "ELSE BUILD";
  }

  if (process.env.SELENIUM_HOST) {
    settings.selenium.host = process.env.SELENIUM_HOST;
  }
  if (process.env.SELENIUM_PORT) {
    settings.selenium.host = process.env.SELENIUM_PORT;
  }
  console.log(settings);
  return settings;
})(require('./nightwatch.json'));
