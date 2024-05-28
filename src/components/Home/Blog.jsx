import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = (props) => {
    // document.querySelector('.external_link').addEventListener('click', function(e) {
    //     window.location.href = 'http://example.com';
    // }, false);
    const handleClick = () => {
        const url = props.site;
        // window.open(url, '_blank');
        window.location.href = url;
    }
    return (
        // <a href={props.site}>
        // <Link to={props.site}>
        // <Link to={{pathname: props.site}} target='_blank'>
        <div className='external_link' onClick={handleClick}>
            {/* <a onClick={handleClick}> */}
                <div id="blog-container">
                    <div id="info_blogs">
                        <h3>{props.topic}</h3>
                        <h5>{props.author}</h5>
                        <p id='small_blogs'>Last updated on 20th April 2024</p>
                        <br />
                        <p>{props.description}</p>
                        {/* <a onClick={handleClick}>Visit link</a> */}
                    </div>
                    <img src={props.image} id='resize_blogs'/>
                </div>
            {/* </a> */}
        {/* </Link> */}
        </div>
    )
}
export default Blog;