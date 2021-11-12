// Third party dependencies
import { render } from '@testing-library/react';

// Own components/hooks/constants
import { AppContent } from './App';

// Mocks
jest.mock('router', () => () => <div data-testid="router" />);

test('renders learn react link', () => {
  const { getByTestId } = render(<AppContent />);

  expect(getByTestId(/router/i)).toBeInTheDocument();
});
