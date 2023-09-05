import { useState, useEffect } from "react";
import axios from 'axios';

export const fetchUsers = async () => {
  const [users, setUsers] = useState([]);
  try {
    const response = await axios.get('http://localhost:8080/api/user/all');
    if (response.status === 200) {
      alert("yes")
      setUsers(response.data);
      return users
    } else {
      console.error(`Request failed with status: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error('An error occurred while fetching users:', error);
  }
}
export const handleRegister = async (user, navigate) => {
  axios.post('http://localhost:8080/api/user/create', user)
    .then(response => {
      if (response.statusCode === 200) {
        alert("Success")
        navigate
      } else {
        alert(response.status)
      }

    })
    .catch(error => {
      console.error(error);
    });

};