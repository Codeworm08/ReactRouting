import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubscribedContext } from '../SubscribedContext';
import UserContext from '../UserContext';

const Dashboard = () => {
    const { subscribedUsers } = useContext(SubscribedContext);
    const {loggedUser} = useContext(UserContext);
    const navigate = useNavigate();
    // Assuming you have the logged-in user's username stored in a variable
    if(!subscribedUsers)
    {
        return <h1>No subscriptions exist!</h1>;
    }

    // Get the subscribed courses for the logged-in user
    const subscribedCourses = subscribedUsers[loggedUser] || [];
    const handleClick = (course) => {
        navigate(`/course/${course}`);
    } 
    return (
    <div>
        <h1 className='Head'>{loggedUser}'s Dashboard</h1>
        <h2>Subscribed Courses:</h2>
        {subscribedCourses.length > 0 ? (
        <ul>
            {subscribedCourses.map((course) => (
                <div key={course} className="course-card" onClick={() => handleClick(course)}>
                <h3>{course}</h3>
                <img src={`./${course}-thumbnail.png`} alt={`${course} Thumbnail`}/>
                </div>
            ))}
        </ul>
        ) : (
        <p>No subscribed courses found.</p>
        )}
    </div>
    );
};
export default Dashboard;