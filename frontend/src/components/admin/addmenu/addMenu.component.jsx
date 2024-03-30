import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Header,
  Input,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
  Select,
} from "semantic-ui-react";
import "./addMenu.styles.css";

// ! Where is the CSS for form-control class?

function AddMenu({ restaurant }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue =
      name === "price" ? parseFloat(value).toFixed(2) : value;
    setFormData({ ...formData, [name]: processedValue });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/menus",
        formData
      );
      const createdMenu = response.data._id;
      // console.log(createdMenu);

      await axios.patch(`http://localhost:8000/restaurants/${restaurant}`, {
        $push: { menuItems: createdMenu },
      });

      setOpen(false);
    } catch (error) {
      console.error("Error adding menu item:", error);
    }
    console.log(formData);
  };

  const handleChangeSelection = (e, { value }) => {
    setFormData({ ...formData, status: value });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button secondary>Add Item</Button>}
      style={{ width: "50%", height: "58%", top: "25%", left: "25%" }}
    >
      <ModalHeader>Add Menu Item</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <Header>Name:</Header>
          <Input
            placeholder="Name of menu item"
            name="name"
            required
            onChange={handleChange}
            style={{ width: "100%" }}
          />
          <Header>Description:</Header>
          <Input
            placeholder="Describe menu item"
            name="description"
            onChange={handleChange}
            style={{ width: "100%" }}
          />
          <Header>Price:</Header>
          <Input
            placeholder="Input price of item (Automatically rounds to two decimal places)"
            name="price"
            required
            onChange={handleChange}
            style={{ width: "100%" }}
          />
          <Header>Status:</Header>
          <Select
            placeholder="Choose availability"
            name="status"
            required
            onChange={handleChangeSelection}
            options={[
              { text: "Available", value: true },
              { text: "Sold Out", value: false },
            ]}
          />
        </ModalDescription>
      </ModalContent>

      <ModalActions>
        <Button color="black" onClick={() => setOpen(false)}>
          Exit
        </Button>
        <Button
          content="Add to Menu"
          labelPosition="right"
          icon="checkmark"
          onClick={handleSubmit}
          positive
        />
      </ModalActions>
    </Modal>
  );
}

export default AddMenu;
