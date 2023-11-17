import React from 'react'
import '../Blog/Blog.css'
import Header_component from '../HowITWorks/Header-component/Header_Component'
import blog1 from '../Blog/blog-img1.jpg'
import blog2 from '../Blog/blog-img2.jpg'
import blog3 from '../Blog/blog-img3.jpg'
import blog4 from '../Blog/blog-img4.jpg'
import blog5 from '../Blog/blog-img5.jpg'
import { Link } from 'react-router-dom'
import BlogComp from './BlogComp/BlogComp'

const Blog = () => {
    const blogdata = [
        {
            title: "Why Homeownership Is Important",
            img: blog1,
            desc: "For many Americans, owning a home is the ultimate symbol of achieving the American Dream. It's not just about having a roof over your head; it's about creating a sense o...",
        },
        {
            title: "What Are The Government Subsidies To Help Potential Home Buyers: Federal & State Level",
            img: blog2,
            desc: "Buying a home is one of the most significant investments that you'll ever make. However, for many people, the cost of purchasing their dream home can be overwhelming. That&#...",
        },
        {
            title: "How a Traditional Rent-To-Own Program Works",
            img: blog3,
            desc: "Are you dreaming of owning a home but cannot qualify for a mortgage right now? A traditional rent-to-own program may be the solution for you! This alternative method allows rent...",
        },
        {
            title: "Mortgage Interest Rates Affect Housing Price",
            img: blog4,
            desc: "Are you in the market for a new home and wondering how mortgage interest rates may affect your purchase? Or are you simply curious about the connection between interest rates an...",
        },
        {
            title: "Housing Price Prediction In 2023",
            img: blog5,
            desc: "As we approach the halfway mark of 2021, many homeowners and prospective buyers are curious about what the future holds for the housing market. With unprecedented economic chang...",
        },
    ]

    return (
        <div className='blog-container'>
            <Header_component heading="Blog" text="Blog" path="blog" />
            <div className='blog-content-container'>
                <div className='blog-col-1-section'>
                    <BlogComp />
                </div>
                <div className='blog-col-2-container' >
                    {
                        blogdata.map((item) => (

                            <div className='blog-col-2'>
                                <div className='blog-col-2-img'>
                                    <img src={item.img} alt='' />
                                </div>
                                <div className='blog-col-2-content'>
                                    <span>Jun 20 2023 | Photo Comments</span>
                                    <h2><Link to="/">{item.title}</Link></h2>
                                    <p>{item.desc}
                                    </p>
                                    <Link to="/single-blog" className='blog-btn'  >
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        ))
                    }


                </div>


            </div>
        </div>
    )
}

export default Blog