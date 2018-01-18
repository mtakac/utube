module.exports = {
    'load main screen': function(browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#app', 'Utube')
            .end();
    },

    'search for video': function(browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=search]', 'reactjs')
            .waitForElementVisible('.icon-button', 1000)
            .click('.icon-button')
            .pause(1000)
            .assert.visible('.video-list-item')
            .end();
    },

    'load more videos': function(browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=search]', 'reactjs')
            .waitForElementVisible('.icon-button', 1000)
            .click('.icon-button')
            .pause(1000)
            .useXpath()
            .click("//*[contains(text(), 'Load more')]")
            .end();
    }
};
