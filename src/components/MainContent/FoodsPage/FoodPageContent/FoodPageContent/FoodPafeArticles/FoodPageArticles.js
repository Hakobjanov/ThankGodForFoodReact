import React from 'react'
import SingleFoodArticle from './FoodPageArticles/SingleFoodArticle'
import './foodpagearticles.css'
import LoadMoreBtn from '../../../../../Main/LoadMoreBtn/LoadMoreBtn'

const FoodsPageArticles = ({foodPageArticlesData, category, showFullArticle}) => {

    const filterByCategory = category ? (article) => article.category === category : Boolean
    
    return (
        <div className='postsItems'>
            {foodPageArticlesData.filter(filterByCategory).map(({
                id,
                image,
                category,
                year,
                title,
               
            }) => (
                
                    <SingleFoodArticle 
                     
                    showFullArticle={showFullArticle}
                        key={id} 
                        {...{id,image, category, year, title}}/>
                ))
            }
            <LoadMoreBtn />
        </div>
    )
}

export default FoodsPageArticles