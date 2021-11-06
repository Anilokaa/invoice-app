import './header.css'
import logo from './logoo.webp'

export default function Header({ handlePrint }) {
  return (
    <>
      {/* <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between"> */}
      <header className="header xl:flex-row xl:justify-between">
        <div className="forI">
          {/* <h1 className="font-bold uppercase tracking-wide text-4xl mb-3"> */}
          <h1 className="main-h">
            Invoicer
          </h1>
          <img src={logo} width="125px" height="75px" alt='logo' />
        </div>

        <div>
          {/* <ul className="flex items-center justify-between flex-wrap"> */}
          <ul className="btns3 flex justify-content-start">
            <li>
              <button
                onClick={handlePrint}
              //   className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
              // >
                className="btn1 mx-1">
                Download
              </button>
            </li>
            <li>
              <button className="btn1 mx-2">
                Send via Email
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
