import { useState } from "react";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask,setMainTask]=useState([])

  const onAdd = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
    setMainTask([...mainTask,{title,desc}])  // Corrected to log the title and description
  };



  return (
    <>
    <div className="bg-teal-900 w-full h-24 text-center flex justify-center items-center">
      <h1 className=" text-2xl font-extrabold  text-white  p-2"> TODO LIST </h1>
    </div>
      <Todoinput className="flex"
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        onAdd={onAdd}
      />
      <Todolist mainTask={mainTask} setMainTask={setMainTask} />
    </>
  );
};

export default App;
