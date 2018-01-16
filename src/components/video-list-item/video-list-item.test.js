/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import VideoListItem from 'components/video-list-item';

describe('<VideoListItem />', () => {

    const setup = (propOverrides) => {
        const props = {
            id: '1',
            title: 'Video title',
            image: 'http://www.image.com/url',
            ...propOverrides
        };

        const component = shallow(<VideoListItem {...props} />);

        return { component, props };
    };

    it('should render', () => {
        const { component } = setup();

        assert.isTrue(component.exists());
    });

    it('should render image', () => {
        const { component, props } = setup();
        const { image } = props;

        assert.equal(component.find('img').props().src, image);
    });

    it('should render title', () => {
        const { component, props } = setup();
        const { title } = props;

        assert.equal(component.find('h2').text(), title);
    });
});
