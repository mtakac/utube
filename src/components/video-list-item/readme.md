### VideoListItem example

```js
    const video = {
        id: 'b6hoBp7Hk-A',
        title: 'The Beautiful Chaos of Surfing Pipeline',
        image: 'https://i.ytimg.com/vi/b6hoBp7Hk-A/default.jpg'
    };

    const ulStyle = {
        padding: 0,
        margin: 0,
        listStyle: 'none'
    };

    <ul style={ulStyle}>
        <VideoListItem {...video} />
    </ul>
```