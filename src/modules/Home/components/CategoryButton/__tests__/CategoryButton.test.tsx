import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedHistoryPush } from '../../../../common/tests/mocks/ReactRouterDomMock';

import CategoryButton from '..';

import { AllTheProviders } from '../../../../common/tests/utils/AllTheProviders';

const setup = (category: string) => {
  const renderResult = render(<CategoryButton category={category} />, {
    wrapper: AllTheProviders,
  });

  const { getByRole } = renderResult;

  const button = getByRole('button');

  return { renderResult, category, button };
};

describe('CategoryButton', () => {
  it('should render with default props', () => {
    const { renderResult, category } = setup('fakeCategory');
    const { container, getByText } = renderResult;

    expect(container).toBeInTheDocument();
    expect(getByText(category)).toBeInTheDocument();
  });

  it('should navigate to joke page with category when clicked', () => {
    const { button, category } = setup('fakeCategory');

    userEvent.click(button);

    expect(mockedHistoryPush).toHaveBeenCalledWith(`/joke/${category}`);
  });
});
