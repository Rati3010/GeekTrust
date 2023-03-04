import React, { useEffect, useState } from 'react';
import axios from "axios";
const Table = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json').then((result) => {
      setData(result.data)
    }).catch((err) => {
      console.log(err)
    });
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> <input type="checkbox" name="" id="" /> </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((v) => {
            return (<tr key={v.id}>
              <td> <input type="checkbox" name="" id="" /> </td>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.role}</td>
              <td></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table