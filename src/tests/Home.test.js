import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home';
import store from '../components/configureStore';

describe('Home', () => {
  const homeStayList = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      location: 'Bali, Indonesia',
      rating: 4.8,
      images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    },
    {
      id: 2,
      name: 'Dolor Sit Amet',
      location: 'Phuket, Thailand',
      rating: 4.5,
      images: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
    },
  ];

  test('renders a list of HomeStays', () => {
    const imgSlide = jest.fn();
    jest.mock('../components/home/Home', () => {
      const originalModule = jest.requireActual('../components/home/Home');
      return {
        ...originalModule,
        imgSlide: jest.fn(),
      };
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home homeStayList={homeStayList} />
        </BrowserRouter>
      </Provider>,
    );

    const container = getByTestId('home-stay-list');
    // expect(container).toBeInTheDocument();

    const homeStayElements = container.querySelectorAll('.col');
    expect(homeStayElements).toHaveLength(homeStayList.length);

    homeStayElements.forEach((homeStayElement, index) => {
      const homeStay = homeStayList[index];
      expect(homeStayElement).toHaveTextContent(homeStay.name);
      expect(homeStayElement).toHaveTextContent(homeStay.location);
      expect(homeStayElement).toHaveTextContent(homeStay.rating);

      expect(imgSlide).toHaveBeenCalledWith({
        id: homeStay.id,
        images: homeStay.images,
      });
    });
  });
});
