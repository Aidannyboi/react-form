import {useState} from "react";
const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstError, setfirstError] = useState("Must be at least 2 character");

    const [lastError, setLastError] = useState("Must be at least 2 character");

    const [emailError, setEmailError] = useState("Must be at least 2 character");

    const [passError, setPassError] = useState("Must be at least 2 character");

    const [conPassError, setConPassError] = useState("Must be at least 2 character");


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

const handleInput = (e) => {
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
                <label> First Name: </label>
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)} className="userInput"/>
            </div>

            <div className="inputField">
                <label> Last Name: </label>
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)} className="userInput"/>
            </div>

            <div className="inputField">
                <label> Email: </label>
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} className="userInput"/>
            </div>

            <div className="inputField">
                <label> Password: </label>
                <input type="text" value={pass} onChange={ (e) => setPass(e.target.value)} className="userInput"/>
            </div>
            <div className="inputField">
                <label> Confirm Password: </label>
                <input type="text" value={conPass} onChange={ (e) => setConPass(e.target.value)} className="userInput"/>
            </div>

            <input type="submit" value="Create User" className="userSubmit"/>
        </div>
    </form>
)
}

export default UserForm;