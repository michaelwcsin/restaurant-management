import React from "react";
import {
  Button,
  Header,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import "./addMenu.styles.css";

// ! Where is the CSS for form-control class?

function AddMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button secondary>Add Item</Button>}
      style={{ width: "50%", height: "56%", top: "25%", left: "25%" }}
    >
      <ModalHeader>Add Menu Item</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <Header>Name:</Header>
          <input type="text" className="form-control" required />
          <Header>Description:</Header>
          <input type="text" className="form-control" required />
          <Header>Price ($):</Header>
          <input type="text" className="form-control" required />
          <Header>Status:</Header>
          <select className="form-control">
            <option value="available">Available</option>
            <option value="soldout">Sold Out</option>
          </select>
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
          onClick={() => setOpen(false)}
          positive
        />
      </ModalActions>
    </Modal>
  );
}

export default AddMenu;
