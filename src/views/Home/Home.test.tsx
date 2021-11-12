// Third party dependencies
import { render } from '@testing-library/react';

// Own components/hooks/constants
import Home from './Home';

describe('Home View', () => {
  test('should render title', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/title/i)).toBeInTheDocument();
  });
});
