import React from 'react'
import './BlogCard.css'

const BlogCard = (prop) => {
  const openBlog = () =>{
    // navigate to blog page
    window.location.href = `/blog/content&id=${prop.id}`;
  }
  return (
    <>
        <div className="comp-blogcard-base">
            <div className="comp-blogcard-title">{prop.title}</div>
            <div className="comp-blogcard-desc">{prop.description}</div>
            <div className="comp-blogcard-showmore">
                <div className="comp-blogcard-showmore-title" id={prop.id} onClick={openBlog}>Show More</div>
                <div className="comp-blogcard-showmore-icon"><img src="arrow_drop_down.svg" alt="icon" /></div>
            </div>
        </div>
    </>
  )
}

export default BlogCard
