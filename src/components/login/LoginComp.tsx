import { ChangeEvent, useState } from "react";
import { LOGIN_FIELDS } from "../../Constants";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ValidationHelper } from "../../helpers/Validations.helpers";
const LoginComp = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""

    })
    const [allFieldWarning, setAllfieldWarning] = useState(false)

    const [validateField,setValidateField] = useState()

    const [loading, setLoading] = useState(false)
    const dataHandler = (type: String | any, value: String) => {
        setLoginData(
            {
                ...loginData,
                [type]: value
            }
        )
    }

    const loginInput = (event: ChangeEvent<HTMLInputElement>) => {
        dataHandler(event.target.name, event.target.value)
    }

    const onLogin = () => {
        if (loginData.email !== "" && loginData.password !== "") {
            setLoading(true)
            setAllfieldWarning(false)
            const validation = ValidationHelper.handleLoginForm(loginData)
            setValidateField(validation)
            setLoading(false)
        }
        else {
            setAllfieldWarning(true)
        }

    }
    return (
        <div className="section login">

            <div className="container">
                <div className="header">
                    <div className="content">
                        <h2 className="heading">Login here</h2>
                    </div>
                </div>
                <div className="input-form">
                    <div className="field-details">
                        {LOGIN_FIELDS.map(field => (
                            <>
                                <div className="label-field">
                                    <label className="label">{field?.label}</label>
                                </div>
                                <div className="input-field">
                                    <input type={field?.type} className="input" name={field?.name} onChange={(e) => loginInput(e)} />
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
                            New user? <span>Register here</span>
                        </div>
                        <div className="btn-div">
                            <Button onClick={() => onLogin()} className="login-btn" variant="primary" disabled={loading}>
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
                                        "Login"
                                }
                            </Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComp;