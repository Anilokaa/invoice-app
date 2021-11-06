export default function Notes({ notes }) {
  return (
    <>
      <section className="mt-1 mb-1">
        <p><strong>Notes: </strong></p>
        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
    </>
  )
}
