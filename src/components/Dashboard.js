import { useContext } from 'react';
import { SubscribedContext } from '../SubscribedContext';
import UserContext from '../UserContext';

const Dashboard = () => {
    const { subscribedUsers } = useContext(SubscribedContext);
    const {loggedUser} = useContext(UserContext);
    // Assuming you have the logged-in user's username stored in a variable
    if(!subscribedUsers)
    {
        return <h1>No subscriptions exist!</h1>;
    }

    // Get the subscribed courses for the logged-in user
    const subscribedCourses = subscribedUsers[loggedUser] || [];
    
    return (
    <div>
        <h1>Dashboard</h1>
        <h2>Subscribed Courses:</h2>
        {subscribedCourses.length > 0 ? (
        <ul>
            {subscribedCourses.map((course) => (
            <li key={course}>{course}</li>
            ))}
        </ul>
        ) : (
        <p>No subscribed courses found.</p>
        )}
    </div>
    );
};
export default Dashboard;