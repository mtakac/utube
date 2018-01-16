### SearchForm example

```js
    const handleSubmit = (e) => {
        e.preventDefault();
        return alert('Search from submitted!');
    };

    <section>
        <SearchForm handleSubmit={handleSubmit} />
    </section>
```