import { useState } from "react"
import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import Notes from "./components/Notes"
import Table from "./components/Table"
import TableForm from "./components/TableForm"
import './components/header.css'

function App() {
  const [showInvoice, setShowInvoice] = useState(true)
  const [name, setName] = useState("TaxAdda Private Limited")
  const [address, setAddress] = useState("A-182, Panipech, Shastri Nagar")
  const [maddress, setmAddress] = useState(" Jaipur, Rajasthan - 302016")
  const [clientName, setClientName] = useState("Hrutu Raj")
  const [contact, setContact] = useState("+91 93245 93024")
  const [clientGSTIN, setClientGSTIN] = useState("984929385721")
  const [clientAddress, setClientAddress] = useState("India, Hyderabad, Prashanthi Residency, Flat no: 110, H.no: 2-2-558/60")
  const [invoiceNumber, setInvoiceNumber] = useState("1004")
  const [invoiceDate, setInvoiceDate] = useState("20/10/2021")
  const [dueDate, setDueDate] = useState("01/11/2021")
  const [notes, setNotes] = useState("1) Please pay within 7 days of recieving bill.")
  const [noHrsWorked, setNohrsWorked] = useState(0.0)
  const [atRate, setAtRate] = useState(0.0)
  const [wre, setWre] = useState(0.0)
  const [materials, setMaterials] = useState(0.0)
  const [amount, setAmount] = useState(0.0)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <main className="m-15 p-5 md:max-w-xl md:mx-auto md:my-auto lg:max-w-xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} maddress={maddress} />

            <ClientDetails
              clientName={clientName}
              contact={contact}
              clientGSTIN={clientGSTIN}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table
              noHrsWorked={noHrsWorked}
              atRate={atRate}
              wre={wre}
              materials={materials}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />

            <Notes notes={notes} />
            <br />

            <Footer
            />

            <button
              onClick={() => setShowInvoice(false)}
              className="btn2"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            {/* name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes */}
            <div className="flex flex-col justify-center">

              <article className="md:grid grid-cols-2 gap-10 md:mt-1">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's contact number: </label>
                  <input
                    type="text"
                    name="clientName"
                    autoComplete="off"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's GSTIN</label>
                  <input
                    type="text"
                    name="clientName"
                    autoComplete="off"
                    value={clientGSTIN}
                    onChange={(e) => setClientGSTIN(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
                <hr  />
              </article>
              <br />
              <br />
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                <hr />
              </article>


              {/* This is our table form */}
              <article>
                <TableForm
                  noHrsWorked={noHrsWorked}
                  setNoHrsWorked={setNohrsWorked}
                  atRate={atRate}
                  setAtRate={setAtRate}
                  wre={wre}
                  setWre={setWre}
                  materials={materials}
                  setMaterials={setMaterials}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
<br />
<hr />
<br />
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="10"
                rows="5"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>


              <button
                onClick={() => setShowInvoice(true)}
                className="btn2"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default App
