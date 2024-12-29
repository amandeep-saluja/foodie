import { fireEvent, render, screen } from '@testing-library/react';
import REST_MENU from '../__mocks__/restMenuMock.json';
import RestaurantMenu from '../components/RestaurantMenu/RestaurantMenu';
import { act } from 'react';
import { Provider } from 'react-redux';
import appStore from '../components/store/appStore';
import Header from '../components/Header/Header';
import { BrowserRouter } from 'react-router';
import '@testing-library/jest-dom';
import Cart from '../components/Cart/Cart';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(REST_MENU),
    })
);

global.navigator.geolocation = {
    getCurrentPosition: jest.fn((successCallback) => {
        successCallback({
            coords: {
                latitude: 12.9716,
                longitude: 77.5946,
            },
        });
    }),
};

it('Should load Restaurant Menu Component', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    );
    const accordian = screen.getByText('Whopper (6)');
    fireEvent.click(accordian);
    expect(screen.getByText('Cart (0 items)')).toBeInTheDocument();
    const addBtnList = screen.getAllByRole('button', { name: /ADD/ });
    fireEvent.click(addBtnList[0]);
    expect(screen.getByText('Cart (1 items)')).toBeInTheDocument();
    fireEvent.click(addBtnList[1]);
    expect(screen.getByText('Cart (2 items)')).toBeInTheDocument();
    expect(screen.getAllByTestId('foodItems').length).toBe(8);
    fireEvent.click(screen.getByRole('button', { name: 'Clear cart' }));
    expect(screen.getAllByTestId('foodItems').length).toBe(6);
    expect(
        screen.getByRole('heading', { name: 'Cart is empty' })
    ).toBeInTheDocument();
});
