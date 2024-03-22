import * as Dialog from "@radix-ui/react-dialog";
import "./menuItem.styles.css";

const MenuItem = ({ menuItem }) => {
  const { name, description, price } = menuItem;

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
            <button>Minus</button>
            <p>Count</p>
            <button>Plus</button>
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
