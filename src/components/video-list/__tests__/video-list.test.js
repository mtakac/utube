/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VideoList from 'components/video-list';
import VideoListItem from 'components/video-list-item';

describe('Components', () => {

    describe('<VideoList />', () => {

        const setup = (propOverrides) => {
            const videos = [{
                id: '1',
                title: 'First video title',
                image: 'http://www.first.com/image'
            }, {
                id: '2',
                title: 'Second video title',
                image: 'http://www.second.com/image'
            }];

            const props = {
                videos,
                handleLoadMore: sinon.spy(),
                ...propOverrides
            };

            const component = shallow(<VideoList {...props} />);

            return { component, props };
        };

        it('should render', () => {
            const { component } = setup();

            assert.isTrue(component.exists());
        });

        it('should render <VideoListItem /> for every video', () => {
            const { component, props } = setup();
            const { videos } = props;

            assert.equal(component.find(VideoListItem).length, videos.length);
        });
    });
});
