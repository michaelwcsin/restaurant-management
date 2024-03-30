import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Header, Input, Select } from "semantic-ui-react";
import EditMenu from "../../admin/menuinteraction/editMenu.component";
import "./menuItem.styles.css";

const MenuItem = ({ menuItem }) => {
  const { _id, name, description, price, status } = menuItem;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">
          <h1>{name}</h1>
          {/* <p>{_id}</p> */}
          <p>{description}</p>
          <p>${price}</p>
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
            required
            style={{ width: "100%" }}
          />
          <Header>Edit description:</Header>
          <Input
            placeholder="Edit description of menu item"
            name="name"
            value={description}
            required
            style={{ width: "100%" }}
          />
          <Header>Edit price:</Header>
          <Input
            placeholder="Edit price of menu item"
            name="name"
            value={price}
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
              options={[
                { text: "Available", value: true },
                { text: "Sold Out", value: false },
              ]}
            />
            <EditMenu />
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
