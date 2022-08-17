const BlogList = ({blogs, title, handleDelete}) => {

  return (
    <div className="blog-list mb-12">
      <h2 className="text-xl">{title}</h2>
       {blogs.map((blog) => (
        <div className="flex-1 truncate py-3 transition-all hover:bg-slate-200" key={blog.id}>
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">{blog.title}</h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{blog.author}</span>
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">{blog.subtitle}</p>
          <button onClick={() => handleDelete(blog.id)} type="button" class="inline-flex items-center py-1.5 px-3 text-xs font-medium rounded-full text-white bg-red-600 hover:bg-red-700">Delete Post</button>
        </div>
       ))}
    </div>
  );
  
}

export default BlogList;