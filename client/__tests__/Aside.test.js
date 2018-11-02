import React from 'react';
import { shallow, mount } from 'enzyme';
import Aside from '../src/components/Aside.jsx';

describe('<Aside />', () => {

	const state = {
		nameBool: true,
		phoneBool: true,
		mailBool: true,
		name: 'john',
		phone: '5557778888',
		mail: 'john@fakeid.com',
		starpercent: 10,
		starRate: 1
	}

	const mock = {
		data:{
			address: 'house of john'
		}
	}

	it('renders without crashing', () => {
		shallow(<Aside />);
	});

	it('react for clicking button', () => {
		const onClick = jest.fn()
		const wrapper = mount(<Aside {...mock} onClick={onClick}/>);
		wrapper.setState(state);

		wrapper.find('.btn-container input').first().simulate('click');
		expect(onClick).toBeCalledWith('');

	});

})