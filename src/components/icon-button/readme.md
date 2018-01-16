### IconButton example

```js
    const icon = require('../search-form/magnifying-glass.svg');
    const handleClick = () => alert('Button clicked!');

    <section>
        <IconButton type="button" icon={icon} handleClick={handleClick} className="btn btn-primary" />
    </section>
```