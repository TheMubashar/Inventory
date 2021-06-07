import React from 'react'
import { Link } from 'react-router-dom'
import "./category.css"

function Category({description,Image,connection}) {
    return (
        <Link className="categoryLink" to={`/${connection}`}>
            <div className="category">  
                <h2 className="description">{description}</h2>
                <img className="categoryImg" src={Image} alt="Category"/>
            </div>
        </Link>
    )
}

export default Category
