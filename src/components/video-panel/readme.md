### VideoPanel example

```js
    const video = {
        id: 'wt8ES0ffy_o',
        title: 'Rangle Talks: Redux Creator Dan Abramov',
        description: `
            Rangle Talks is a new series featuring Rangle executives speaking with innovators in the JavaScript world. Listen to the show for insights from industry leaders on the latest news and trends in JavaScript.

            On this edition of Rangle Talks, Rangle's CTO Yuri Takhteyev sits down with Redux creator Dan Abramov at React Europe 2016 to discuss the future of Redux and Dan’s involvement with React.

            Find out more about our work at http://www.rangle.io ! We're a full-stack JavaScript consultancy located in the heart of downtown Toronto and we help companies deliver their MVP.`
    };

    <section>
        <VideoPanel {...video} />
    </section>
```