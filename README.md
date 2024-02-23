# Zywa Assignment

Developed an internal API `/get_card_status` to retrieve the current delivery status of card. 

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, MongoDB


## Approach

- Utilized Node.js for server-side JavaScript and chose Express.js as the web application framework for its simplicity, flexibility, and robust features.

- Used MongoDB as the database to store card status information.

- Implemented Mongoose library to interact with MongoDB which provided schema-based validation and a simple querying interface to retrieve data.

- Utilized the `csv-parser` package to parse CSV files and extract data.

- Imported data from CSV files into the MongoDB database.
- Parsed different date formats using `moment.js` to ensure consistency in date handling.

-  Implemented `/get_card_status` endpoint to accept POST requests with either a phone number or card ID as input.
- Implemented logic to query the MongoDB database based on the provided input.

- Returned card status information as a JSON response, handling cases where no matching data is found.

- Utilized `React.js` and `TailwindCSS` for building the user interface.

- Integrated `Axios` for making asynchronous HTTP requests to the backend API.

- Conditionally rendered the Stepper component based on the length of the card status data.

### Possible Improvements

- Implement user authentication and authorization mechanisms to secure access to the API endpoints.

- Improve error handling by providing meaningful error messages to users and logging detailed errors on the server.

## Deployment

To deploy this project:

- Clone the repository to your local machine.
- Ensure that the Node.js version is `18.17.1`.
- Set up the .env file with MONGO URI from the Mongo Atlas Cloud.
- Start the server with the below command in the command line.
```bash
  cd /backend
```
```bash
  node server.js
```
- Start the frontend with the below command in the command line.
```bash
  cd /frontend
```
```bash
  npm start
```
- Open `http://localhost:3000/get_card_status` on browser.



