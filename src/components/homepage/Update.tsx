import DeleteModal from "../shared/DeleteModal";

const Update = (props:any) => {
    const data = [
        {
            name: "disprin",
            frequency: '2',
            quantity: '1',
            time1: '18:34',
            time2: '22:56',
            time3: ''
        },
        {
            name: "lll",
            frequency: '2',
            quantity: '1',
            time1: '18:34',
            time2: '22:56',
            time3: ''
        },
        {
            name: "aaaaa",
            frequency: '2',
            quantity: '1',
            time1: '18:34',
            time2: '22:56',
            time3: ''
        },
    ]

    const OpenUpdateModal =(data :Object) => {
        props?.setMedicineData(data)
        props?.openModal(true);
    }

    return (
        <div className="view-edit">
            <DeleteModal 
                   modalIsOpen={props?.deleteModalIsOpen} 
                   closeModal ={props?.closeDeleteModal}
                   deleteMedicine={props?.deleteMedicine}
            />
            <div className="view">
                {
                    data.length > 0 ?
                        <>
                            <h2 className="heading">Your Medicine</h2>
                            {
                                data.map(row => (
                                    <div className="row">
                                        <div className="medicine-details">
                                            <h3 className="name">{row.name}</h3>
                                            <h5 className="freq">{row.quantity} x {row.frequency} daily</h5>
                                        </div>
                                        <div className="action-bar">
                                            <button className="button edit" onClick={()=>OpenUpdateModal(row)}>Edit</button>
                                            <button className="button delete"onClick={()=>props?.openDeleteModal()}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }

                        </>
                        :
                        <h2 className="heading">You have not added any medicine</h2>
                }

            </div>
        </div>
    )
}

export default Update;