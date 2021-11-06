import './header.css'

export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
  return (
    <>
      <article className="my-10 flex items-end justify-end border-r-4 border-blue-100">
        <ul>
          <li className="p-1 ">
            <span className="font-medium">Invoicer number:</span> {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-medium">Invoice date:</span> {invoiceDate}
          </li>
          <li className="p-1 ">
            <span className="font-medium">Due date:</span> {dueDate}
          </li>
        </ul>
      </article>
    </>
  )
}
