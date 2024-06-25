import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { Button } from '@mui/material';

function Blog() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [blog,setBlog] = useState(null)
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const data = await axios.get(
          `http://localhost:5000/api/v1/posts/${id}`
        );
       setBlog(data.data.blog);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[id])
  return (
    <>
      {blog!=null?<>
       <BlogCard data={blog}/>
       <Button variant='contained' color='primary' onClick={()=>navigate('/')}>Go Back</Button>
      </>:
      <>
        WAIT UNTIL WE FETCH
      </>
      }
    </>
  )
}

export default Blog
