import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ props }) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    if(likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("liked Removed");
    }
    else{
      if(likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-75 bg-blue-950 rounded-md overflow-hidden bg-opacity-80">
      <div className="relative">
        <img src={course.image.url}/>
        <div className="w-6 h-6 bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
        <button onClick={clickHandler}>
          <FcLike fontSize="1.75rem" />
        </button>
      </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white mt-2">{course.description}</p>
      </div>
    </div>
  );
}

export default Card;
