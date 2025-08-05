// import React, { useEffect, useState } from "react";

// export const Datetime = () => {
//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         // Cleanup the interval on component unmount
//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <>
//             <p>Date - {currentTime.toLocaleDateString()}</p>
//             <p>Time - {currentTime.toLocaleTimeString()}</p>
//         </>
//     );
// }