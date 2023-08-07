import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';

const featuersData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

function Features() {
  return (
    //we use id so that we can scroll to it from our navigation bar
    <div className='gpt3__features section__padding' id="features"> 
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {/* in here we want to render 4 different components. for creating loop let create features data array at the top, we can map on the array so in react open a dynamic block of code,{featuresData.map((item,index))} */}
        {featuersData.map((iteam, index) => (
          <Feature />
        ))}
      </div>
    </div>
  )
}

export default Features