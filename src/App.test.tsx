import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render App', async () => {
    const { container } = render(<App />);
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  it('should see radio buttons change', async () => {
    const { getByLabelText } = render(<App />);
    const radio1 = getByLabelText('Admin') as HTMLInputElement;
    const radio2 = getByLabelText('Manager') as HTMLInputElement;
    fireEvent.click(radio1);
    await waitFor(() => {
      expect(radio1).toBeChecked();
      expect(radio2).not.toBeChecked();
    });
  });

  it('should get mocked data', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText('David Miller')).toBeInTheDocument();
    });
  });
});
