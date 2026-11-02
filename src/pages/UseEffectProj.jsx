import React, { useEffect, useState } from 'react';
import Navbar from '../component/useeffectproject/Navbar';
import Filter from '../component/useeffectproject/Filter';
import {filterData, apiUrl} from "../component/useeffectproject/Data";
import Cards from '../component/useeffectproject/Cards';

function UseEffectProj() {
    const [courses, setCourses] = useState (null)
    useEffect (() => {
        const fetchData = async () => {
            try {
                const res = await fetch (apiUrl);
                const output = await res.json();
                //Save Data into the Variable:
                setCourses(output.data);
            }
            catch(error){
                toast.error("Something Went Wrong");
            }
        }
        fetchData();
    },[]);
  return (
    <>
     <div>
        <Navbar />
        <Filter filterData = {filterData}/>
        <Cards courses={courses} />
     </div>
    </>
  );
}

export default UseEffectProj;