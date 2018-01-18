### RatingButton example

```js
    const thumbUp = require('../video-panel/thumb-up.svg');
    const thumbDown = require('../video-panel/thumb-down.svg');
    const handleClick = () => alert('Button clicked!');

    <section>
        <RatingButton
            icon={thumbUp}
            className="mr-2 btn btn-outline-secondary"
            handleClick={handleClick}
            isActive
        />

        <RatingButton
            icon={thumbDown}
            className="mr-2 btn btn-outline-secondary"
            handleClick={handleClick}
        />
    </section>
```
