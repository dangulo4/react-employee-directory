import React from 'react';

const EmployeeCard = ({ ...props }) => {
  return (
    <>
      <thead>
        <tr key={props.key}>
          <th>
            <img alt={props.firstName} src={props.picture} />
          </th>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.city}</td>
        </tr>
      </thead>
    </>
  );
};

export default EmployeeCard;
