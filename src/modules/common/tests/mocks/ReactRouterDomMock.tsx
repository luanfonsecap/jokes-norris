const mockedHistoryPush = jest.fn();
const mockedGoBack = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush, goBack: mockedGoBack }),
}));

export { mockedHistoryPush, mockedGoBack };
