# AlumChatter

AlumChatter is a real-time chat application developed using the MERN stack, specifically designed for college alumni to connect and communicate seamlessly. The application leverages **Socket.IO** to provide real-time messaging, ensuring low-latency and efficient communication.

## Project Overview

**Deployed Link**: [AlumChatter](https://alum-chatter.onrender.com/login)

AlumChatter was designed specifically for college alumni to stay connected through a seamless, real-time chat environment. Users can securely sign up, send instant messages, and update their profiles, including uploading profile pictures.

## Features

- **User Authentication**: Secure login and registration system with JWT authentication.
- **Real-Time Messaging**: Instant messaging powered by **Socket.IO**.
- **Profile Management**: Users can update their details and change their profile picture.
- **Cloudinary Integration**: Profile images and other media are stored securely using **Cloudinary**.
- **Responsive UI**: Adapts to different screen sizes for a smooth experience on all devices.

## Technology Stack

- **MongoDB**: NoSQL database for storing user data, messages, and chat room information.
- **Express.js**: Back-end framework for handling API requests and server logic.
- **React.js**: Front-end library for building the user interface.
- **Node.js**: JavaScript runtime for the back-end.
- **Socket.IO**: Enables real-time, bidirectional communication between clients and the server.
- **Cloudinary**: Image hosting service for profile pictures and other media.

## Screenshots

![Login Page](./frontend/dist/assets/Sigin.png)

![Login Page](./frontend/dist/assets/Signup.png)

![Chat Page](./frontend//dist/assets/Chat.png)
## Environment Variables

Create a `.env` file in the root directory and add the following:

```plaintext
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

## Setup and Installation

### Install Dependencies

```shell
npm install
```

### Build the App

```shell
npm run build
```

### Start the App

```shell
npm start
```

## Contact

For any questions or feedback, please reach out to [ayushjha298@gmail.com](mailto:ayushjha298@gmail.com).

