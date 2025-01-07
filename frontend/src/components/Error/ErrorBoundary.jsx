import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // window.location.reload();
      // Fallback UI when an error occurs
      return <><Navbar></Navbar><h1>Something went wrong. Please try again later.<br></br>Please relode once again..<button
      
      onClick={() =>{
        window.location.reload()
      } }
    >
     ↻ Reload Page 
    </button></h1><Footer/></>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
