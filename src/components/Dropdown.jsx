import Ellipsis from '../assets/svg/ellipsis.svg'
import Pencil from '../assets/svg/pencil.svg'
import Star from '../assets/svg/star.svg'
import Trash from '../assets/svg/trash.svg'
import CheckCircle from '../assets/svg/check-world-vector-logo.svg'


function Dropdown() {
  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end mb-[-2px]">

        <div tabIndex={0} role="button" className="btn bg-transparent  hover:bg-[#66666620] border-none px-2 h-1 min-h-6 ">
          <img src={Ellipsis} alt="Ellipsis Icon" className="w-5 h-5" /> 
        </div>

        <ul tabIndex={0} className="z-20 backdrop-blur-md dropdown-content z-[1] menu mt-2 p-2 shadow bg-[#ffffff80] rounded-box w-52">
          <li><a><img src={Pencil} alt="Ellipsis Icon" className="w-5 h-5" />Edit task</a></li>
          <li><a><img src={Star} alt="Ellipsis Icon" className="w-5 h-5" />Mark as important</a></li>
          <li><a><img src={CheckCircle} alt="Ellipsis Icon" className="w-5 h-5" />Mark as completed</a></li>
          <li><a className="text-red-700"><img src={Trash} alt="Ellipsis Icon" className="w-5 h-5" />Delete task</a></li>
        </ul>

      </div> 
    </>
  )
}
  
export default Dropdown;