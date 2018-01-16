/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import VideoPanel from 'components/video-panel';

describe('<VideoPanel />', () => {

    const setup = (propOverrides) => {
        const props = {
            id: '1',
            title: 'Video title',
            description: 'Video description with <a href="#">link</a>',
            ...propOverrides
        };

        const component = shallow(<VideoPanel {...props} />);

        return { component, props };
    };

    it('should render', () => {
        const { component } = setup();

        assert.isTrue(component.exists());
    });

    it('should render video', () => {
        const { component } = setup();
        const { src } = component.find('iframe').props();

        assert.equal(src, 'https://www.youtube.com/embed/1');
    });

    it('should render video title', () => {
        const { component, props } = setup();
        const { title } = props;

        assert.include(component.find('h1').text(), title);
    });

    it('should render video description', () => {
        const { component, props } = setup();
        const { description } = props;
        const { dangerouslySetInnerHTML: { __html } } = component.find('.card-body p').props();

        assert.equal(__html, description);
    });
});
