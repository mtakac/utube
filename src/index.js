import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'styles/main.scss';

import { store, history } from 'store';
import TopBar from 'components/top-bar';
import VideoPanel from 'components/video-panel';
import VideoList from 'components/video-list';

const videos = [{
    id: '2Vv-BfVoq4g',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfVoq4g/default.jpg'
}, {
    id: '2Vv-BfVeq4g',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfVeq4g/default.jpg'
}, {
    id: '2Vv-BfV9k38',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfV9k38/default.jpg'
}, {
    id: '2Vv-BfVpole',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfVpole/default.jpg'
}, {
    id: '2Vv-BfVoela',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfVoela/default.jpg'
}, {
    id: '2Vv-BfVeq4d',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfVeq4d/default.jpg'
}, {
    id: '2Vv-BfVkd8u',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfVkd8u/default.jpg'
}, {
    id: '2Vv-BfVieku',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfVieku/default.jpg'
}, {
    id: '2Vv-BfV234j9',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfV234j9/default.jpg'
}, {
    id: '2Vv-BfVaaaa',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfVaaaa/default.jpg'
}, {
    id: '2Vv-BfV2j49',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    image: 'https://i.ytimg.com/vi/2Vv-BfV2j49/default.jpg'
}];

const handleLoadMoreClick = () => console.log('Load more!'); // eslint-disable-line no-console
const handleSearch = (e) => {
    e.preventDefault();
    return console.log('Search!'); // eslint-disable-line no-console
};

const App = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <TopBar handleSearch={handleSearch} />
                <div className="pt-2 pb-5 container">
                    <div className="row">
                        <div className="col-12 col-md-8 mb-4 mb-lg-0">
                            <VideoPanel
                                id="zpOULjyy-n8"
                                title="My video title"
                                description="My video description"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <VideoList videos={videos} handleLoadMoreClick={handleLoadMoreClick} />
                        </div>
                    </div>
                </div>
            </div>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
