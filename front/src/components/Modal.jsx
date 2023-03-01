import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="flex">
        <div className="w-1/2 flex-none">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="m-3 w-1/2 flex-none"></div>
      </Modal.Body>
    </Modal>
  );
}
