# SSL Certificate Expiry Checker

This is a simple Nest.js application that allows you to retrieve SSL certificates expiry date for specified URLs.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

### with Git Code

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/ssl-certificate-retrieval-app.git
cd ssl-certificate-retrieval-app
```

2. Install the dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```

### with Docker Image

To run the app with Docker, please follow these steps:

1. Make sure your Docker is already running.

2. Run the app:

```bash
docker run -p 3000:3000 -d damarnurichwan/ssl-certificate-expiry-checker
```

## Usage

1. Use the application to retrieve SSL certificates for URLs. You can send a POST request to http://localhost:3000/ssl-certificate with the following JSON payload:

```json
{
  "url": "example.com"
}
```

2. The application will respond with the SSL certificate information:

```json
{
  "message": "SSL certificate retrieved successfully",
  "url": "example.com",
  "expiryDate": "2023-08-15T12:00:00.000Z",
  "differenceInDays": 14
}
```

## API Documentation

The API is documented using Swagger. You can access the Swagger documentation by navigating to http://localhost:3000 in your web browser.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
