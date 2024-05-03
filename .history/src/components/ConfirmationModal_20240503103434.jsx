import React from "react";
import { Button, Modal } from "semantic-ui-react";

const ConfirmationModal = ({ open, onClose, onConfirm, message }) => {
  return (
    <Modal size="tiny" open={open} onClose={onClose}>
      <Modal.Header>Confirm Deletion</Modal.Header>
      <Modal.Content>
        <p>{message}</p>
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
