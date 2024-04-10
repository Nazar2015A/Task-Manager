import React from "react";

import { useSelector } from "react-redux";
import TasksContainer from "../../components/TasksContainer/TasksContainer";

const CompletedPage = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return <TasksContainer title="Completed Tasks" tasks={completedTasks} />;
};

export default CompletedPage;
