import { useState } from "react";

const OutputtingListsExp = () => {
  const [blogs, setBlogs] = useState([
    { title:'Welcome my website', subtitle:'This is my first website', author:'Cengiz', id: 1 },
    { title:'Developer Tips', subtitle:'Top 10 tips for developers', author:'Cengiz', id: 2 },
    { title:'React', subtitle:'React is a JavaScript library for building user interfaces', author:'Cengiz', id: 3 },
  ]);

  return (
    <div>
       {blogs.map((blog) => (
        <div className="flex-1 truncate py-3 transition-all hover:bg-slate-200" key={blog.id}>
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">{blog.title}</h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{blog.author}</span>
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">{blog.subtitle}</p>
        </div>
       ))}
    </div>
  )
}

export default OutputtingListsExp;