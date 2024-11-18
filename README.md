# Code alpha task 1
 
# URL Shortener

A simple URL shortener built with **Node.js**, **Express**, and **MongoDB**. This project allows users to shorten long URLs and keep track of how many times they were clicked.

## Features
- Shorten long URLs into short and easy-to-share links.
- Track the number of clicks for each shortened URL.
- A simple and intuitive web interface for shortening URLs.

## Tech Stack
- **Node.js**: JavaScript runtime for server-side code.
- **Express**: Web framework for building the API and handling HTTP requests.
- **MongoDB**: NoSQL database for storing the original and shortened URLs.
- **Mongoose**: MongoDB object modeling for Node.js.
- **EJS**: Template engine to render HTML views.
- **Nanoid**: A modern, secure, and URL-friendly string generator for generating unique short URL IDs.


## Setup Instructions

### Prerequisites
1. **Node.js** installed. If not, download and install it from [here](https://nodejs.org/).
2. **MongoDB** running locally or a **MongoDB Atlas** account for cloud-based hosting.

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener

2. **Install the dependencies:**
    ```bash
    npm install

3. **Set up environment variables:**
    ```bash
    MONGODB_URI=mongodb://localhost:27017/urlShortener
    
4.  **Run the application locally:**
     ``` bash
     npm start

The server will start at http://localhost:5000

## Project Structure
    ```bash
    .
├── models/
│   └── shortUrl.js       # Mongoose model for storing URLs
├── views/
│   └── index.ejs         # EJS template for the homepage
├── .env                  # Environment variables (not included in version control)
├── index.js              # Main server file
├── package.json          # Project metadata and dependencies
├── Procfile              # Heroku app configuration for web dyno
└── README.md             # Project documentation
