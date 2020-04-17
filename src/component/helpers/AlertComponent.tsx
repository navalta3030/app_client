import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as React from "react";
import AlertComponentInterface from "_interface/component/helpers/AlertComponentInterface";
import { RootState } from "ReduxStore";
import { UserAlert } from "action/AlertAction";
import { connect } from "react-redux";

const AlertComponent: React.FC<AlertComponentInterface> = ({
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
  message: state.Alert.message,
  isOpen: state.Alert.isOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);
