import { useState } from "react";
import BlogList from "../components/BlogList.js";

const OutputtingListsExp = () => {
  const [blogs, setBlogs] = useState([
    { title:'Welcome my website', subtitle:'This is my first website', author:'Cengiz', id: 1 },
    { title:'Developer Tips', subtitle:'Top 10 tips for developers', author:'Beyza', id: 2 },
    { title:'React', subtitle:'React is a JavaScript library for building user interfaces', author:'Cengiz', id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div>
       <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  )
}

export default OutputtingListsExp;