import { BsTrash } from "react-icons/bs";
const AlertDel = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "AlertDel") onClose();
  };
  if (!visible) return null;

  return (
    <div
      id="AlertDel"
      onClick={handleOnClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <form
        method="POST"
        className="flex h-60 w-1/3 flex-col justify-center rounded-lg bg-white px-4 py-4 text-lg"
      >
        <div className="text-center text-2xl font-bold">
          Do you want to delete this album ?
        </div>
        <div className="mt-8 flex justify-center text-lg">
          <button
            className="rounded bg-gray-300 px-5 py-2 text-lg hover:bg-slate-400 "
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="ml-5 flex items-center rounded bg-red-600 px-5 py-2 text-white hover:bg-red-400">
            {" "}
            <BsTrash className="mr-2" /> Delete{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlertDel;
