import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedHistoryPush } from '../../../tests/mocks/ReactRouterDomMock';
import { AllTheProviders } from '../../../tests/utils/AllTheProviders';

import Switch from '..';

interface SetupProps {
  showTitle?: boolean;
}

const setup = ({ showTitle = false }: SetupProps) => {
  const renderResult = render(<Switch showTitle={showTitle} />, {
    wrapper: AllTheProviders,
  });

  return { renderResult };
};

describe('Logo', () => {
  it('should render with default props', () => {
    const { renderResult } = setup({});
    const { container, getByAltText } = renderResult;

    expect(container).toBeInTheDocument();
    expect(getByAltText(/Chuck Norris Character/)).toBeInTheDocument();
  });

  it('should show title', () => {
    const { renderResult } = setup({ showTitle: true });

    const { getByText } = renderResult;

    expect(getByText(/Jokes Norris/)).toBeInTheDocument();
  });

  it('should redirect to home page when clicked', () => {
    const { renderResult } = setup({});

    const { getByRole } = renderResult;

    const button = getByRole('button');

    userEvent.click(button);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/');
  });
});
