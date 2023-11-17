import React from 'react'
import '../BlogComp/BlogComp.css'
import blog1 from '../blog-img1.jpg'
import blog2 from '../blog-img2.jpg'
import blog3 from '../blog-img3.jpg'
import blog4 from '../blog-img4.jpg'
import blog5 from '../blog-img5.jpg'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

const BlogComp = () => {
    const blogCompData = [
        {
            title: "Why Homeownership Is Important...",
            img: blog1,

        },
        {
            title: "What Are The Government Subsid...",
            img: blog2,

        },
        {
            title: "How a Traditional Rent-To-Own...",
            img: blog3,

        },
        {
            title: "Mortgage Interest Rates Affect...",
            img: blog4,

        },
        {
            title: "Housing Price Prediction In 20...",
            img: blog5,

        },
    ];
    const listData = [

        {
            item: "House"
        },
        {
            item: "Real Homes"
        },
        {
            item: "Baths"
        },
        {
            item: "Beds"
        },
        {
            item: "Garages"
        },
        {
            item: "Properties"
        },
        {
            item: "Real Homes"
        },
        {
            item: "Baths"
        },
        {
            item: "Beds"
        },
        {
            item: "Garages"
        },
        {
            item: "Properties"
        },

    ]
    return (
        <div><div className='blog-col-1'>
            <div className='blog-col-1-search'>
                <input type='text' placeholder='Search' />
                <button> <BiSearch /></button>
            </div>
            <div className='blog-col-1-cate'>
                <h3>
                    Categories
                </h3>
                <ul>
                    <li>Branding</li>
                    <li>Marketing</li>
                    <li>Optimization</li>
                    <li>Planning</li>
                    <li>Web</li>
                </ul>
            </div>
            <div className='blog-popular-cate'>
                <h3>Popular Tags</h3>
                <ul>
                    {
                        listData.map((item) => (
                            <li>{item.item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='blog-recent-post'>
                <h3>
                    Recent Posts
                </h3>
                {blogCompData.map((item) => (
                    <div className='blog-post-cols'>
                        <Link to="/"><img src={item.img} alt='' /></Link>
                        <div className='recent-box'>

                            <span>Jun 20, 2023</span>
                            <Link to="/"><h2>
                                {item.title}
                            </h2></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div></div>
    )
}

export default BlogComp