import React from 'react';
import { shallow } from 'enzyme';
import DetailHead from '../src/components/DetailHead.jsx';
import PopupCal from '../src/components/PopupCal.jsx';

describe('<DetailHead />', () => {
	const mock = {
		data:{
			address: 'berkeley',
			subTitle: 'lorem',
			price: 10000,
			handleClick: (a) => {console.log(a)},
			isCal: true
		}
	};

  it('The price should rendered string', () => {
  	const wrapper = shallow(<DetailHead {...mock}/>);
    expect(wrapper.find('.price').text()).toEqual('$10,000');
  });

  it('The address and subtitle should change according to the props ', () => {
  	const wrapper = shallow(<DetailHead {...mock}/>);

    expect(wrapper.find('.main-title').text()).toEqual('berkeley');
    expect(wrapper.find('.sub-title').text()).toEqual('lorem');
  });

});