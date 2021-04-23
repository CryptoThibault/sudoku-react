import React, { useState } from 'react'
import './Grid.css'

const Grid = ({ startgrid }) => {
  const [number, setNumber] = useState('')
  const handleChangeCell = (e) => {
    setNumber(e.target.value)
  }
  let row = startgrid.map((el) => {
    let cell = el.split('').map((el) => {
      return (
        <td>
          <input value={Number(el) ? el : number} onChange={(e) => handleChangeCell(e)}></input>
        </td>
      )
    })
    return (
      <tr>{cell}</tr>
    )
  })
  return (
    <div id="Table">
      <table >
        {row}
      </table>
    </div>
  )
};

export default Grid;