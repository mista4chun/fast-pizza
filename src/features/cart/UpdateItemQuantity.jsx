import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../ui/Buttons";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Buttons
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Buttons>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Buttons
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Buttons>
    </div>
  );
}

export default UpdateItemQuantity;