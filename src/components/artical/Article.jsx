import React from 'react'
import './artical.css';

function Article({imgUrl}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="BlogImg" />
      </div>
    </div>
  )
  
}

export default Article