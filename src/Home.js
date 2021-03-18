import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setblogs] = useState([
        { title: 'My new WebSite', body: 'lorem ipsum...', author:'Mario', id:1 },
        { title: 'Welcome Party', body: 'lorem ipsum...', author:'Yoshi', id:2 },
        { title: 'Web dev tool tips', body: 'lorem ipsum...', author:'Mario', id:3 }
    ]);

    const [name,setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(newBlogs);
    }

    useEffect(() => {
        console.log("use Effect ran");
    },[name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog) => blog.author ==='Mario')} title="Mario's Blogs" /> */}
            <button onClick = {() => setName('luigi')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;