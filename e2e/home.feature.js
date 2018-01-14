module.exports = {
    'Home feature test': function(browser) {
        browser
            .url('http://localhost:8080')
            .assert.containsText('#app', 'Hello world!')
            .end();
    }
};
