import { ERROR_MESSAGE } from "../Constants";

const checkEmail = (value :String)=> {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value && !regex.test(String(value).toLowerCase())) {
    return ERROR_MESSAGE.EMAIL;
  }
  return null;
}

const checkFullName= (value :String) => {
  const regex = /[a-zA-Z0-9'-]\s{0,}/;
  if (value && !regex.test(String(value).toLowerCase())) {
    return ERROR_MESSAGE.NAME;
  }
  return null;
}
const checkPassword =(value :String) => {
  if (value && value.length < 8) {
    return ERROR_MESSAGE.PASSWORD;
  }
  return null;
}
export const ValidationHelper = {

  handleRegsiterForm : (values : any) => {
    const errors = {} as any;
    errors["name"] = checkFullName(values["name"]);
    errors["email"] = checkEmail(values["email"]);
    errors["password"] = checkPassword(values["password"]);
    return errors;
  }
} 


