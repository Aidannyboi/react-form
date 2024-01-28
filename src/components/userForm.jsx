import {useState} from "react";
const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstError, setFirstError] = useState("");

    const [lastError, setLastError] = useState("");

    const [emailError, setEmailError] = useState("");

    const [passError, setPassError] = useState("");

    const [conPassError, setConPassError] = useState("");


const createUser = (e) => {
    e.preventDefault();

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        pass: pass,
        conPass: conPass
    };

    setConPass("")
    setPass("")
    setEmail("")
    setPass("")
    setFirstName("")
    setLastName("")
    console.log("Created", newUser)

    setHasBeenSubmitted(true);
}

const handleFirstName = (e) => {
    setFirstName(e.target.value)
    if(e.target.value.length < 1) {
        setFirstError("First name is required!")
    }
    else if (e.target.value.length <= 2) {
        setFirstError("First name must be more than 2 characters!")
    }
    else{
        setFirstError("")
    }
}

const handleLastName = (e) => {
    setLastName(e.target.value)
    if(e.target.value.length < 1) {
        setLastError("Last name is required!")
    }
    else if (e.target.value.length <= 2) {
        setLastError("Last name must be more than 2 characters!")
    }
    else{
        setLastError("")
    }
}

const handleEmail = (e) => {
    setEmail(e.target.value)
    if(e.target.value.length < 1) {
        setEmailError("Email is required!")
    }
    else if (e.target.value.length <= 8) {
        setEmailError("Email must be more than 8 characters!")
    }
    else{
        setEmailError("")
    }
}

const handlePasword = (e) => {
    setPass(e.target.value)
    if(e.target.value.length < 1) {
        setPassError("Password is required!")
    }
    else if (e.target.value.length <= 8) {
        setPassError("Password must be more than 8 characters!")
    }
    else{
        setPassError("")
    }
}

const handleConfirm = (e) => {
    setConPass(e.target.value)
    if(e.target.value.length < 1) {
        setConPassError("Please Match the top password!")
    }
    else if (e.target.value !== pass) {
        setConPassError("Passwords must be matching!")
    }
    else{
        setConPassError("")
    }
}

return (
    <form onSubmit={createUser}>
        {
            hasBeenSubmitted?
            <h2>Thank you for submitting the form!</h2> :
            <h2> Welcome, please submit the form.</h2>
            }
        <div className="form">
            <div className="inputField">
                <p>{firstError}</p>
                <label> First Name: </label>
                <input type="text" value={firstName} onChange={handleFirstName} className="userInput"/>
            </div>

            <div className="inputField">
                <p>{lastError}</p>
                <label> Last Name: </label>
                <input type="text" value={lastName} onChange={handleLastName} className="userInput"/>
            </div>

            <div className="inputField">
                <p>{emailError}</p>
                <label> Email: </label>
                <input type="text" value={email} onChange={handleEmail} className="userInput"/>
            </div>

            <div className="inputField">
                <p>{passError}</p>
                <label> Password: </label>
                <input type="password" value={pass} onChange={handlePasword} className="userInput"/>
            </div>
            <div className="inputField">
                <p>{conPassError}</p>
                <label> Confirm Password: </label>
                <input type="password" value={conPass} onChange={handleConfirm} className="userInput"/>
            </div>

            <input type="submit" value="Create User" className="userSubmit"/>
        </div>
    </form>
)
}

export default UserForm;