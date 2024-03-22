import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import addSVG from "../../../assets/itemcontrol/add.svg";
import subtractSVG from "../../../assets/itemcontrol/subtract.svg";
import "./menuItem.styles.css";

const MenuItem = ({ menuItem }) => {
  const { name, description, price } = menuItem;
  const [count, setCount] = useState(1);

  const addToCount = () => {
    if (count < 99) {
      setCount(count + 1);
    } else {
      setCount(99);
    }
  };

  const subtractFromCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">
          <h1>{name}</h1>
          <p>{description}</p>
          <p>${price}</p>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">{name}</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            {description}
          </Dialog.Description>

          <div className="add-items">
            <button className="item-button" onClick={subtractFromCount}>
              <img src={subtractSVG} alt="subtractSVG" />
            </button>
            <p>{count}</p>
            <button className="item-button" onClick={addToCount}>
              <img src={addSVG} alt="addSVG" />
            </button>
          </div>

          <div className="add-to-cart">
            <Dialog.Close asChild>
              <button className="Button green">Add To Cart</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close"></button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MenuItem;
