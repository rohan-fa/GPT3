import React from 'react'
import './blog.css';
import Artical from '../../components/artical/Artical'

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container-groupA'>
          Artical
        </div>
        <div className='gpt3__blog-container-groupB'>
        Artical
        Artical
        Artical
        </div>
      </div>  
    </div>
  )
}

export default Blog