export default function MainDetails({ name, address, maddress }) {
  return (
    <>
      <section className="flex flex-col items-end justify-end border-r-4 border-blue-100">
        <h2 className="font-bold italic text-lg md:text-xl mr-2">{name}</h2>
        <p className="mr-2">{address}</p>
        <p className="mr-2">{maddress}</p>
      </section>
    </>
  )
}
