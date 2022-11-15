import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./style.scss";
const ModalComp = (props: any) => {
    return (
        <div className="modal">
            <Modal show={props?.modalIsOpen} onHide={props?.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="title">Delete Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this medicine?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props?.closeModal}>
                        Close
                    </Button>
                    <Button className='submit-btn' onClick={() => props?.deleteMedicine()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalComp
