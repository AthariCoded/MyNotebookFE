import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import NoteModal from "../modal/NoteModal";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <NoteModal isOpen={isOpen} closeModal={closeModal} note={props.note} />
    </div>
  );
};

export default UpdateButton;
