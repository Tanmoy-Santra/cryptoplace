
# [CryptoPlace - Cryptocurrency Marketplace](https://cryptoplace-tmwt.vercel.app/)

CryptoPlace is a web application that allows users to explore the largest cryptocurrency marketplace. It provides features like login with Google, real-time cryptocurrency prices, and seamless user authentication. 

## Features

- **Google Authentication**: Sign in with Google to securely access your account.
- **Explore Cryptocurrencies**: View real-time cryptocurrency prices and data.
- **User Dashboard**: Personalized user dashboard to manage preferences and explore crypto markets.
- **Responsive Design**: Fully responsive design for use on any device.

## Technologies Used

- **Frontend**: 
  - React
  - Vite
  - React Router
  - React OAuth (for Google login)
  - React Toastify (for notifications)

- **Backend**:
  - Node.js
  - Express
  - MongoDB (for user data storage)

- **Authentication**:
  - Google OAuth

- **Styling**:
  - CSS
  - Custom styles for responsive design

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tanmoy-Santra/cryptoplace
   ```

2. Navigate to the project folder:

   ```bash
   cd cryptoplace
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. To start the app locally, run:

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` to see the app in action.

## Google OAuth Setup

To enable Google login, follow these steps:

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the "Google+ API" and "OAuth 2.0" credentials.
4. Create OAuth credentials (Web application).
5. Add your authorized redirect URIs (e.g., `http://localhost:3000` for local development).
6. Copy the client ID and secret, and add them to your environment variables.

## Environment Variables

You need to add the following environment variables to your `.env` file:

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=your-mongodb-uri
PORT=your-preferred-port (default: 3000)
```

## Deployment

To deploy the app, you can use platforms like [Vercel](https://vercel.com/) for the frontend and [Heroku](https://heroku.com/) or [Render](https://render.com/) for the backend.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or contributions, feel free to contact me at [Your Email].
