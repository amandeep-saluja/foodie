import './RestaurantCategory.css';
import UP from '../../assets/octicon--chevron-up-16.svg';
import DOWN from '../../assets/octicon--chevron-down-16.svg';
import ItemList from '../ItemList/ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const { title, itemCards } = data.card.card;

    //console.log(itemCards);
    return (
        <div className="category">
            <div className="accordian" onClick={() => setShowIndex()}>
                <div className="cat-name">
                    {title}&nbsp;({itemCards.length})
                </div>
                {showItems ? (
                    <img className="expand-btn" src={DOWN} alt="DOWN" />
                ) : (
                    <img className="expand-btn" src={UP} alt="UP" />
                )}
            </div>
            {showItems && <ItemList itemCards={itemCards} />}
        </div>
    );
};

export default RestaurantCategory;
