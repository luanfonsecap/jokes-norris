import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';

import App from '../../../App';
import { AppSignatureStorage } from '../../common/constants/storage';
import { categories } from '../../common/tests/mocks/categories';
import { handlers } from '../../common/tests/mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setup = () => {
  const renderResult = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  return { renderResult };
};

describe('Home integration tests', () => {
  it('should change theme clicking on switcher', () => {
    const { renderResult } = setup();
    const { getByTestId, getByAltText } = renderResult;

    const sunThemeIcon = getByAltText('Sun in light mode');
    const moonThemeIcon = getByAltText('Moon in dark mode');

    expect(localStorage.getItem(`${AppSignatureStorage}theme`)).toBe(null);
    expect(moonThemeIcon).toBeVisible();

    userEvent.click(getByTestId('toggleInput'));

    expect(localStorage.getItem(`${AppSignatureStorage}theme`)).toBe('dark');
    expect(sunThemeIcon).toBeVisible();
  });

  it('should navigate user to joke page with selected category on button clicked', async () => {
    const { renderResult } = setup();
    const { getByRole, getByText, getByTestId } = renderResult;

    const categoryName = categories[0];

    await waitForElementToBeRemoved(() => getByTestId('loading'));

    await waitFor(() => {
      categories.forEach(category => {
        expect(getByRole('button', { name: category })).toBeInTheDocument();
      });
    });

    const button = getByRole('button', { name: categoryName });

    userEvent.click(button);

    await waitFor(() => {
      expect(getByText(categoryName)).toBeInTheDocument();
    });
  });
});
