import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AllTheProviders } from '../../../tests/utils/AllTheProviders';

import Switch from '..';

interface SetupProps {
  initialChecked?: boolean;
}

const setup = ({ initialChecked = false }: SetupProps) => {
  const onClick = jest.fn();
  const renderResult = render(
    <Switch onClick={onClick} checked={initialChecked} />,
    {
      wrapper: AllTheProviders,
    },
  );

  return { onClick, renderResult };
};

describe('Switch', () => {
  it('should render with default props', () => {
    const { renderResult } = setup({});
    const { container, getByAltText } = renderResult;

    expect(container).toBeInTheDocument();
    expect(getByAltText(/Sun in light mode/)).toBeInTheDocument();
    expect(getByAltText(/Moon in dark mode/)).toBeInTheDocument();
  });

  it('should execute function passed by props when on click element', () => {
    const { renderResult, onClick } = setup({});

    const { getByTestId } = renderResult;

    const switchButton = getByTestId('toggleInput');

    userEvent.click(switchButton);

    expect(onClick).toHaveBeenCalled();
  });
});
