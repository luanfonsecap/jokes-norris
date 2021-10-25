import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedGoBack } from '../../../../common/tests/mocks/ReactRouterDomMock';

import BackButton from '..';

import { AllTheProviders } from '../../../../common/tests/utils/AllTheProviders';

const setup = () => {
  const renderResult = render(<BackButton />, {
    wrapper: AllTheProviders,
  });

  return { renderResult };
};

describe('BackButton', () => {
  it('should render with default props', () => {
    const { renderResult } = setup();

    const { getByAltText } = renderResult;

    expect(getByAltText(/Arrow back/)).toBeInTheDocument();
  });

  it('should execute function to navigate to previous page when clicked', () => {
    const { renderResult } = setup();

    const { getByRole } = renderResult;

    const button = getByRole('button');

    userEvent.click(button);

    expect(mockedGoBack).toHaveBeenCalled();
  });
});
