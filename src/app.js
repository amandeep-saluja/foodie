import React, { useEffect, useState, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Body from './components/Body/Body.jsx';
import Help from './components/Help/Help.jsx';
import Error from './components/Error/Error.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu.jsx';
import UserContext from './utils/UserContext.jsx';
import { Provider } from 'react-redux';
import appStore from './components/store/appStore.jsx';
import Cart from './components/Cart/Cart.jsx';

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState('Gui');
    //authentication logic
    useEffect(() => {
        //API call
        const data = {
            name: 'Amandeep Singh',
        };
        setUserInfo(data.name);
    }, []);
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: 'Raja', setUserInfo }}>
                <Header />
                <UserContext.Provider
                    value={{ loggedInUser: userInfo, setUserInfo }}
                >
                    <Outlet />
                </UserContext.Provider>
                <Footer />
            </UserContext.Provider>
        </Provider>
    );
};

const Contact = lazy(() => import('./components/Contact/Contact.jsx'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/contact',
                element: (
                    <Suspense fallback={<div>Contact Page Loading...</div>}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: '/help',
                element: <Help />,
            },
            {
                path: '/restaurant/:restId',
                element: <RestaurantMenu />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
]);

const app = document.getElementById('app');

const root = createRoot(app);

root.render(<RouterProvider router={appRouter} />);
