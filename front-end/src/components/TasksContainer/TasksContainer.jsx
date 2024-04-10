import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ModalContainer from "../../components/Modal/ModalContainer";
import { createTask, getAllTasks } from "../../store/task/task.async";
import { INITAIL_VALUES } from "./initialValues";

import { useModal } from "../../hooks/useModal";
import TaskItem from "./TaskItem/TaskItem.component";
import {
  StyledAddNewTaskBtn,
  StyledOpenModalBtn,
  StyledTasksContainer,
  StyledTasksPage,
  StyledTasksTop,
  StyledTitle,
} from "./TasksContainer.styled";

const TasksContainer = ({ title, tasks }) => {
  const { modal, closeModal, openModal } = useModal(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleTaskCreate = (values, formikHelper) => {
    dispatch(createTask({ userId: user.id, ...values }));
    closeModal();
    formikHelper.resetForm();
  };

  useEffect(() => {
    if (user?.id) {
      dispatch(getAllTasks({ userId: user.id }));
    }
  }, [dispatch, user?.id]);

  return (
    <StyledTasksPage>
      <StyledTasksTop>
        <StyledTitle variant="h5">{title}</StyledTitle>
        <StyledOpenModalBtn onClick={openModal}>
          <AddOutlinedIcon />
        </StyledOpenModalBtn>
      </StyledTasksTop>
      <StyledTasksContainer>
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
        <StyledAddNewTaskBtn onClick={openModal}>
          <AddOutlinedIcon />
          Add New Task
        </StyledAddNewTaskBtn>
      </StyledTasksContainer>
      <ModalContainer
        open={modal}
        title="Create a Task"
        onSubmit={handleTaskCreate}
        modalClose={closeModal}
        INTIAL_VALUES={INITAIL_VALUES}
      />
    </StyledTasksPage>
  );
};

export default TasksContainer;
