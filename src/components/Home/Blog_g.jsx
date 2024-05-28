import Blog from './Blog'
import './Blog_g.css'
import blog_data from '../../assets/blog_data'

const Blog_g = () => {
    return (
        <>
            <h1 className="purple text-center mb-4">Blogs</h1>
            <div id="blogs_container_nosame">
                {blog_data.map((blog) => {
                    return (<Blog key={blog.id} topic={blog.topic} author={blog.author} description={blog.description} site={blog.site} image={blog.image}/>)
                })}
            </div>

        </>
    )
}

export default Blog_g;