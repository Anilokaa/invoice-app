export default function ClientDetails({ clientName, clientAddress, clientGSTIN, contact }) {
  return (
    <>
      <section className="mt-1 w-2/4 border-l-4 border-blue-100 ">
        <h2 className="ml-2 italic text-xl pb-2">Bill to: </h2>
        <h2 className="ml-2"><span className="font-medium">Name: </span>{clientName}</h2>
        <h2 className="ml-2"><span className="font-medium">Contact: </span>{contact}</h2>
        <p className="ml-2"><span className="font-medium">Client GSTIN No:</span> {clientGSTIN}</p>
        <p className="ml-2"><span className="font-medium">Address: </span>{clientAddress}</p>

      </section>
    </>
  )
}
