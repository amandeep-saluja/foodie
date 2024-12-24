import { useEffect, useState } from 'react';
import { getLocation } from '../utils/helper';

const useCurrentLocation = () => {
    const [location, setLocation] = useState(null);

    const updateData = async () => {
        try {
            const loc = await getLocation();
            setLocation(loc);
        } catch (error) {
            console.error('Error getting location:', error);
        }
    };

    useEffect(() => {
        updateData();
    }, []);

    return location;
};

export default useCurrentLocation;
