import { useEffect, useState } from 'react';
import { GET_ALL_RESTAURANTS } from '../Constants.js';
import { findRestaurants } from '../utils/helper.jsx';
import useCurrentLocation from './useCurrentLocation';

const useAllRestaurant = () => {
    const [restaurants, setRestaurants] = useState(null); // To hold the fetched restaurant data
    const [isLoading, setIsLoading] = useState(true); // To track loading state
    const [error, setError] = useState(null); // To track any error during fetching
    const location = useCurrentLocation();

    useEffect(() => {
        // If the location is fetched, start fetching restaurant data
        if (location) {
            console.log('Location received:', location);
            getRestaurants(location.lat, location.long);
        }
    }, [location]); // Runs when location changes

    const getRestaurants = async (lat, long) => {
        try {
            setIsLoading(true); // Start loading
            const response = await fetch(GET_ALL_RESTAURANTS(lat, long), {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch restaurants');
            }
            const data = await response.json();
            const list = findRestaurants(data);
            setRestaurants(list); // Set fetched data
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message); // Set the error state if the fetch fails
        } finally {
            setIsLoading(false); // Set loading to false once the request completes
        }
    };

    return { restaurants, isLoading, error }; // Return all states to the component
};

export default useAllRestaurant;
