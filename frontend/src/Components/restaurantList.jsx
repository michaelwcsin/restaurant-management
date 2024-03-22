import axios from "axios";
import { useEffect, useState } from "react";
import * as ReactBootstrap from "react-bootstrap";

export const RestaurantTable = () => {
  return (
    <div className="container">
      <ReactBootstrap.Table
        striped
        bordered
        hover
        className="RestaurantTable"
      ></ReactBootstrap.Table>
    </div>
  );
};

export default RestaurantTable;
