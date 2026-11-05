import React, { useEffect, useState } from "react";
import Navbar from "../component/useeffectproject/Navbar";
import Filter from "../component/useeffectproject/Filter";
import { filterData, apiUrl } from "../component/useeffectproject/Data";
import Cards from "../component/useeffectproject/Cards";

function UseEffectProj() {

    async function fetchData() {
        try{

        }
        catch(error) {
            let response =await fetch(apiUrl);
            let output = await response.json();
            
        }
    }
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Filter filterData={filterData} />
        </div>
        <div>
          {/* <Cards courses={courses} /> */}
        </div>
      </div>
    </>
  );
}

export default UseEffectProj;
