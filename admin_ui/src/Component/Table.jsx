import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./Pagination";
import { getMembers } from "../Redux/action";

const Table = () => {
  const dispatch = useDispatch();
  const { members, page, limit } = useSelector((state) => state);
  const handleCheck = (event) => {
    
  };
  useEffect(() => {
    dispatch(getMembers(page, limit));
  }, [page]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              {" "}
              <input type="checkbox" name="selectAll" id="" />{" "}
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members &&
            members.slice((page - 1) * limit, page * limit).map((member) => {
              return (
                <tr key={member.id}>
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      name=""
                      id={member.id}
                      onClick={handleCheck}
                    />{" "}
                  </td>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.role}</td>
                  <td>
                    <BiEdit />
                    <MdDeleteOutline />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Table;
