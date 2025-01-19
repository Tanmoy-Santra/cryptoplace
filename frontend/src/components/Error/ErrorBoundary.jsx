// import React from "react";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render shows the fallback UI
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can log the error to an error reporting service here
//     console.error("Error caught by ErrorBoundary:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // window.location.reload();
//       // Fallback UI when an error occurs
//       return <><Navbar></Navbar><h1>Something went wrong. Please try again later.<br></br>Please relode once again..<button
      
//       onClick={() =>{
//         window.location.reload()
//       } }
//     >
//      ↻ Reload Page 
//     </button></h1><Footer/></>;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;


import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service or console
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    // Reload the page
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Navbar />
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Something went wrong.</h1>
            <p>Please try reloading the page.</p>
            <button
              onClick={this.handleReload}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                marginTop: "1rem",
              }}
            >
              ↻ Reload Page
            </button>
          </div>
          <Footer />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
