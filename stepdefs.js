const assert = require('assert');
const { Given, When, Then } = require('cucumber');

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

Given('Open calculator page', function () {
           driver.get('https://www.online-calculator.com/full-screen-calculator/');
});
Given('first number {string}', function (givennumber1) {
           var element = driver.findElement(webdriver.By.id('fullframe'));
			element.sendKeys(givennumber1);
});
Given('push function button {string}', function (givenfunction) {
        var element = driver.findElement(webdriver.By.id('fullframe'));
		element.sendKeys(givenfunction);
});
Given('second number {string}', function (givennumber2) {
           var element = driver.findElement(webdriver.By.id('fullframe'));
			element.sendKeys(givennumber2);
});
When('I push equal button', function () {
           var element = driver.findElement(webdriver.By.id('fullframe'));
			element.sendKeys('=');
});
Then('I should have the result {string}', function (givenfinalResult) {
           var element = driver.findElement(webdriver.By.id('fullframe'));
           this.result = element.getText();
		   return result;

});
Then('I push c button', function () {
           var element = driver.findElement(webdriver.By.id('fullframe'));
           element.sendKeys('c');
});