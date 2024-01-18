import InboxIcon from '@mui/icons-material/Inbox';
//import { useNavigate } from 'react-router-dom';

const PopUp = ({ message, onClose }) => {
    // const navigate = useNavigate();

    // function autolink() {
    //   navigate("/profile");
    // }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white mt-0 mb-10">
       
   <img src="/retroshop.svg" alt="" className="w-[300px] h-[300px] -mt-40" />

      <div className="bg-white w-600 h-1/4 p-4 rounded-xl flex flex-col justify-center items-center gap-3  border-2 ml-8 mr-8 -mt-20 mb10">
      <InboxIcon className='text-3xl'/>
        <p className="text-red-500 w-full h-full text-xl font-bold  text-center">{message}</p>
        </div>
        <button onClick={onClose}  className="w-[278px] h-[33px] bg-[#3337a3]  p-[20px] text-white py-2 px-4  mt-4">
          Cerrar
        </button>
     
    </div>
  );
};

export default PopUp

//      <div
// className="flex justify-center items-center flex-col pt-4 gap-[20px] ">
// <div className="flex ">
//   <img src="/retroshop.svg" alt="" className="w-[300px] h-[300px]" />
//   <div className="bg-white p-4 rounded shadow-md">
//     <p>{message}</p>
//     <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-3 py-1 rounded">
//       Cerrar
//     </button>

// </div>
// </div>
// </div>