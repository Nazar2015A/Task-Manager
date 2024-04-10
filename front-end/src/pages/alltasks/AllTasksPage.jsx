import React from "react";
import TasksContainer from "../../components/TasksContainer/TasksContainer";
import { useSelector } from "react-redux";

const AllTasksPage = () => {
  const { tasks } = useSelector((state) => state.tasks);
  
  return <TasksContainer title="All Tasks" tasks={tasks} />;
};

export default AllTasksPage;
