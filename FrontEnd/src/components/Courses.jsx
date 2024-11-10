import React from "react";
import Carts from "./Carts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Course = () => {
  const [book,setBook] = useState([]);
  useEffect(()=>{

    const getBook = async()=>{
      try{
      const res= await axios.get("http://localhost:4000/book");
      console.log(res.data)
      setBook(res.data)

      }
      catch(error){
        console.log(error)

      }
    }
    getBook();

  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to introduce our new{" "}
            <span className="text-pink-500">course! :</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsam iusto ut ex. Quisquam eius, aspernatur nemo minima totam,
            distinctio exercitationem saepe incidunt quibusdam tempore
            laudantium dolore officiis ab ipsa? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, ad.
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 rounded-md hover:bg-pink-100 hover:text-black duration-300 mt-6" >Back</button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
               book.map((items)=>(
                <Carts  key={items.id} items={items}/>

               ))
            }
        </div>
      </div>
    </>
  );
};

export default Course;
