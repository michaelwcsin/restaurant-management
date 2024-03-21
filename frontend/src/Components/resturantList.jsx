import { useEffect, useState } from 'react';
import axios from "axios";
import * as ReactBootstrap from 'react-bootstrap';

export const ResturantTable = () => { 
    return (
        <div className="container">
            <ReactBootstrap.Table striped bordered hover className="ResturantTable">

            </ReactBootstrap.Table>
        </div>
    );
    };

    export default ResturantTable;