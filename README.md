# Backend Task Menu API

A simple Node.js-based API to manage restaurant menu items. This API allows you to retrieve the full menu, fetch specific menu items by ID, and apply discounts based on a given date.

## Tech Stack

- **Node.js**: Backend framework

## Features

- Get full menu
- Get specific menu item by Id
- Apply discounts based on a provided date


## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ehmedosmanov/backend-task.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd backend-task
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file** in the project root and specify the port:

   ```plaintext
   PORT=5000
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

The server will be running on `http://localhost:5000` (or the port specified in your `.env` file).


## API Endpoints

### 1. Get the Full Menu

- **URL**: `GET /menu`
  
- **Description**: Retrieve the entire menu.

### 2. Get Menu with Discounts by Date

- **URL**: `GET /menu?date=YYYY-MM-DD`

- **Description**: Retrieve the menu with discounts applied based on the date.

### 3. Get Menu Item by ID

- **URL**: `GET /menu/:id`

- **Description**: Retrieve a specific menu item by its ID.

### 4. Get Menu Item by ID with Discounts

- **URL**: `GET /menu/:id?date=YYYY-MM-DD`

- **Description**: Retrieve a specific menu item by its ID, with discounts applied based on the date.
