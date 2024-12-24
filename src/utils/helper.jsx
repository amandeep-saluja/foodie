export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ lat: latitude, long: longitude });
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            console.error(
                                'User denied the request for Geolocation.'
                            );
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.error(
                                'Location information is unavailable.'
                            );
                            break;
                        case error.TIMEOUT:
                            console.error(
                                'The request to get user location timed out.'
                            );
                            break;
                        default:
                            console.error('An unknown error occurred.');
                    }
                    reject(error);
                },
                {
                    enableHighAccuracy: true, // Use GPS if available
                    timeout: 10000, // Wait 10 seconds
                    maximumAge: 0, // Do not use cached position
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            reject(new Error('Geolocation not supported.'));
        }
    });
};

export const findRestaurants = (json) => {
    const result = [];

    // Helper function for recursion
    const recursiveSearch = (obj) => {
        if (!obj || typeof obj !== 'object') return;

        for (const key in obj) {
            if (
                key === 'restaurants' &&
                Array.isArray(obj[key]) &&
                obj[key].every((item) => typeof item === 'object')
            ) {
                // Concatenate the elements into the existing result array
                result.push(...obj[key]);
            } else if (typeof obj[key] === 'object') {
                recursiveSearch(obj[key]); // Recursively search nested objects
            }
        }
    };

    recursiveSearch(json);
    return result;
};
