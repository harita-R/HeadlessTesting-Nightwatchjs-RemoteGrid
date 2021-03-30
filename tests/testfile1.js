module.exports = {
    "Step one: Navigate to google.com and verify URL and title" : function(browser) {
     browser
     .url("http://www.google.com")
     .waitForElementPresent('body', 1000)
     .assert.urlContains("google")
     .assert.title("Google")
    }
}