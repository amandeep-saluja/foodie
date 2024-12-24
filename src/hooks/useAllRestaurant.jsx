import { useEffect, useState } from 'react';
import { GET_ALL_RESTAURANTS } from '../Constants.js';
import { findRestaurants } from '../utils/helper.jsx';
import useCurrentLocation from './useCurrentLocation';

const useAllRestaurant = () => {
    const [restaurants, setRestaurants] = useState(null);
    const location = useCurrentLocation();

    useEffect(() => {
        console.log('checking location data fetched or not: ', location);
        if (location) {
            console.log('location received');
            getRestaurants(location.lat, location.long);
        }
    }, [location]);

    const getRestaurants = async (lat, long) => {
        try {
            const response = await fetch(GET_ALL_RESTAURANTS(lat, long), {
                method: 'GET',
            });
            const data = await response.json();
            const list = findRestaurants(data);
            console.log('All Restaurants:', list);
            setRestaurants(list);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return restaurants;
};

export default useAllRestaurant;
