import React, { useEffect, useState } from "react";
import Navbar from "../component/useeffectproject/Navbar";
import Filter from "../component/useeffectproject/Filter";
import { filterData, apiUrl } from "../component/useeffectproject/Data";
import Cards from "../component/useeffectproject/Cards";
import { toast } from "react-toastify";
import Spinner from "../component/useeffectproject/Spinner";

function UseEffectProj() {
  const [courses, setCourses] = useState(null); //State Variable
  const [loading, setLoading] = useState(true); //State Variable
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("API Fetch Failed");
      }
      let output = await response.json();
      //output
      setCourses(output.data);
    } catch (error) {
      toast.error("Any issue in network");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col bg-blue-900">
        <div>
          <Navbar />
        </div>
        <div className="bg-blue-900">
          <div>
            <Filter
              filterData={filterData}
              category={category}
              setCategory={setCategory}
            />
          </div>
          <div className="w-11/12 max-w-300 mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {loading ? (<Spinner />) : (<Cards courses={courses} category={category} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UseEffectProj;
