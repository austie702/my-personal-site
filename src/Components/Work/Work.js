import React, { Component } from 'react';
import WorkCard from '../WorkCard/WorkCard.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logoReact from '../../Images/Logo_React.png';

// const logos = {
//   'JS': require('../../Images/Logo_JavaScript.png'),
//   'React': require('../../Images/Logo_React.png')
// }

const devWork = [
  {
    id: 'd0',
    title: 'The Bible in Five',
    desc: 'The Bible In Five is a scaleable way to read the Bible in context at all times. This app seeks to do away with the lack of understanding in the church.',
    url: 'www.BibleInFive.com',
    techStack: ['logoReact', 'React', 'Node', 'GO']
  },
  {
    id: 'd1',
    title: 'Beerthoven',
    desc: 'Beerthoven Concert Series is a nonprofit classical music concert series for all ages. Dress how you want, clap when you want, and come enjoy a beer, on us!',
    url: 'www.Beerthoven.com',
    techStack: ['JS', 'React', 'Node']
  },
  {
    id: 'd2',
    title: 'Craft Music Lessons',
    desc: 'Craft is an adult group piano class held in laid back environments like breweries, bars, & coffee shops.',
    url: 'www.CraftMusicLessons.com',
    techStack: ['JS', 'React']
  },
  {
    id: 'd3',
    title: 'TuneKit',
    desc: 'TuneKit is a platform to empower people to create venues in their own homes.',
    url: 'www.TuneKit.com',
    techStack: ['JS', 'React', 'Node']
  },
  {
    id: 'd4',
    title: 'Beerthoven Data App',
    desc: 'This app is a living document for all things Beerthoven concert data. Designed for the staff to access all data in a single customized dashboard.',
    url: 'www.Beerthoven.com/datadash',
    techStack: ['JS', 'React', 'Node', 'Python', 'Django']
  },
  {
    id: 'd5',
    title: 'My Personal Website',
    desc: "Well, you're already here, but I may as well add it to the list. Go ahead and click on it! You should head over there/here and take a look.",
    url: 'www.AustinHowes.com',
    techStack: ['JS', 'React', 'Node']
  }
]

{/* <FontAwesomeIcon icon={['fab', 'node-js']} /> */}
{/* <FontAwesomeIcon icon={['fab', 'python']} /> */}
{/* <FontAwesomeIcon icon={['fab', 'react']} /> */}

const artWork = [
  {
    id: 'a0',
    title: 'Stone Wall',
    desc: 'This was a project aiming for photorealism requiring minimal modeling time.',
    url: 'www.vimeo.com/something-or-other',
    techStack: ['Modo', 'PhotoScan', 'Sony a99']
  },
  {
    id: 'a1',
    title: 'AR15',
    desc: 'This was a project sought to model complex hard surface geometry without faking any of the modeling detail.',
    url: 'www.vimeo.com/something-or-other',
    techStack: ['Modo']
  }
]

class Work extends Component {
  render() {
    return (
      <div>
        
        <section className='work-card-array'>
          {devWork.map((piece) => {
            return <WorkCard 
              key={piece.id} 
              title={piece.title} 
              desc={piece.desc} 
              url={piece.url} 
              techStack={piece.techStack} 
            />
        })}
        </section>


        <section className='work-card-array'>
          {artWork.map((piece) => {
            return <WorkCard 
              key={piece.id} 
              title={piece.title} 
              desc={piece.desc} 
              url={piece.url} 
              techStack={piece.techStack} 
            />
        })}
        </section>

      </div>
    )
  }
}

export default Work;
