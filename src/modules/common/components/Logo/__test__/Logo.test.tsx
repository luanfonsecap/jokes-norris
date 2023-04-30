import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { AllTheProviders } from '../../../tests/utils/AllTheProviders';

import { Logo } from '..';

interface SetupProps {
  showTitle?: boolean;
}

const mockedHistoryPush = vi.fn();
vi.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush }),
}));

const setup = ({ showTitle = false }: SetupProps) => {
  const renderResult = render(<Logo showTitle={showTitle} />, {
    wrapper: AllTheProviders,
  });

  return { renderResult };
};

describe('Logo', () => {
  it('should render with default props', () => {
    const renderResult = render(<Logo />, {
      wrapper: AllTheProviders,
    });
    const { container, getByAltText } = renderResult;

    expect(container).toBeInTheDocument();
    expect(getByAltText(/Chuck Norris Character/)).toBeInTheDocument();
  });

  it('should show title', () => {
    const renderResult = render(<Logo showTitle />, {
      wrapper: AllTheProviders,
    });

    const { getByText } = renderResult;

    expect(getByText(/Jokes Norris/)).toBeInTheDocument();
  });

  it('should redirect to home page when clicked', () => {
    const renderResult = render(<Logo />, {
      wrapper: AllTheProviders,
    });

    const { getByRole } = renderResult;

    const button = getByRole('button');

    userEvent.click(button);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });
});
