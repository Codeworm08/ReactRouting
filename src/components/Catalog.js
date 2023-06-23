import '../App.css';
import { useContext, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import CourseContext from '../CourseContext';
import { SubscribedContext} from '../SubscribedContext';
import UserContext from '../UserContext';
function Catalog()
{
    const {courses}=useContext(CourseContext);
    const {isLoggedIn,loggedUser}=useContext(UserContext);
    const {subscribedUsers, subscribeUser }= useContext(SubscribedContext);
    const navigate = useNavigate();
    if(!courses)
    {
        return <p>Loading...</p>
    }
    const handleSubscribe = (courseName) => {
        let userSubscriptions;
        try{
            if(subscribedUsers[loggedUser])
            {
                userSubscriptions = subscribedUsers[loggedUser];
            }
            else
            {
                userSubscriptions = [];
            }
        }
        catch(error)
        {
            console.log("Failed to fetch subscriptions: ",error);
            userSubscriptions=[];
        }
        if (userSubscriptions.includes(courseName)) {
            alert("User already subscribed to it!");
            return;
          }
        const updatedSubscriptions = {
            ...subscribedUsers,
            [loggedUser]: [...userSubscriptions, courseName],
          };
        subscribeUser(updatedSubscriptions);
        navigate(`/course/${courseName}`);
    };
    return (
        <div className='catalog'>
            {Object.keys(courses).map((courseName) => (
        <div key={courseName} className="course-card">
          <h3>{courseName}</h3>
          <img src={`./${courseName}-thumbnail.png`} alt={`${courseName} Thumbnail`} />
          {isLoggedIn ? (
            subscribedUsers && subscribedUsers[loggedUser]?.includes(courseName) ? (
              <Link to={`/course-page/${courseName}`}>Continue Course</Link>
            ) : (
              <button onClick={() => handleSubscribe(courseName)}>Subscribe</button>
            )
          ) : (
            <p>Login to Subscribe and View Course</p>
          )}
        </div>
      ))}
        </div>
    )
}
export default Catalog;