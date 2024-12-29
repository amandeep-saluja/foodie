import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import appStore from '../components/store/appStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import '@testing-library/jest-dom';

describe('Header Component testcases', () => {
    it('Should load the Header component with a login button', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginBtnByText = screen.getByText('Login');
        expect(loginBtnByText).toBeInTheDocument();

        const loginBtnByRole = screen.getByRole('button', { name: 'Login' });
        expect(loginBtnByRole).toBeInTheDocument();
    });

    it('Should load the Header component with a Cart items 0', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginBtnByText = screen.getByText('Cart (0 items)');
        expect(loginBtnByText).toBeInTheDocument();
    });

    it('Should load the Header component with a Cart items using regex', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginBtnByText = screen.getByText(/Cart/);
        expect(loginBtnByText).toBeInTheDocument();
    });

    it('Should change Login Button to Logout on click', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginBtn = screen.getByRole('button', { name: 'Login' });

        fireEvent.click(loginBtn);

        const logoutBtn = screen.getByRole('button', { name: 'Logout' });

        fireEvent.click(logoutBtn);

        expect(logoutBtn).toBeInTheDocument();
    });
});
