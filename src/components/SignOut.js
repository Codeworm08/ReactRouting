import '../App.css';
import { useContext } from 'react';
import { redirect } from 'react-router-dom';
import UserContext from '../UserContext';
function SignOut() 
{
    const {logoutUser,loggedUser} = useContext(UserContext);
    
    const handleSubmit = (e)=>{
        logoutUser(loggedUser);
    }
    
    return (
        <>
            <button onClick={(e)=>{handleSubmit(e)}}>Sign Out</button>
        </>
    );
}
export default SignOut