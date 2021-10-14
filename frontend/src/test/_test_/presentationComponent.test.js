import Footer from "../../components/Footer/Footer";
import ReactTestUtils from 'react-dom/test-utils';

describe('test presentation component Footer',() => {
    it('has an h4 tag', () => {
        const component = ReactTestUtils.renderIntoDocument(<Footer/>);    
        let h4 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h4');
    });
    
    it('is wrapped inside a footer class', () => {
        const component = ReactTestUtils.renderIntoDocument(<Footer/>);    
        let node = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'footer');
    });
});