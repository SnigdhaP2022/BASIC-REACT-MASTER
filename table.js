import React from 'react'

export default function Table({data}) {
    const rows = data.map((row, index) => (

        <tr key={index}>
          <td>{row.id}</td>
          <td>{row.first_name}</td>
          <td>{row.last_name}</td>
          <td>{row.email}</td>
          <td>{row.gender}</td>
          <td>{row.income}</td>
          <td>{row.city}</td>
          <td>{row.car}</td>
          <td>{row.quote}</td>
          <td>{row.phone_price}</td>
        </tr>
    ))
  return (
    <table>

    <thead>
      <tr>
        <th>id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Income</th>
        <th>City</th>
        <th>Car</th>
        <th>Quote</th>
        <th>Phone Price</th>
      </tr>
    </thead>

    <tbody>
      {rows}
    </tbody>

  </table>

  )
}