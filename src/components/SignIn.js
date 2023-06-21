import '../App.css';
import { useContext, useState } from 'react';
import UserContext from '../UserContext';
function SignIn()
{
    const {loginUser}=useContext(UserContext);
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        loginUser(name,password);
    }
    return (
        <div >
            <form className="Form" onSubmit={(e)=>{handleSubmit(e)}}>
                <label>Username:</label><br/>
                <input type="text" value={name} required onChange={(e)=>{handleName(e)}}/><br/>
                <label>Password:</label><br/>
                <input type="password" value={password} required onChange={(e)=>{handlePassword(e)}}/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default SignIn;