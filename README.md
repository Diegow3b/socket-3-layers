# Socket.IO WebSocket Chat Application

This is a basic chat application built using Socket.IO and Express. It allows clients to connect to a WebSocket server and exchange messages in real-time.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Server Configuration](#server-configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time messaging using WebSockets.
- Room-based chat system for group communication.
- Basic client-server communication using Socket.IO.
- Handling CORS to allow cross-origin communication.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- yarn (Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/socket-io-chat-app.git
   cd socket-io-chat-app
   ```

2. Install the required dependencies:

```sh
yarn
```

### Usage

1. Start the WebSocket server:

```sh
yarn start-ws-server
```

2. Start the Backend server:

```sh
yarn start-backend
```

3. Both frontend can be open thorough the files `frontend.html` and `frontend2.html`

The socket server will be running at http://localhost:8001.

The backend server will be running at http://localhost:8000.

2. Open the client application in a web browser:
3. Open the `frontend.html` and `frontend2.html` file located in the project.
4. Fire new messages throught the postman into `http://localhost:8000/ws-integration` with `{ 'room': 'hubspotID123', 'message:' 'Hello room 1' }` or `{ 'room': 'hubspotID321', 'message:' 'Hello room 2' }`

## Server Configuration

- The WebSocket server is implemented using Socket.IO and Express.
- CORS settings are configured to allow cross-origin requests. You can customize these settings as needed in the server code.

```javascript
// server.js
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors()); // CORS middleware
const server = http.createServer(app);
const io = socketIO(server);

// ... Rest of the server code ...
```

- You can change the endpoint to receiving messages in `app.post("/ws-integration"...`
- You also can change the event names, just keep in mind to change it across the plarform.

## Troubleshooting

- If you encounter connection issues, make sure the server is running and reachable from the client's domain.
- Double-check the client and server code for accuracy, including URLs, ports, and event names.
- Verify that you have the necessary dependencies installed.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

```sql
Please replace placeholders like `your-username` with your actual GitHub username and make sure to customize any URLs, file paths, or additional information as needed for your specific project.
```
