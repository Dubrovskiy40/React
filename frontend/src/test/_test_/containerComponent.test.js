
import AuthPage from '../../components/Main/AuthPage/AuthPage';
import { shallow } from 'enzyme';

it('should render', () => {
   const handleSubmit = jest.fn();
   const wrapper = shallow(<AuthPage />);
   expect(wrapper.state('value')).toBe('');
   expect(wrapper.find('span').length).toBe(0);
   expect(wrapper.find('button').length).toBe(0);
});
