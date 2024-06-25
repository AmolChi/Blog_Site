import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import '../styles/blogs.css'
import { Button } from "@mui/material";

function Blogs() {
  
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/posts");
        setData(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = ()=>{
    navigate('/createBlog')
  }

  return (
        <>
            <Button className="button" onClick={handleButtonClick} variant="contained" color="secondary">Create Blog</Button>
            {data.length > 0 ? 
                <div className="blogs">
                    {data.map((post)=>{
                        return <BlogCard data={post}/>
                    })}
                </div> 
                : 
                <>
                    No data yet
                </>
            }
        </>
    );
}

export default Blogs;
