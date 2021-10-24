const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockedHistoryPush }),
}));

export { mockedHistoryPush };
