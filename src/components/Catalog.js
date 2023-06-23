import '../App.css';
import { useContext } from 'react';
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
        
        subscribeUser(loggedUser, courseName);
        navigate(`/course/${courseName}`);
    };
    return (
        <div className='catalog'>
            {isLoggedIn ? (
                <div className='Head'>
                    <h3>Welcome {loggedUser}!</h3>
                </div>
            ):(<div className='Head'>
                    <h3>Hello! Please Register to access our catalog</h3>
                </div>)}
            {Object.keys(courses).map((courseName) => (
        <div key={courseName} className="course-card"onClick={() => handleSubscribe(courseName)}>
          <h3>{courseName}</h3>
          <img src={`./${courseName}-thumbnail.png`} alt={`${courseName} Thumbnail`} /><br/>
          {isLoggedIn ? (
            subscribedUsers && subscribedUsers[loggedUser]?.includes(courseName) ? (
              <Link to={`/course-page/${courseName}`}>Continue Course</Link>
            ) : (
              <p className='Sub' >Subscribe</p>
            )
          ) : (
            <p className='sub'>Login to Subscribe and View Course</p>
          )}
        </div>
      ))}
        </div>
    )
}
export default Catalog;