### TopBar example

```js
    const handleSearch = (e) => {
        e.preventDefault();
        alert('Callback passed!');
    };

    <section>
        <TopBar handleSearch={handleSearch} />
    </section>
```