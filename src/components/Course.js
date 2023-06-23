import '../App.css';
import { useContext} from 'react';
import {useParams } from 'react-router-dom';
import CourseContext from '../CourseContext';
function Course()
{
    const {courses} = useContext(CourseContext);
    let params=useParams();
    const videos = courses[params.courseName];
    console.log(params);
    return (
        <div className='course'>
            <h2>{params.courseName}</h2>
            <div className='videos'>
                {videos.map((video,index) =>(
                    <div key={index} className='video'>
                    <iframe
                    width="560"
                    height="315"
                    src={video}
                    title={`Video ${index + 1}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Course;