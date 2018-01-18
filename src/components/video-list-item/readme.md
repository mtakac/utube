### VideoListItem example

```js
    const ulStyle = {
        padding: 0,
        margin: 0,
        listStyle: 'none'
    };

    const handleSelectVideo = () => alert('Video selected!');

    <ul style={ulStyle}>
        <VideoListItem
            id="b6hoBp7Hk-A"
            title="The Beautiful Chaos of Surfing Pipeline"
            image="https://i.ytimg.com/vi/b6hoBp7Hk-A/default.jpg"
            handleSelectVideo={handleSelectVideo}
        />
    </ul>
```
