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
            <h2 className='courseHead'>{params.courseName}</h2>
            <div className='videos'>
            {videos.map((video, index) => (
                <div key={index} className='video-card'>
                    <a href={video}>
                    <div className='lecture-text'>Lecture: {index + 1}</div>
                
                <div className='lecture-thumbnail'>
                    <img src={`../${params.courseName}-thumbnail.png`} alt='Course Thumbnail' />
                </div>
                </a>
                </div>
            ))}
            </div>
        </div>
    );
}
export default Course;