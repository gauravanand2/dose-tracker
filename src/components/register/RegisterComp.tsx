import { ChangeEvent, useState } from "react";
import { RegisterFields } from "../../Constants";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ValidationHelper } from "../../helpers/Validations.helpers";
const RegisterComp = () => {

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: ""

    })
    const [allFieldWarning, setAllfieldWarning] = useState(false)

    const [validateField,setValidateField] = useState()

    const [loading, setLoading] = useState(false)
    const dataHandler = (type: String | any, value: String) => {
        setRegisterData(
            {
                ...registerData,
                [type]: value
            }
        )
    }

    const registerInput = (event: ChangeEvent<HTMLInputElement>) => {
        dataHandler(event.target.name, event.target.value)
    }

    const onRegsiter = () => {
        if (registerData.name !== "" && registerData.email !== "" && registerData.password !== "") {
            setLoading(true)
            setAllfieldWarning(false)
            const validation = ValidationHelper.handleRegsiterForm(registerData)
            setValidateField(validation)
            setLoading(false)
        }
        else {
            setAllfieldWarning(true)
        }

    }
    return (
        <div className="section register">

            <div className="container">
                <div className="header">
                    <div className="content">
                        <h2 className="heading">SignUP</h2>
                    </div>
                </div>
                <div className="input-form">
                    <div className="field-details">
                        {RegisterFields.map(field => (
                            <>
                                <div className="label-field">
                                    <label className="label">{field?.label}</label>
                                </div>
                                <div className="input-field">
                                    <input type={field?.type} className="input" name={field?.name} onChange={(e) => registerInput(e)} />
                                </div>
                                {
                                 validateField &&  validateField[field.name] && <span className="all-field">{validateField[field.name]}</span>
                                }
                            </>
                        ))}
                        {
                            allFieldWarning && <div className="all-field">
                                All Fields are required !!
                            </div>
                        }
                        <div className="label-field">
                            Already have an account? <span>Login here</span>
                        </div>
                        <div className="btn-div">
                            <Button onClick={() => onRegsiter()} className="register-btn" variant="primary" disabled={loading}>
                                {
                                    loading === true
                                        ?
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        :
                                        "Register"
                                }
                            </Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterComp;