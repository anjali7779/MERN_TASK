import React  from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const PrivateScreen = ({ history }) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("authToken")) {
            history.push("/login");
        }

        const fetchPrivateData = async () => {
            // let token=console.log(localStorage.getItem("authToken"))
            // debugger
            // const config = {
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: `Bearer ${token}`,
            //     },
            // };
            
            try {
                console.log("data here entry");
                const data = await axios.get("/api/private");
                console.log("data here gone");
                console.log(data.data);
                setPrivateData(data.data.data);
                // console.log(privateData)
            } catch (error) {
                localStorage.removeItem("authToken");
                setError("You are not authorized please login");
            }
        };

        fetchPrivateData();
    }, [history]);

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    };

    return (<React.Fragment>{
        error ? (
            <span className="error-message">{error}</span>
        ) : (
            <React.Fragment>
                <div style={{ background: "green", color: "white" }}>{privateData}</div>
                <button onClick={logoutHandler}>Logout</button>
                <div>{privateData}</div>
            </React.Fragment>
        )
    }</React.Fragment>) 
//   <>  return error ? (
        
//          <span className="error-message">{error}</span>
//           ) :  (   
//          <>
        
//          <div style={{ background: "green", color: "white" }}>{privateData}</div>
//             <button onClick={logoutHandler}>Logout</button>
//             <div>{privateData}</div>
//             </> 
      
//     ); </>
    
};

export default PrivateScreen;

// import React from 'react';
// // import ReactDOM from 'react-dom'
// import { useState, useEffect } from "react";
// import axios from "axios";
// // import "./PrivateScreen.css";

// const PrivateScreen = () => {
//   const [error, setError] = useState("");
//   const [privateData, setPrivateData] = useState("");

//   useEffect(() => {
//     const fetchPrivateDate = async () => {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//         },
//       };

//       try {
//         const { data } = await axios.get("/api/private", config);
//         setPrivateData(data.data);
//       } catch (error) {
//         localStorage.removeItem("authToken");
//         setError("You are not authorized please login");
//       }
//     };

//     fetchPrivateDate();
//   }, []);
//   return error ? (
//     <span className="error-message">{error}</span>
//   ) : (
//     <div>{privateData}</div>
//   );
// };

// export default PrivateScreen;

