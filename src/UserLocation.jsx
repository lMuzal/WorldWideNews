// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function UserLocation(){
// const [location, setLocation] = useState(null);

// useEffect(() => {
//   getLocation();
// }, [location])


// const getLocation = () =>{
// axios.get('https://api.geoapify.com/v1/ipinfo?&apiKey=3237eff1561a4f69a5adad180f2a26dd')
// .then(function (response) {
//   setLocation(response.data.country.iso_code)
//   console.log(response.data.country.iso_code);
// })
// .catch(function (error) {
//   console.log(error);
// });
// }
// }