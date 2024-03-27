import CheckCircle from '../assets/svg/check-world-vector-logo.svg'
import Checkbox from './Checkbox';
import Ellipsis from '../assets/svg/ellipsis.svg'

function Layout() {
  return (
    <>
      <div className="my-10 mx-auto bg-gray-6000 p-3 max-w-4xl">

        <p className="flex items-center justify-center mt-3 mb-7 font-geist-bold text-[42px]">
          <img src={CheckCircle} alt="Check Circle Icon" className="w-9 h-9 mr-2" />
          Todo App
        </p>

        <div className="flex flex-col  bg-red-6000">

          <div id="tag-1" className="bg-blue-5000 m-3 pt-2 pb-1">
            <p className="font-geist-bold text-2xl">Tasks</p>
          </div>

          <div className="flex items-center px-4 bg-[#ffffff66] hover:bg-[#ffffff80] rounded-lg my-1 mx-3 px-2 py-4">
            <Checkbox />
            <img src={Ellipsis} alt="Ellipsis Icon" className="w-5 h-5 ml-2" />
          </div>

          <div id="tag-2" className="bg-blue-500 m-3 pt-2 pb-1 hidden">
            <p className="font-geist-bold text-2xl">Important</p>
          </div>

          <div className="bg-blue-500 rounded-lg my-1 mx-3 px-2 py-4 hidden">a</div>

        </div>
      </div>
    </>
  )
}

export default Layout;
