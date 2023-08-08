import React from 'react'
import './artical.css';

function Article({imgUrl, title, date}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="Blog" />
      </div>
      <div className='gpt3__blog-container_article-content'> 
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Fill Article</p>
      </div>
    </div>
  )
  
}

export default Article