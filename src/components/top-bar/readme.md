### TopBar example

```js
    const { store } = require('../../store');
    const { Provider } = require('react-redux');

    const handleSearch = () => alert('Search callback passed!');
    const handleLogin = () => { };
    const handleLogout = () => alert('Logout callback passed!');

    <Provider store={store}>
        <section>
            <h6>For logged out user</h6>
            <TopBar
                handleSearch={handleSearch}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
            />

            <h6 className="mt-4">For logged in user</h6>
            <TopBar
                handleSearch={handleSearch}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                isLoggedIn
            />
        </section>
    </Provider>
```
