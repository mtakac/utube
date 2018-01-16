### VideoList example

```js
    const videos = [{
        id: 'b6hoBp7Hk-A',
        title: 'The Beautiful Chaos of Surfing Pipeline',
        image: 'https://i.ytimg.com/vi/b6hoBp7Hk-A/default.jpg'
    }, {
        id: 'AtgZUp30frk',
        title: 'Muay Thai Documentary - "The Brutall Ballet"',
        image: 'https://i.ytimg.com/vi/AtgZUp30frk/default.jpg'
    }, {
        id: 'wt8ES0ffy_o',
        title: 'Rangle Talks: Redux Creator Dan Abramov',
        image: 'https://i.ytimg.com/vi/wt8ES0ffy_o/default.jpg'
    }];

    const handleLoadMoreClick = () => alert('Load more button clicked!');

    <section style={{ width: '50%' }}>
        <VideoList
            videos={videos}
            handleLoadMoreClick={handleLoadMoreClick}
        />
    </section>
```