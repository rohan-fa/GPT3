import React from 'react'
import './header.css';

function Header() {
  return (
    <div className='gpt3__header section__padding' id="home">Header
      <div className='gpt3__header-container'>
        <h1 className='gradient__text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>
      </div>
    </div>
  
    )
}

export default Header