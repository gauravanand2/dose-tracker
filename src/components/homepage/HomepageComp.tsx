import { ChangeEvent, useState } from "react";
import Header from "./Header";
import Middle from "./Middle";
import Update from "./Update";

const HomepageComp = () => {
    const [showEmpty, setShowEmpty] = useState(false)
    const [medicineData, setMedicineData] = useState({
        name: '',
        frequency: '',
        quantity: '',
        time1: '',
        time2: '',
        time3: ''
    });
    const [modalIsOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false)
    }

    const openModal = () => {
        setModalOpen(true);
    }

    const handleChange = (type: any, value: String) => {
        setMedicineData({
            ...medicineData,
            [type]: value
        })

    }

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.name, e.target.value)
    }

    const addMedicine = () => {
        if (medicineData.name !== '' && medicineData.quantity !== '' && medicineData.frequency !== '') {
            const check = medicineData.frequency == "1" ?
                medicineData.time1 === "" ? setShowEmpty(true) : true
                :
                medicineData.frequency == "2" ?
                    (medicineData.time1 === "" || medicineData.time2 === "") ? setShowEmpty(true) : true
                    :
                    medicineData.frequency == '3' ?
                        (medicineData.time1 === "" || medicineData.time2 === "" || medicineData.time3 === "") ? setShowEmpty(true) : true
                        :
                        true

            if (check === true) {
                closeModal()

            }
        }
        else {
            setShowEmpty(true)
        }
    }

    return (
        <div className="section homepage">
            <div className="container">
                <Header />
                <Middle
                    closeModal={closeModal}
                    openModal={openModal}
                    modalIsOpen={modalIsOpen}
                    onChangeValue={onChangeValue}
                    medicineData={medicineData}
                    showEmpty ={showEmpty}
                    addMedicine ={addMedicine}
                />
                <Update />
            </div>

        </div>
    )
}


export default HomepageComp;