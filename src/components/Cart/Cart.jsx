import ItemList from '../ItemList/ItemList';
import './Cart.css';
import { clearCart } from '../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    return (
        <div className="cart-container">
            <div className="cart-label">Cart</div>
            {items.length === 0 ? (
                <h3 className="empty-msg">Cart is empty</h3>
            ) : (
                <>
                    <button
                        className="clear-cart"
                        onClick={() => {
                            dispatch(clearCart());
                        }}
                    >
                        Clear cart
                    </button>
                    <ItemList itemCards={items} />
                    <div className="total">
                        <div className="total-label">To Pay</div>
                        <div className="total-price">
                            {items
                                .map(
                                    (item) =>
                                        item.card.info.price ||
                                        item.card.info.defaultPrice
                                )
                                .reduce((total, num) => (total += num), 0) /
                                100}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
