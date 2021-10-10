import renderer from 'react-test-renderer';
import Customer from './Customer';
import { Person } from '../interfaces/person';

describe('<Customer />', () => {
  const customerDetail: Person = {
    name: 'David Miller',
    role: 'ADMIN',
    email: 'david@gmail.com',
    id: '73bae2af-4fa4-4023-8829-1034604e7590'
  };
  it('should render Customer', () => {
    const component = renderer.create(<Customer customer={customerDetail} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
