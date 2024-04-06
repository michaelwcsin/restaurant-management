import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Card, Dropdown, Image, Modal } from "semantic-ui-react";

const OrderCard = ({ order }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Ordered");
  const [showReadyForPickup, setShowReadyForPickup] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [soldOutPopupOpen, setSoldOutPopupOpen] = useState(false);

  const handleDropdownChange = (event, data) => {
    setSelectedStatus(data.value);
  };

  const handleApproveClick = async () => {
    setShowButtons(false);
    setShowReadyForPickup(true);
    try {
      const update = {};
      if (selectedDate) {
        update.pickUpDate = selectedDate;
      }
      if (selectedTime) {
        update.pickUpTime = selectedTime;
      }
  
      
      console.log("Status of menu items:");
      order.menuItems.forEach(item => {
        console.log(`${item.name}: ${item.status}`);
      });
  
      // Check if any menu item is sold out
      const hasFalseStatus = order.menuItems.some(item => !item.status);
  
      if (hasFalseStatus) {
        // one or more menu item status is false
        update.status = "cancelled";
        setSoldOutPopupOpen(true);
        setShowReadyForPickup(false);
        setShowCompleted(false);
      } else {
        // if no item is sold out
        update.status = "in-progress";
      }
  
      const response = await axios.patch(
        `http://localhost:8000/orders/${order._id}`,
        update
      );
      console.log("Order updated:", response.data);
      order.status = response.data.status;
    } catch (error) {
      console.error("Error updating order:", error);
      console.log("Error response:", error.response);
    }
  };
  

  const handleDeclineClick = async () => {
    try {
      const update = { status: "cancelled" };
      const response = await axios.patch(
        `http://localhost:8000/orders/${order._id}`,
        update
      );
      console.log("Order status updated:", response.data);
      order.status = response.data.status;
      const deleteResponse = await axios.delete(
        `http://localhost:8000/orders/${order._id}`
      );
      console.log("Order deleted:", deleteResponse.data);
  
      setShowButtons(false);
    } catch (error) {
      console.error("Error handling decline:", error);
      console.log("Error response:", error.response);
    }
  };
  
  

  const handleReadyForPickupClick = async () => {
    setShowButtons(false);
    setShowReadyForPickup(false);
    setShowCompleted(true);
    try {
      const update = { status: "awaiting-pickup" };
      const response = await axios.patch(
        `http://localhost:8000/orders/${order._id}`,
        update
      );
      console.log("Order status updated", response.data);
      order.status = response.data.status;
    } catch (error) {
      console.error("Error updating order status:", error);
      console.log("Error response:", error.response);
    }
  };

  const handleCompletedClick = async () => {
    try {
      const update = { status: "completed" };
      const response = await axios.patch(
        `http://localhost:8000/orders/${order._id}`,
        update
      );
      console.log("Order status updated", response.data);
      order.status = response.data.status;
      setShowButtons(false);
      setShowCompleted(false);
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Content
          onClick={handleCardClick}
          style={{ cursor: "pointer", minHeight: "40%" }}
        >
          <Card.Header>{order.customerName}</Card.Header>
          <Card.Meta>{order.status}</Card.Meta>
          <Card.Description>{order.customerEmail}</Card.Description>
          <Card.Description>{order.customerPhone}</Card.Description>
        </Card.Content>

        <Card.Content style={{ minHeight: "20%" }}>
          <Card.Description>
            Pick-up Date:{" "}
            {order.pickUpDate === "N/A" ? (
              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              </div>
            ) : (
              order.pickUpDate
            )}
          </Card.Description>
        </Card.Content>

        <Card.Content style={{ minHeight: "20%" }}>
          <Card.Description>
            Pick-up Time:{" "}
            {order.pickUpTime === "N/A" ? (
              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => handleTimeChange(e.target.value)}
                />
              </div>
            ) : (
              order.pickUpTime
            )}
          </Card.Description>
        </Card.Content>

        <Card.Content extra style={{ minHeight: "25%" }}>
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
                <Button
                  basic
                  color="red"
                  style={{ width: "20%" }}
                  onClick={handleDeclineClick}
                >
                  Decline
                </Button>
              </div>
            </Card.Content>
          ) : (
            <div>
              {showReadyForPickup && (
                <Button
                  basic
                  color="green"
                  style={{ width: "90%" }}
                  onClick={handleReadyForPickupClick}
                >
                  Ready for Pickup
                </Button>
              )}
              {showCompleted && (
                <Button
                  basic
                  color="green"
                  style={{ width: "90%" }}
                  onClick={handleCompletedClick}
                >
                  Completed
                </Button>
              )}
            </div>
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
            {order.menuItems.map((item, index) => (
              <li key={`${order._id}-${index}`} className="menu-item">
                <div>{item.name}</div>
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
      <Modal open={soldOutPopupOpen} size="mini">
        <Modal.Header>Items Sold Out</Modal.Header>
        <Modal.Content>
          <p>One or more items in the list sold out</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setSoldOutPopupOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default OrderCard;