# URL Shortener

## Description
A simple URL shortener backend built with Node.js, Express, and MongoDB. This API allows users to shorten URLs, redirect using the shortened URL, and track visit history.

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- Nanoid (for generating short URLs)
- Dotenv (for environment variable management)
- Nodemon (for development)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/PranavVadakkathiyil/UrlShortner.git
   cd UrlShortner
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and set the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
| Method | Endpoint | Description |
|--------|-------------|-------------|
| POST   | `/api/v1/url` | Create a shortened URL |
| GET    | `/:shortId` | Redirect to the original URL |
| GET    | `/api/v1/analytics/:shortId` | Get visit history of a shortened URL |

## API Documentation
[Postman Documentation](#) *(Replace with actual Postman link)*

## Project Structure
```
├── controllers
│   ├── Url.controller.js
├── routes
│   ├── Url.route.js
├── db
│   ├── mongoDB.js
├── .env
├── index.js
├── package.json
```

## License
This project is licensed under the MIT License.

## Author
Developed by Pranav with love ❤️😊🚀

