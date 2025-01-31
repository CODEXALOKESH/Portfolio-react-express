import React from 'react'
import './Blog.css'
import BlogCard from '../components/BlogCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { host } from '../../constants.js'

const Blog = () => {
  const [dataset, setDataset] = useState([]); // Use state for dataset

  const fetchData = async () => {
    try {
      const response = await axios.post(`${host}/api/v1/blog-fetch`, {
        passw: "alokeshPortfolio",
      });
      
      setDataset(response.data.blog); // Assuming 'projects' is an array in the response
      console.log(response.data.blog);
      
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
 useEffect(() => {
    fetchData();
  }, []);
 const data= [
   { title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, minima earum? Natus reprehenderit nisi beatae iure, a explicabo itaque ratione tempore quaerat sequi debitis. Sed.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores libero voluptates unde doloremque quidem beatae ex iusto et error laboriosam, consequuntur perspiciatis debitis nisi dicta corporis assumenda aliquam sit eaque praesentium earum iste sint necessitatibus vel aspernatur! Id sapiente porro, maxime itaque sint non est numquam totam alias nobis quod iusto deserunt labore eaque, saepe nulla. Possimus veritatis blanditiis magnam!"},

    { title:  "labore dolorem eum unde ea, eligendi repellendus reprehenderit amet exercitationem? At laboriosam laborum dolore molestias quibusdam non voluptatibus omnis inventore quo!",
      description: " dicta corporis assumenda aliquam sit eaque praesentium earum iste sint necessitatibus vel aspernatur! Id sapiente porro, maxime itaque sint non est numquam totam alias nobis quod iusto deserunt labore eaque, saepe nulla. Possimus veritatis blanditiis magnam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eius impedit reprehenderit ullam! Iusto assumenda tempora exercitationem optio debitis quam?"},

      { title:"amet consectetur adipisicing elit. Numquam porro nobis vero quis earum facilis harum temporibus! Eaque saepe fugit fuga, aspernatur eos at amet dolorum aliquam illum ullam nihil.",
        description: "vel aspernatur! Id sapiente porro, maxime itaque sint non est numquam totam alias nobis quod iusto deserunt labore eaque, saepe nulla. Possimus veritatis blanditiis magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit, sed, tenetur corporis dolor expedita fugit obcaecati velit ea enim tempora quibusdam ut."  },
]
  return (
    <>
    <div className="blog-base">
      {dataset.map((item, index) => (
        <BlogCard key={index} id={item._id} title={item.title} description={item.content} />
      ))}
    </div>
    </>
  )
}

export default Blog
