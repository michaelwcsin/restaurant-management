import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import { useState, useEffect } from "react";

function UserDropDown() {

    const [customers, setCustomers] = useState([]);
    
    useEffect(() => {
        const fetchCustomers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/customers");
            console.log("Response:", response.data);
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };
    fetchCustomers();
    }, []);

    return (
        <Dropdown className="userDrop"
            placeholder="Select Customer"
            fluid
            search
            selection
            clearable
            floating
            options={customers.map((customer) => ({
                key: customer._id,
                text: customer.name,
                value: customer._id,
            }))}
        />
    );
}

export default UserDropDown;