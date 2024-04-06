import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useOrders } from "../../contextAPI/ordersContext";
import { TabPane} from "semantic-ui-react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
// helper functions to insert data in each function.
const createChartData = (labels, data, label, backgroundColor, borderColor) => ({
    labels,
    datasets: [
        {
            label,
            data,
            backgroundColor,
            borderColor,
            borderWidth: 1,
        }
    ],
});
const Analytics = () => {
    const { detailedOrders } = useOrders();
    const [popularItems, setPopularItems] = useState({});
    const [sumPricePerCustomer, setSumPricePerCustomer] = useState({});
    const [ordersPerStatus, setOrdersPerStatus] = useState({});
    const [ordersPerPickupDate, setOrdersPerPickupDate] = useState({});
    const [ordersPerMonth, setOrdersPerMonth] = useState({});

    useEffect(() => {
        const itemCounts = {};
        const pricePerCustomer = {};
        const statusCounts = {};
        const pickupDateCounts = {};
        const ordersCountPerMonth = {};

        detailedOrders.forEach(order => {
            // populate itemCounts for popular menu items
            order.menuItems.forEach(item => {
                itemCounts[item] = (itemCounts[item] || 0) + 1;
            });

            // populate pricePerCustomer
            const sumPrice = pricePerCustomer[order.customerName] || 0;
            pricePerCustomer[order.customerName] = sumPrice + order.sumPrice;

            // populate statusCounts
            statusCounts[order.status] = (statusCounts[order.status] || 0) + 1;

            // populate pickupDateCounts
            const dateString = order.pickUpDate ? new Date(order.pickUpDate).toLocaleDateString() : "N/A";
            pickupDateCounts[dateString] = (pickupDateCounts[dateString] || 0) + 1;

            //populate ordersCountperMonth
            const monthYear = new Date(order.pickUpDate).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            });
            if (order.pickUpDate) {
                ordersCountPerMonth[monthYear] = (ordersCountPerMonth[monthYear] || 0) + 1;
            }


        });

        setPopularItems(itemCounts);
        setSumPricePerCustomer(pricePerCustomer);
        setOrdersPerStatus(statusCounts);
        setOrdersPerPickupDate(pickupDateCounts);
        setOrdersPerMonth(ordersCountPerMonth);

    }, [detailedOrders]);

    //same for all charts the display
    const options = {
        scales: {
            y: {
                type: 'linear', // for linear scale
                beginAtZero: true,
            },
            x: {
                ticks: {
                    padding: 10, // adds padding for the X-axis ticks (horizontal padding)
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    padding: 20, // adds padding below the legend labels
                }
            },
            title: {
                padding: 20, // adds padding below the title

            }
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    };
    // Data for Popular Items Chart
    const popularItemsData = createChartData(
        Object.keys(popularItems),
        Object.values(popularItems),
        'Popular Menu Items',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 1)'
    );

    // Data for Sum Price Per Customer Chart
    const sumPricePerCustomerData = createChartData(
        Object.keys(sumPricePerCustomer),
        Object.values(sumPricePerCustomer),
        'Sum Price Per Customer',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 1)'
    );

    // Data for Orders Per Status Chart
    const ordersPerStatusData = createChartData(
        Object.keys(ordersPerStatus),
        Object.values(ordersPerStatus),
        'Orders Per Status',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 1)'
    );

    // Data for Orders Per Pickup Date Chart
    const ordersPerPickupDateData = createChartData(
        Object.keys(ordersPerPickupDate),
        Object.values(ordersPerPickupDate),
        'Orders Per Pickup Date',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 1)'
    );

    //data for oders Per month data
    const ordersPerMonthData = {
        labels: Object.keys(ordersPerMonth).sort((a, b) => {
            // if labels are in the format "Month Year"
            const [monthA, yearA] = a.split(' ');
            const [monthB, yearB] = b.split(' ');
            return new Date(`${monthA} 01 ${yearA}`) - new Date(`${monthB} 01 ${yearB}`);
        }),
        datasets: [
            {
                label: 'Number of Orders Per Month',
                data: Object.keys(ordersPerMonth).sort((a, b) => {
                    // Sorting based on date for correct chronological order
                    const [monthA, yearA] = a.split(' ');
                    const [monthB, yearB] = b.split(' ');
                    return new Date(`${monthA} 01 ${yearA}`) - new Date(`${monthB} 01 ${yearB}`);
                }).map(month => ordersPerMonth[month]),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <TabPane style={{ overflowY: "auto", height: "80vh" }}>

            <h2> Analysis of the restaurant menu</h2>

            <Bar data={popularItemsData} options={options} />
            <Bar data={sumPricePerCustomerData} options={options} />
            <Bar data={ordersPerStatusData} options={options} />
            <Bar data={ordersPerPickupDateData} options={options} />
            <Bar data={ordersPerMonthData} options={options} />

        </TabPane>
    );
};

export default Analytics;