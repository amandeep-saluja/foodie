import './RestaurantContainer.css';
import { Link } from 'react-router';
import RestaurantCard, {
    withPromotedLabel,
} from '../RestaurantCard/RestaurantCard.jsx';
import useAllRestaurant from '../../hooks/useAllRestaurant.jsx';
import { useState, useEffect } from 'react';

const RestaurantContainer = () => {
    // Get the restaurant data from the hook
    const { restaurants, isLoading, error } = useAllRestaurant();

    // State for the search text
    const [searchTxt, setSearchTxt] = useState('');

    // State for the filtered restaurants
    const [filteredRest, setFilteredRest] = useState([]);

    // Create the promoted restaurant card component
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // Update filteredRest whenever restaurants data changes
    useEffect(() => {
        // If restaurants are loaded, update the filteredRest state
        if (restaurants) {
            setFilteredRest(restaurants);
        }
    }, [restaurants]); // Run the effect whenever 'restaurants' changes

    // Handle the search functionality
    const handleSearch = () => {
        const filtered = restaurants.filter((rest) =>
            rest.info.name.toLowerCase().includes(searchTxt.toLowerCase())
        );
        setFilteredRest(filtered);
    };

    if (isLoading) {
        return (
            <div className="text-4xl flex justify-center text-blue-400">
                <svg
                    className="animate-spin ml-1 mr-3 h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                Loading...
            </div>
        ); // Display loading state
    }

    if (error) {
        return (
            <div className="text-5xl flex justify-center text-red-600">
                Error loading restaurants!
            </div>
        ); // Display error state
    }

    return (
        <div className="restaurant-container flex flex-col justify-center items-center">
            <div className="restaurant-search-block mb-4 bg-blue-200">
                <input
                    type="text"
                    data-testid="search-input"
                    className="search-input text-2xl p-4 border-2 border-blue-200 focus:border-blue-400 outline-none"
                    placeholder="Search for restaurants"
                    onChange={(event) => setSearchTxt(event.target.value)}
                    value={searchTxt}
                />
                <button
                    className="search-btn text-2xl p-4"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-data flex flex-row flex-wrap justify-center w-10/12">
                {filteredRest?.map((rest, idx) => (
                    <Link to={'/restaurant/' + rest?.info?.id} key={idx}>
                        {rest?.data?.promoted ? (
                            <RestaurantCardPromoted rest={rest} />
                        ) : (
                            <RestaurantCard rest={rest} key={rest?.info?.id} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RestaurantContainer;
