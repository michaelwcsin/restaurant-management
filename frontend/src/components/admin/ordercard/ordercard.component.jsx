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

  const handleDropdownChange = (event, data) => {
    setSelectedStatus(data.value);
  };

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleApproveClick = () => {
    setShowButtons(false);
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
        <Card.Content onClick={handleCardClick} style={{ cursor: "pointer" }}>
          <Card.Header>{order.customerName}</Card.Header>
          <Card.Meta>{order.orderStatus}</Card.Meta>
          <Card.Description>{order.customerEmail}</Card.Description>
          <Card.Description>{order.customerPhone}</Card.Description>
        </Card.Content>

        <Card.Content>
          <Card.Description>
            Pick-up Date: {order.pickUpDate}
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </Card.Description>
          <Card.Description>
            Pick-up Time: {order.pickUpTime}
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => handleTimeChange(e.target.value)}
            />
          </Card.Description>
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
            <Dropdown
              placeholder="Select Status"
              fluid
              selection
              floating
              onChange={handleDropdownChange}
              value={selectedStatus}
              options={[
                {
                  key: "In-Progress",
                  text: <span style={{ color: "black" }}>In-Progress</span>,
                  value: "In-Progress",
                },
                {
                  key: "Ready for Pick-up",
                  text: (
                    <span style={{ color: "black" }}>Ready for Pick-up</span>
                  ),
                  value: "Ready for Pick-up",
                },
                {
                  key: "Picked Up",
                  text: <span style={{ color: "black" }}>Picked Up</span>,
                  value: "Picked Up",
                },
              ]}
            />
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
