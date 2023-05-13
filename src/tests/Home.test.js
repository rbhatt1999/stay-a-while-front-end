import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home';
import store from '../components/configureStore';

describe('Home', () => {
  it('should render Home component', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(await findByText('Cottage by Maxwell')).toBeInTheDocument();
  });
  it('Show match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
