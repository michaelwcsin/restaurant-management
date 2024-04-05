import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Card, Modal } from "semantic-ui-react";
import axios from "axios";


const OrderCard = ({ order }) => {
  const [modalOpen, setModalOpen] = useState(false);


  const handleCompletedClick = async () => {
    try {
      const update = { status: "completed" };
      const response = await axios.patch(`http://localhost:8000/orders/${order._id}`, update);
      console.log("Order status updated", response.data);
      
    } catch (error) {
      console.error("Error updating order status:", error);
      console.log("Error response:", error.response);
    }
  };
  


  

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div>
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Content onClick={handleCardClick} style={{ cursor: "pointer" }}>
          <Card.Header>{order.customerName}</Card.Header>
          <Card.Description>{order.customerPhone}</Card.Description>
          <Card.Description><b>Status: {order.status}</b></Card.Description>
        </Card.Content>

        <Card.Content>
          <Card.Description>
              Date: {order.pickUpDate}
          </Card.Description>
        </Card.Content>

        <Card.Content>
          <Card.Description>
              Time: {order.pickUpTime}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          
            <Card.Content extra>
            <div>
            {order.status !== 'completed' && (
              <Button
                style={{ width: "70%" }}
                className="ui toggle button active"
                onClick={handleCompletedClick}
              >
                Complete?
              </Button>
            )}
            </div>
            </Card.Content>
          
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
        <Modal.Content style={{ overflowY: "auto", height: "56%" }}>
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
