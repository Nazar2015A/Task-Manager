import React from "react";
import Modal from "@mui/material/Modal";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Typography } from "@mui/material";

import ModalForm from "./ModalForm/ModalForm.component";
import {
  ModalCloseIcon,
  StyledModalTop,
  StyledModalWrapper,
} from "./ModalContainer.styled";

const ModalContainer = ({
  open,
  title,
  onSubmit,
  modalClose,
  INTIAL_VALUES,
}) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={modalClose}
      closeAfterTransition
      sx={{
        "& .MuiBackdrop-root": { backgroundColor: "rgba(0, 0, 0, 0.3)" },
      }}
    >
      <StyledModalWrapper>
        <StyledModalTop>
          <Typography variant="h6">
            {title}
          </Typography>
          <ModalCloseIcon onClick={modalClose}>
            <CloseOutlinedIcon />
          </ModalCloseIcon>
        </StyledModalTop>
        <ModalForm
          INTIAL_VALUES={INTIAL_VALUES}
          onSubmit={onSubmit}
          title={title}
        />
      </StyledModalWrapper>
    </Modal>
  );
};

export default ModalContainer;
