import React from "react";
import { useSelector } from "react-redux";
import TasksContainer from "../../components/TasksContainer/TasksContainer";

const ImportantPage = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const importantTasks = tasks.filter((task) => task.important);

  return <TasksContainer title="Important Tasks" tasks={importantTasks} />;
};

export default ImportantPage;
