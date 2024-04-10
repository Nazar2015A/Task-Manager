import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [modal, setModal] = useState(initialValue || false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  return { modal, toggleModal, closeModal, openModal };
};
