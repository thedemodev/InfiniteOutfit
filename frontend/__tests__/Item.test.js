import ItemComponent from '../components/Item';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
    id: 'ABC123',
    title: 'A Cool Item',
    price: 4000,
    description: 'This item is really cool!',
    image: 'dog.jpg',
    largeImage: 'largedog.jpg',
};

describe('<Item/>', () => {
    it('renders and matches the snapshot', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
    // it('renders the image properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //     const img = wrapper.find('img');
    //     // console.log(img.props())
    //     expect(img.props().src).toBe(fakeItem.image);
    //     expect(img.props().alt).toBe(fakeItem.title);
    // });

    // it('renders the pricetag and title properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //     const PriceTag = wrapper.find('PriceTag');
    //     console.log(PriceTag.children().text());
    //     expect(PriceTag.children().text()).toBe("$40");
    //     // console.log(wrapper.debug());
    //     expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
    // });

    // it('renders out buttons properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //     const buttonList = wrapper.find('.buttonList');
    //     expect(buttonList.children()).toHaveLength(3);
    //     expect(buttonList.find('Link')).toHaveLength(1);
    //     expect(buttonList.find('AddToCart').exists()).toBe(true);
    //     expect(buttonList.find('DeleteItem').exists()).toBe(true);
    //     console.log(buttonList.children());
    // })
})