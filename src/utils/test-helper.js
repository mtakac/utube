import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configure enzym
Enzyme.configure({ adapter: new Adapter() });

// Don't include non .js files when running tests
require.extensions['.css'] = () => null;
require.extensions['.scss'] = () => null;
require.extensions['.svg'] = () => null;

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
