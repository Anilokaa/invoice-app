import React from "react"

export default function Table({ list, total }) {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="table-color font-medium italic p-2 border border-gray-200">No. hours worked</td>
            <td className="table-color font-medium italic p-2 border border-gray-200">At certain rate</td>
            <td className="table-color font-medium italic p-2 border border-gray-200">Work-Related Expenses</td>
            <td className="table-color font-medium italic p-2 border border-gray-200">Materials</td>
            <td className="table-color font-medium italic p-2 border border-gray-200">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, noHrsWorked, atRate, wre, materials, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td className="border border-gray-200">{noHrsWorked}</td>
                <td className="border border-gray-200">{atRate}</td>
                <td className="border border-gray-200">{wre}</td>
                <td className="border border-gray-200">{materials}</td>
                <td className="border border-gray-200">{amount}</td>
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
