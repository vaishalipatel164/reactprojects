import React from 'react';
import Card from './Card';

function Cards({cousrse}) {
  let allCourses = [];
  
  //Returns you a list of all courses received from the API response.
    const getCourses = () => {
      console.log("printing");
      console.log(courses);
        Object.values  (cousrse).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
              allCourses.push(course);
            })
        })
        return allCourses;
    }
  return (
    <>
      <div>
        {
        getCourses().map((course) => {
        return <Card key={course} course={course} />
        })
        }
    </div>
    </>
  );
}

export default Cards;