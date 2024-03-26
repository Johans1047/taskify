import checkCircle from '../assets/svg/check-world-vector-logo.svg'

function Layout() {
  return (
    <>
      <div className="my-10 mx-auto bg-gray-6000 p-3 max-w-4xl">
        <p className="flex items-center justify-center mt-3 mb-7 font-geist-bold text-[42px]">
          <img src={checkCircle} alt="Check Circle Icon" className="w-9 h-9 mr-2" />
          Todo App
        </p>
        <div className="flex flex-col  bg-red-6000">
          <div id="tag-1" className="bg-blue-5000 m-3 pt-2 pb-1">
            <p className="font-geist-bold text-2xl">Tasks</p>
          </div>
          <div className="bg-[#ffffff66] hover:bg-[#ffffff80] rounded-lg my-1 mx-3 px-2 py-4">
            <p>a</p>
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
