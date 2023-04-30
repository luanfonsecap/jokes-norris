import {
  render,
  screen,
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
import { getRandomNumber } from '../../common/tests/utils/getRandomNumber';

const server = setupServer(...handlers);

const setup = () => {
  const renderResult = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  return { renderResult };
};

describe('Home integration tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should change theme clicking on switcher', async () => {
    const { renderResult } = setup();
    const { getByTestId, getByAltText, getByRole } = renderResult;

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

    const categoryName = categories[getRandomNumber(1, categories.length)];

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
