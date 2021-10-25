import { render } from '@testing-library/react';

import Footer from '..';

import { AllTheProviders } from '../../../tests/utils/AllTheProviders';

const setup = () => {
  const renderResult = render(<Footer />, {
    wrapper: AllTheProviders,
  });

  return { renderResult };
};

describe('Footer', () => {
  it('should render with default props', () => {
    const { renderResult } = setup();
    const { container } = renderResult;

    expect(container).toBeInTheDocument();
  });

  it('should render with default props', () => {
    const { renderResult } = setup();
    const { container } = renderResult;

    expect(container).toBeInTheDocument();
  });
});
