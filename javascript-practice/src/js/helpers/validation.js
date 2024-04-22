import { Validation_Errors } from '../constants/message'
import { Regex } from '../constants//regex'

const { Required_Field, Invalid_Email, Invalid_Password } = Validation_Errors

const { EmailRegex, PasswordRegex } = Regex

//Validation for Login Form
const Validation_Login_Form = (email, password) => {
  //Define Email
  if (!email.trim()) {
    return Validation_Errors.Required_Field
  } else if (!EmailRegex.test(email)) {
    return Validation_Errors.Invalid_Email
  }
  //Define Password
  if (!password.trim()) {
    return Validation_Errors.Required_Field
  } else if (!PasswordRegex.test(password)) {
    return Validation_Errors.Invalid_Password
  }

  return null
}

export {
  Required_Field,
  Invalid_Email,
  Invalid_Password,
  EmailRegex,
  PasswordRegex,
  Validation_Login_Form,
}
