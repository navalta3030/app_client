import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as React from "react";
import { RootState } from "ReduxStore";
import { UserAlert } from "action/AlertAction";
import { connect } from "react-redux";
import { AlertStateInterface } from "_interface/State/AlertStateInterface";

const AlertComponent: React.FC<AlertStateInterface> = ({
  message,
  isOpen,
  UserAlert
}): React.ReactElement => {
  const openModal = (): void => {
    UserAlert(message, true);
  };

  const closeModal = (): void => {
    UserAlert("", false);
  };
  return (
    <div>
      <Button color="danger" onClick={openModal} className="d-none"></Button>
      <Modal isOpen={isOpen} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Message</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    UserAlert: (message: string, isOpen: boolean): any => {
      dispatch(UserAlert(message, isOpen));
    }
  };
};

const mapStateToProps = (state: RootState): any => ({
  message: state.alert.message,
  isOpen: state.alert.isOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);
