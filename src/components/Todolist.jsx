import PropTypes from "prop-types"; // Import PropTypes

export default function Todolist({ mainTask, setMainTask }) {
  const deletetask = (index) => {
    let copytask = [...mainTask];
    copytask.splice(index, 1);
    setMainTask(copytask);
  };

  let renderTask = <h3 className="text-center p-2 text-2xl drop-shadow-2xl font-semibold">
    No Task Available</h3>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className="mb-4">
          {/* Added key prop */}
          <div className="flex w-full p-4 justify-between bg-teal-900 rounded-2xl">
            <h2 className="text-2xl  font-bold text-white">
              Task: {"\n"}
              {task.title}
            </h2>
            <p className="text-lg text-white">Description: {task.desc}</p>
            <button
              onClick={(index) => {
                deletetask(index);
              }}
              className="h-3"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <div className="m-4 flex justify-center items-center bg-teal-300 text-white rounded-2xl p-4">
        <ul className="border-black w-full">
          {renderTask} {/* Ensure renderTask is used */}
        </ul>
      </div>
    </>
  );
}

// Add prop-types validation
Todolist.propTypes = {
  mainTask: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
  setMainTask: PropTypes.func.isRequired,
};
