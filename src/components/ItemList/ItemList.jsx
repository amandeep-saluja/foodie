import './ItemList.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { IMG_URL } from '../../Constants';

const ItemList = ({ itemCards }) => {
    const dispatch = useDispatch();

    const handleAddItem = (itemName) => {
        dispatch(addItem(itemName));
    };
    return (
        <div className="cat-menu">
            {itemCards?.map((item, idx) => (
                <div className="menu-item" key={idx} data-testid="foodItems">
                    <div className="menu-item-details">
                        <div className="menu-item-name">
                            {item.card.info.name}
                        </div>
                        <div className="menu-item-price">
                            {(item.card.info.defaultPrice ||
                                item.card.info.price) / 100}{' '}
                            &#8377;
                        </div>
                        <div className="menu-item-description">
                            {item.card.info.description}
                        </div>
                    </div>
                    <div className="menu-item-photo">
                        <img
                            src={IMG_URL + item.card.info.imageId}
                            alt="photo"
                        />
                        <button
                            className="menu-item-add-btn"
                            onClick={() => handleAddItem(item)}
                        >
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
