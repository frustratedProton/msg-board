# Mini Message Board

A simple message board application built with Node.js, Express, and the EJS template engine. This project uses PostgreSQL for data storage and the `node-postgres` library for database interactions.

## Features

- Display and add messages to the board.
- Store messages in a PostgreSQL database.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/frustratedProton/msg-board
    ```

2. **Navigate to the project directory:**

    ```bash
    cd mini-msg-board
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up your environment variables:**

    Create a `.env` file in the root directory and add your PostgreSQL connection string and port number:

    ```env
    DB_URL=<your_database_url>
    APP_PORT=<port_number>
    ```

5. **Initialize the database:**

    Run the database seeding script with your database URL:

    ```bash
    node db/populatedb.js your_database_url
    ```

6. **Start the application:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:<port_number>`.


## Usage

- **View Messages:** Access the main page to view all messages.
- **Add a Message:** Use the form to submit new messages.