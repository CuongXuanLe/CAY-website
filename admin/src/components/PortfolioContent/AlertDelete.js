import {BsTrash} from "react-icons/bs";
const AlertDel = ({ visible, onClose }) => {

    const handleOnClose = (e) => {
        if (e.target.id === "AlertDel") onClose();
      };
      if (!visible) return null;

    return (
        <div 
            id="AlertDel"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
        >
            <form method="POST" className="flex justify-center flex-col w-1/3 bg-white h-60 px-4 rounded-lg text-lg py-4">
                <div className="text-center text-2xl font-bold">
                    Do you want to delete this album ?
                </div>
                <div className="flex justify-center text-lg mt-8">
                    <button className="bg-gray-300 hover:bg-slate-400 px-5 py-2 text-lg rounded " onClick={onClose}>Cancel</button>
                    <button className="flex items-center px-5 py-2 bg-red-600 text-white hover:bg-red-400 rounded ml-5"> <BsTrash className="mr-2"/> Delete </button>
                </div>
            </form>
        </div>
    )
}

export default AlertDel