import Modal from "../shared/Modal";


const Middle = (props: any) => {
    
    return (
        <div className="middle add">
            <Modal 
            modalIsOpen={props?.modalIsOpen} 
            closeModal ={props?.closeModal}
            onChangeValue={props?.onChangeValue}
            medicineData={props?.medicineData}
            showEmpty ={props?.showEmpty}
            addMedicine={props?.addMedicine}
            />
            <p className="text">Skip medicne? But not from know, use this web app to get the mail alert to take medicine on time in just three steps.</p>
            <h3 className="sub-head">Steps to add medicine</h3>
            <ol>
                <li className="step">Enter Medicine Name</li>
                <li className="step">Select Quanity</li>
                <li className="step">Select Frequency</li>
            </ol>
            <div className="add-medi">
                <button className="submit-btn" onClick={()=>props?.openModal()}>Add Medicine</button>
            </div>
        </div>
    )
}

export default Middle;