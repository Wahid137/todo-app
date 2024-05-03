import React from "react";
import { Button, Modal } from "semantic-ui-react";

const ConfirmationModal = ({ open, onClose, onConfirm, todoTitle }) => {
  return (
    <Modal size="tiny" open={open} onClose={onClose}>
      <Modal.Header>Confirm Deletion</Modal.Header>
      <Modal.Content>
        <p>
          Are you sure you want to delete the todo "<strong>{todoTitle}</strong>
          "?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={onClose}>
          Cancel
        </Button>
        <Button positive onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmationModal;
