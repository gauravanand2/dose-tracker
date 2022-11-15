import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.scss";
const ModalComp = (props: any) => {

    const renderHtml = () => {
        const rows = []
        for (var i = 0; i < props?.medicineData.frequency; i++) {
            rows.push(
                <div className='field-div'>
                    <div className='label-div'>
                        <label className='label'>Alert time {i + 1}</label>
                    </div>
                    <div className='input-div'>
                        <Form.Control name={`time${i + 1}`} value={props?.medicineData[`time${i+1}`]}  type="time" placeholder="Time" onChange={e => props?.onChangeValue(e)} />
                    </div>
                </div>
            )
        }
        return rows
    }
    return (
        <div className="modal">
            <Modal show={props?.modalIsOpen} onHide={props?.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="title">Add Medicine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-details'>
                        <div className='field-div'>
                            <div className='label-div'>
                                <label className='label'>Enter Medicine Name</label>
                            </div>
                            <div className='input-div'>
                                <Form.Control name="name" type="text" placeholder="Medicine name" value={props?.medicineData.name} onChange={e => props?.onChangeValue(e)} />
                            </div>
                        </div>
                        <div className='field-div'>
                            <div className='label-div'>
                                <label className='label'>Select</label>
                            </div>
                            <div className='input-div'>
                                <Form.Select name="frequency" aria-label="Default select example" value={props?.medicineData.frequency} onChange={e => props?.onChangeValue(e)}>
                                    <option>Select frequency</option>
                                    <option value="1">Once a Day</option>
                                    <option value="2">Twice a day</option>
                                    <option value="3">Thrice a day</option>
                                </Form.Select>
                            </div>
                        </div>
                        {
                            props?.medicineData.frequency !== '' &&
                            renderHtml()
                        }
                        <div className='field-div'>
                            <div className='label-div'>
                                <label className='label'>Select Quantity</label>
                            </div>
                            <div className='input-div'>
                                <Form.Control name="quantity" type="number" value={props?.medicineData.quantity} placeholder="Quantity" onChange={e => props?.onChangeValue(e)} />
                            </div>
                        </div>
                        {
                            props?.showEmpty && <div className='warning'>All fields are required!</div>
                        }
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props?.closeModal}>
                        Close
                    </Button>
                    <Button className='submit-btn' onClick={()=>props?.addMedicine()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalComp
