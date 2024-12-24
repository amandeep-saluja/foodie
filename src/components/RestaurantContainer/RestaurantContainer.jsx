import './RestaurantContainer.css';
import { Link } from 'react-router';
import RestaurantCard, {
    withPromotedLabel,
} from '../RestaurantCard/RestaurantCard.jsx';
import useAllRestaurant from '../../hooks/useAllRestaurant.jsx';

const RestaurantContainer = () => {
    const restaurants = useAllRestaurant();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    return (
        <div className="restaurant-container">
            {restaurants?.map((rest, idx) => (
                <Link to={'/restaurant/' + rest?.info?.id} key={idx}>
                    {rest?.data?.promoted ? (
                        <RestaurantCardPromoted rest={rest} />
                    ) : (
                        <RestaurantCard rest={rest} key={rest?.info?.id} />
                    )}
                </Link>
            ))}
        </div>
    );
};

export default RestaurantContainer;
