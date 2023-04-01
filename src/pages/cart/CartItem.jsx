//components
import ListGroup from "react-bootstrap/ListGroup";
import "./CartItem.scss";

//icons
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

//react-redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, name, price, image, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        image,
        price,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroup.Item className="border-0 cart_item">
      <div className="cart_item_info d-flex gap-5">
        <img src={image} alt="cart-item" />

        <div
          className="cart_product_info 
d-flex-column 
align-items-center
justify-content-between
w-100"
        >
          <h6 className="cart__product_title">{name}</h6>

          <p
            className="d-flex
align-items-center 
gap-5 cart_product_price"
          >
            {quantity}x <span> &#8358;{' '}{totalPrice}</span>
          </p>

          <div className="d-flex align-items-center justify-content-between gap-3 increase_decrease_btn">
            <span className="increase__btn" onClick={incrementItem}>
              <AiOutlinePlus />
            </span>

            <span className="quantity">{quantity}</span>

            <span className="decrease__btn" onClick={decrementItem}>
              <RiSubtractFill />
            </span>
          </div>
        </div>

        <span className="delete_btn" onClick={deleteItem}>
          <AiOutlineClose />
        </span>
      </div>
    </ListGroup.Item>
  );
};

export default CartItem;
