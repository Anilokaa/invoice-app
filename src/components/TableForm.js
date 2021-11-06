import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import './header.css'

export default function TableForm({
  noHrsWorked,
  setNoHrsWorked,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [amount, setAmount] = useState(0.0)
  const [atRate, setAtRate] = useState(0.0)
  const [wre, setWre] = useState(0.0)
  const [materials, setMaterials] = useState(0.0)
  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    const newItems = {
      id: uuidv4(),
      noHrsWorked,
      atRate,
      wre,
      materials,
      amount,
    }
    setNoHrsWorked(0)
    setAtRate(0.0)
    setWre(0.0)
    setMaterials(0.0)
    setAmount(0.0)
    setList([...list, newItems])
    setIsEditing(false)
  }

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      
      amount = (noHrsWorked * atRate) +parseFloat(wre) + parseFloat(materials);
      setAmount(amount);
    }

    calculateAmount(amount)
  }, [amount, noHrsWorked, atRate, wre, materials, setAmount])

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setNoHrsWorked(editingRow.noHrsWorked)
    setAtRate(editingRow.atRate)
    setWre(editingRow.wre)
  }

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="noHrsWorked">No. hours worked </label>
          <input
            type="number"
            name="noHrsWorked"
            id="noHrsWorked"
            placeholder="Number of hours worked"
            value={noHrsWorked}
            onChange={(e) => setNoHrsWorked(e.target.value)}
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="atRate">At a certain rate</label>
            <input
              type="number"
              name="atRate"
              id="atRate"
              placeholder="At a certain rate"
              value={atRate}
              onChange={(e) => setAtRate(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="wre">Work-Related Expenses</label>
            <input
              type="number"
              name="wre"
              id="wre"
              placeholder="Work-Related Expenses"
              value={wre}
              onChange={(e) => setWre(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="materials">Materials</label>
            <input
              type="number"
              name="materials"
              id="materials"
              placeholder="Materials"
              value={materials}
              onChange={(e) => setMaterials(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>

        <br />
        <button
          type="submit"
          className="btn2"
        >
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>

      <br />
      {/* Table items */}

      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="table-color font-medium italic p-2 border border-gray-200">No hours worked</td>
            <td className="table-color font-medium italic p-2 border border-gray-200">At certain rate</td>
            <td className="table-color font-medium italic p-2 border border-gray-200">Work-related expenses</td>
            <td className="table-color font-medium italic p-2 border border-gray-200">Materials</td>
            <td className="table-color font-medium italic p-2 border border-gray-200">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, noHrsWorked, atRate, wre, materials, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2"> <span className="p-1.5">{noHrsWorked}</span></td>
                <td className="border border-gray-200 p-2"> <span className="p-1.5">{atRate}</span></td>
                <td className="border border-gray-200 p-2"> <span className="p-1.5">{wre}</span></td>
                <td className="border border-gray-200 p-2"> <span className="p-1.5">{materials}</span></td>
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-500 text-base font-bold">Total: </h2>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">₹{total.toLocaleString()}.00</h2>
        
      </div>
    </>
  )
}
