import '../App.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseContext from '../CourseContext';
function Catalog()
{
    const {courses}=useContext(CourseContext);
    if(!courses)
    {
        return <p>Loading...</p>
    }
    const handleClick = (courseName) => {
        const links = courses[courseName];
    };
    return (
        <div className='catalog'>
            {Object.keys(courses).map((courseName) => (
        <div key={courseName} className="course-card" onClick={() => handleClick(courseName)}>
          <h3>{courseName}</h3>
          <img src={`./${courseName}-thumbnail.png`} alt={`${courseName} Thumbnail`} />
        </div>
      ))}
        </div>
    )
}
export default Catalog;