import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Body from '../components/Body/Body';
import ALL_RESTAURANTS from '../__mocks__/allRestaurantMock.json';
import { act } from 'react';
import { BrowserRouter } from 'react-router';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(ALL_RESTAURANTS);
        },
        ok: true,
    });
});

global.navigator.geolocation = {
    getCurrentPosition: jest.fn((successCallback, errorCallback) => {
        successCallback({
            coords: {
                lat: 19.0759837,
                long: 72.8776559,
            },
        });
    }),
};

it('Should render the Body Component with search', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const searchInput = screen.getByRole('button', {
        name: 'Search',
    });

    expect(searchInput).toBeInTheDocument();
});

it('Should search for restaurants for burger text input', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const cardsBeforeSearch = screen.getAllByTestId('restCard');

    expect(cardsBeforeSearch.length).toBe(28);

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'Burger' } });

    const searchBtn = screen.getByRole('button', {
        name: 'Search',
    });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId('restCard');

    expect(cardsAfterSearch.length).toBe(4);
});
