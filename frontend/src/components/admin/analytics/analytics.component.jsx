import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Analytics = ({ detailedOrders }) => {
    const [popularItems, setPopularItems] = useState({});

    useEffect(() => {
        const itemCounts = {};
        detailedOrders.forEach(order => {
            order.menuItems.forEach(item => {
                itemCounts[item] = (itemCounts[item] || 0) + 1;
            });
        });
        setPopularItems(itemCounts);
    }, [detailedOrders]);

    const data = {
        labels: Object.keys(popularItems),
        datasets: [
            {
                label: 'Popular Menu Items',
                data: Object.values(popularItems),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <TabPane style={{ overflowY: "auto", height: "80vh" }}>
            <h2> Tab 3 Analytics Content is</h2>

            <Bar data={data} options={options} />
            />
        </TabPane>
    );
};

export default Analytics;