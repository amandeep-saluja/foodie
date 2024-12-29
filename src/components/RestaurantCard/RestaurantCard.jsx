import { IMG_URL } from '../../Constants';
import './RestaurantCard.css';

const RestaurantCard = (props) => {
    const photo = props.rest.info.cloudinaryImageId;
    const name = props.rest.info.name;
    const rating = props.rest.info.avgRating;
    const cusines = props.rest.info.cuisines.join(', ');
    const location =
        props.rest.info.locality + ', ' + props.rest.info?.areaName;
    return (
        <div
            className="restaurant w-96"
            data-testid="restCard"
            onClick={() => {
                console.log();
            }}
        >
            <div className="rest photo">
                <img src={IMG_URL + photo} alt="" />
            </div>
            <div className="rest name">{name}</div>
            <div className="rest rating">{rating}</div>
            <div className="rest cusines">{cusines}</div>
            <div className="rest location">{location}</div>
        </div>
    );
};

const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="promoted">
                <div className="promoted-label">Promoted</div>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
export { withPromotedLabel };
