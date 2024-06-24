import React, { useEffect, useState } from "react";

const PassParam = () => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "" ,address:{ },phone:""});
  const id = 2;

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { name, email, address,phone } = data[0];
        setUserInfo({ name, email, address,phone });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>Name: {userInfo.name}</div>
      <div>Email: {userInfo.email}</div>
      <div>address</div>
      <div>Street: {userInfo.address.street}</div>
      <div>Suite: {userInfo.address.suite}</div>
      <div>City: {userInfo.address.city}</div>
      <div>Zipcode: {userInfo.address.zipcode}</div>
      {/* <div>geo:</div>
      <div>lat:{userInfo.address.geo.lat}</div>
      <div>lng:{userInfo.address.geo.lng}</div> */}
      <div>phonenumber:{userInfo.phone}</div>
    

    </div>
  );
};

export default PassParam;



// import React, { useEffect, useState } from "react"

// const UsingFetch = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default 







