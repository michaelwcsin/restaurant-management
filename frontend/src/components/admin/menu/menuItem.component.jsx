import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonOr,
  Header,
  Input,
  Select,
} from "semantic-ui-react";
import "./menuItem.styles.css";

const MenuItem = ({ restaurant, menuItem, handleRefresh }) => {
  const {
    _id,
    name: initialName,
    description: initialDescription,
    price: initialPrice,
    status: initialStatus,
  } = menuItem;
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);
  const [status, setStatus] = useState(initialStatus);

  // ! Need to delete from restaurant menuList
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/menus/${_id}`);

      await axios.patch(`http://localhost:8000/restaurants/${restaurant}`, {
        $pull: { menuItems: _id },
      });

      console.log(restaurant);
      handleRefresh();
    } catch (error) {
      console.log("Error deleting menu item:", error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.patch(`http://localhost:8000/menus/${_id}`, {
        name,
        description,
        price,
        status,
      });
    } catch (error) {
      console.log("Error updating menu item:", error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">
          <div className="menu-item">
            <h1>{name}</h1>
            <h3>
              <span className={status ? "available" : "sold-out"}>
                {status ? "Available" : "Sold Out"}
              </span>
            </h3>
          </div>
          <p>Description: {description}</p>
          <p>Price: ${price}</p>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Header>Edit name:</Header>
          <Input
            placeholder="Edit name of menu item"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%" }}
          />
          <Header>Edit description:</Header>
          <Input
            placeholder="Edit description of menu item"
            name="name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: "100%" }}
          />
          <Header>Edit price:</Header>
          <Input
            placeholder="Edit price of menu item"
            name="name"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{ width: "100%" }}
          />
          <Header>Edit availability:</Header>

          <div className="edit-options">
            <Select
              placeholder="Edit menu item availability"
              name="status"
              required
              value={status}
              onChange={(e, { value }) => setStatus(value)}
              options={[
                { text: "Available", value: true },
                { text: "Sold Out", value: false },
              ]}
            />
            <ButtonGroup>
              <Dialog.Close asChild>
                <Button negative onClick={handleDelete}>
                  Delete Menu
                </Button>
              </Dialog.Close>
              <ButtonOr />
              <Dialog.Close asChild>
                <Button positive onClick={handleSave}>
                  Save Changes
                </Button>
              </Dialog.Close>
            </ButtonGroup>
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
