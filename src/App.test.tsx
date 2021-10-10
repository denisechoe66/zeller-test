import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  it('should render App', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('test radio button change', () => {
    const { getByLabelText } = render(<App />);
    const radio1 = getByLabelText('Admin') as HTMLInputElement;
    const radio2 = getByLabelText('Manager') as HTMLInputElement;
    fireEvent.click(radio1);
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();
  });
});
