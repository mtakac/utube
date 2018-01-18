### SearchForm example

```js
    const { store } = require('../../store');
    const { Provider } = require('react-redux');

    const onSubmit = (e) => {
        e.preventDefault();
        return alert('Search from submitted!');
    };

    <Provider store={store}>
        <SearchForm handleSubmit={onSubmit} store={store} />
    </Provider>
```
