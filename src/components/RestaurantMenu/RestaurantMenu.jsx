import './RestaurantMenu.css';
import { useState } from 'react';
import { useParams } from 'react-router';
import useRestaurantInfo from '../../hooks/useRestaurantInfo';
import RestaurantCategory from '../RestaurantCategory/RestaurantCategory.jsx';

const RestaurantMenu = () => {
    const { restId } = useParams();
    const restaurantInfo = useRestaurantInfo(restId);
    const [showIndex, setShowIndex] = useState(0);
    if (restaurantInfo === null) return <>Loading</>;

    const {
        name,
        cuisines,
        cloudinaryImageId,
        avgRating,
        costForTwoMessage,
        sla,
        totalRatingsString,
    } = restaurantInfo?.data?.cards[2]?.card?.card?.info;

    const categories =
        restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards;

    const filteredCategories = categories.filter(
        (category) =>
            category.card.card['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

    return (
        <div className="rest-menu">
            <div className="rest rest-name">{name}</div>
            {/* <img src={IMG_URL + cloudinaryImageId} alt="Restaurant image" /> */}
            <div className="rest-content">
                <div className="rest-box">
                    <div className="rest rating-review">
                        <div className="rating-num">{avgRating}</div>
                        <div className="review-num">({totalRatingsString})</div>
                        .
                        <div className="price-for-two">{costForTwoMessage}</div>
                    </div>
                    <div className="rest cuisines">{cuisines?.join(', ')}</div>
                    <div className="rest location">Outlet location</div>
                    <div className="rest estimated-delivery-time">
                        {sla?.deliveryTime} mins . {sla?.lastMileTravelString}
                    </div>
                </div>
                <div className="rest-menu-content">
                    {filteredCategories?.map((category, idx) => (
                        <RestaurantCategory
                            key={idx}
                            data={category}
                            showItems={idx === showIndex ? true : false}
                            setShowIndex={() =>
                                showIndex === idx
                                    ? setShowIndex(-1)
                                    : setShowIndex(idx)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
