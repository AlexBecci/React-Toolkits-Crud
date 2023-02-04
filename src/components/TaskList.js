import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/task/taskSlice";
import { Link } from "react-router-dom";
function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks);
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <div className="text-center mb-20 font-bold">
        <h1 className="sm:text-3xl text-2xl  title-font text-yellow-500 mb-4">
          React Toolkits Crud
        </h1>
        <h1 className="sm:text-2xl text-xl  title-font text-white mb-4">
          Tasks: <span className="text-yellow-500">{tasks.length}</span>
        </h1>
        <Link
          to={"/create-task"}
          className="inline-block px-6 py-2.5 my-2 mx-1 bg-yellow-400 text-black hover:text-red-50 font-bold text-base leading-tight uppercase rounded-full hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out shadow-sm"
        >
          Create Task
        </Link>
        <div className="flex mt-6 justify-center">
          <div className="w-full h-1 rounded-full bg-yellow-600 inline-flex"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex border-2 rounded-lg border-yellow-600  p-8 sm:flex-row flex-col bg-zinc-900 shadow-sm shadow-blue-700"
          >
            <div className="flex-grow">
              <h1 className="text-white text-2xl title-font font-medium mb-3">
                {task.title}
              </h1>
              <h2 className="leading-relaxed text-lg text-zinc-50">
                {task.description}
              </h2>
              <div className="text-center lg:text-left">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="inline-block px-6 py-2.5 my-2 mx-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out shadow-sm"
                >
                  <p className="text-sm font-bold text-zinc-50 ">Edit</p>
                </Link>
                <button
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                  className="inline-block px-6 py-2.5 my-2 mx-1 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out shadow-sm"
                >
                  <p className="text-sm font-bold text-zinc-50 ">Delete</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
