import React, { createContext, useEffect, useState } from 'react';
const CourseContext = createContext();
export const CourseProvider = ({children}) => {
    const [courses, setCourses] = useState(null);
    useEffect(()=> {
        const storedCourses = localStorage.getItem('courses');
        if(storedCourses)
        {
            setCourses(JSON.parse(storedCourses));
        }
        else
        {
            const defaultCourses={
                'Nodejs':['https://youtu.be/zb3Qk8SG5Ms','https://youtu.be/OIBIXYLJjsI','https://youtu.be/-HPZ1leCV8k','https://youtu.be/DQD00NAUPNk','https://youtu.be/bdHE2wHT-gQ'],
                'Godot':['https://youtu.be/QKgTZWbwD1U','https://youtu.be/S8lMTwSRoRg'],
                'Artificial Intelligence':['https://youtu.be/D5aJNFWsWew','https://youtu.be/LucW-p6zC5c','https://youtu.be/uQmYZTTqDC0','https://youtu.be/TA5ZJm1ZYS4','https://youtu.be/E4M_IQG0d9g','https://youtu.be/mFZazxxCKbw','https://youtu.be/_hAVVULrZ0Q']
            };
            setCourses(defaultCourses);
            localStorage.setItem('courses', JSON.stringify(defaultCourses));
        }
    },[]);
    const value = {
        courses
    };
    return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
};
export default CourseContext;