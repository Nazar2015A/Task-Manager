import React from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  taskRemove,
  taskUpdate,
  toggleTaskComplete,
} from "../../../store/task/task.async";
import formatDate from "../../../utils/formatDate";
import ModalContainer from "../../Modal/ModalContainer";
import { useModal } from "../../../hooks/useModal";
import {
  StyledBtnCompleted,
  StyledBtnInCompleted,
  StyledBtnsEditContainer,
  StyledBtnEdit,
  StyledItemContainer,
  StyledItemDesc,
  StyledItemTitle,
  StyledTaskItemBtnContainer,
} from "./TaskItem.styled";

const TaskItem = ({ task }) => {
  const { modal, closeModal, openModal } = useModal(false);
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleTaskComplete(task._id));
  };

  const handleTaskRemove = () => {
    dispatch(taskRemove(task._id));
  };

  const handleTaskUpdate = (values, formikHelper) => {
    dispatch(taskUpdate({ taskId: task._id, ...values }));
    closeModal();
    formikHelper.resetForm();
  };

  return (
    <StyledItemContainer>
      <StyledItemTitle variant="h5">{task.title}</StyledItemTitle>
      <StyledItemDesc variant="body1">{task.description}</StyledItemDesc>
      <Typography variant="body1">{formatDate(task.date)}</Typography>
      <StyledTaskItemBtnContainer>
        {task.isCompleted ? (
          <StyledBtnCompleted
            variant="contained"
            onClick={handleToggleComplete}
          >
            Completed
          </StyledBtnCompleted>
        ) : (
          <StyledBtnInCompleted
            variant="contained"
            onClick={handleToggleComplete}
          >
            Incompleted
          </StyledBtnInCompleted>
        )}
        <StyledBtnsEditContainer>
          <StyledBtnEdit onClick={openModal}>
            <EditIcon />
          </StyledBtnEdit>
          <StyledBtnEdit onClick={handleTaskRemove}>
            <DeleteIcon />
          </StyledBtnEdit>
        </StyledBtnsEditContainer>
      </StyledTaskItemBtnContainer>
      <ModalContainer
        open={modal}
        title="Update a Task"
        onSubmit={handleTaskUpdate}
        modalClose={closeModal}
        INTIAL_VALUES={task}
      />
    </StyledItemContainer>
  );
};

export default TaskItem;
