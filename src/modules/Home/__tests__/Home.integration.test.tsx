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
import { lightTheme, darkTheme } from '../../common/css/theme';
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
    const { getByTestId, getByAltText, findByText } = renderResult;

    const sunThemeIcon = getByAltText('Sun in light mode');
    const moonThemeIcon = getByAltText('Moon in dark mode');

    expect(localStorage.getItem(`${AppSignatureStorage}theme`)).toBe(null);
    expect(moonThemeIcon).toBeVisible();

    const categoryName = categories[getRandomNumber(0, categories.length - 1)];

    const button = await findByText(categoryName);

    expect(button).toHaveStyle({
      color: lightTheme.colors.textLight,
    });

    userEvent.click(getByTestId('toggleInput'));

    expect(localStorage.getItem(`${AppSignatureStorage}theme`)).toBe('dark');
    expect(sunThemeIcon).toBeVisible();
    expect(button).toHaveStyle({
      color: darkTheme.colors.textLight,
    });
  });

  it('should navigate user to joke page with selected category on button clicked', async () => {
    const { renderResult } = setup();
    const { getAllByRole, getByText, getByTestId } = renderResult;

    const categoryName = categories[getRandomNumber(0, categories.length - 1)];

    await waitForElementToBeRemoved(() => getByTestId('loading'));

    await waitFor(() => {
      expect(getAllByRole('button').length).toBe(categories.length + 1); // +1 because of logo button
    });

    const button = getByText(categoryName);

    userEvent.click(button);

    await waitFor(() => {
      expect(getByText(categoryName)).toBeInTheDocument();
    });
  });
});
