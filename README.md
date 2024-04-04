# Ensure the following commands are followed before starting the application (for backend and frontend)

for back end: create the database first
```angular2html
 node customer.data.js; node menu.data.js; node pickup.data.js; node manager.data.js ; node order.data.js; node restaurant.data.js
```
then
```cmd
npm install
npm start
```

# Backend requirements

- Customer database
- Restaurant Database
- Menu management
- Ordering system
- Pickup Scheduling
- Order management
  - Statuses: ordered, in-progress, awaiting-pickup, completed
- Bonus: special offers, loyalty program payment

# Frontend requirements

- Client interface
  - Menu browsing
  - Order placement
  - Order history and Tracking
  - Search and filter
- Restaurant Manager interface
  - Menu management
  - Order processing
  - Analytics dashboard
  - Custom feature

# Milestones

- Milestone 1: March 7-8
  - Database implemented
  - Backend communication with database
  - Demo during lab
- Milestone 2: March 21-22
  - React frontend should be able to interact with backend
  - Demo frontend interacting with backend
- Milestone 3: April 4-5
  - Demo final project
