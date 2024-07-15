import PropTypes from "prop-types";

const Todoinput = ({ title, setTitle, desc, setDesc, onAdd }) => {
  return (

    <form className="mt-5 flex justify-center items-center">
      <input
        className="border-2 border-black mr-4 p-2"
        type="text"
        placeholder="Enter TODO Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border-2 border-black mr-4 p-2"
        type="text"
        placeholder="Enter TODO Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
      className="bg-black rounded-md px-4 py-2 text-white"
      onClick={onAdd}>Add</button>
    </form>
  );
};

Todoinput.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  setDesc: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default Todoinput;
