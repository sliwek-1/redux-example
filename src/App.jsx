import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MyInput } from './component/form/myInput'
import { ADD_USER, REMOVE_USER } from './actions/actions';

function App() {

  const currentUser = useSelector(state => state.userReductor.user);
  const dispatch = useDispatch();


  const [formValues, setFormValues] = useState({
    user: {
      firstname: currentUser[0]?.user?.firstname || "",
      lastname: currentUser[0]?.user?.lastname || "",
      email: currentUser[0]?.user?.email || ""
    }
  })

  const handleChange = (event) => {
    const inputType = event.target.id;
    const inputValue = event.target.value;

    setFormValues((prevFormValue) => ({
      user: {
        ...prevFormValue.user,
        [inputType]: inputValue
      }
    }))
  } 

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({type: ADD_USER, payload: { user: {firstname: formValues?.user?.firstname, lastname: formValues?.user?.lastname, email: formValues?.user?.email} }})
    setFormValues({
      user: {
        firstname: "",
        lastname: "",
        email: ""
      }
    })
  } 

  return (
    <>
      <form action="/" method='POST' onSubmit={onSubmit}>
        <MyInput 
          label="Imię" 
          name="firstname"
          id="firstname"
          className="input"
          handleChange={handleChange}  
          value={formValues.user.firstname || ""}
        />

        <MyInput 
          label="Nazwisko" 
          name="lastname"
          id="lastname"
          className="input"
          handleChange={handleChange}  
          value={formValues.user.lastname || ""}
        />

        <MyInput 
          label="Email" 
          name="email"
          id="email"
          className="input"
          handleChange={handleChange}  
          value={formValues.user.email || ""}
        />

        <button type='submit'>Confirm</button>
      </form>
    </>
  )
}

export default App
