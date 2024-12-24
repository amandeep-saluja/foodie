import { useEffect, useState } from 'react';
import { RESTAURANT_MENU } from '../Constants';
import useCurrentLocation from './useCurrentLocation';

const useRestaurantInfo = (restId) => {
    const [restInfo, setRestInfo] = useState(null);
    const location = useCurrentLocation();

    useEffect(() => {
        if (location) {
            getMenu(location.lat, location.long);
        }
    }, [location]);

    const getMenu = async (lat, long) => {
        const response = await fetch(RESTAURANT_MENU(lat, long, restId));
        const data = await response.json();
        setRestInfo(data);
    };

    return restInfo;
};

export default useRestaurantInfo;
