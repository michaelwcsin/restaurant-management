import React, { useState } from "react";
import { Button, Card, Dropdown, Image, Modal } from "semantic-ui-react";

const OrderCard = ({ order }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleApproveClick = () => {
    setShowButtons(false);
  };

  return (
    <div>
      <Card style={{ width: "30%" }}>
        <Card.Content onClick={handleCardClick} style={{ cursor: "pointer" }}>
          <Card.Header>{order.customerName}</Card.Header>
          <Card.Meta>{order.orderStatus}</Card.Meta>
          <Card.Description>{order.customerEmail}</Card.Description>
          <Card.Description>{order.customerPhone}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {showButtons ? (
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  style={{ width: "20%" }}
                  onClick={handleApproveClick}
                >
                  Approve
                </Button>
                <Button basic color="red" style={{ width: "20%" }}>
                  Decline
                </Button>
              </div>
            </Card.Content>
          ) : (
            <Dropdown placeholder="Select Status" fluid selection floating>
              <Dropdown.Menu>
                <Dropdown.Item>Ordered</Dropdown.Item>
                <Dropdown.Item>In-Progress</Dropdown.Item>
                <Dropdown.Item>Awaiting Pickup</Dropdown.Item>
                <Dropdown.Item>Completed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Card.Content>
      </Card>
      <Modal
        open={modalOpen}
        size="small"
        onClose={handleCloseModal}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "40%",
        }}
      >
        <Modal.Header>Order Items</Modal.Header>
        <Modal.Content style={{ overflowY: "auto", height: "66%" }}>
          <ul>
            {order.menuItems.map((itemName, index) => (
              <li key={`${order._id}-${index}`} className="menu-item">
                {itemName}
              </li>
            ))}
          </ul>
        </Modal.Content>
        <Modal.Actions
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Modal.Content
            style={{
              fontFamily: "Roboto",
              fontSize: "1.75rem",
              fontWeight: "700",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            Subtotal: ${order.sumPrice}
          </Modal.Content>
          <Button onClick={handleCloseModal} color="black">
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default OrderCard;
