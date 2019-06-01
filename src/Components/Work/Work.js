import React from 'react';
import WorkCard from '../WorkCard/WorkCard.js';

const devWork = [
  {
    id: 'd0',
    type: 'dev',
    title: 'The Bible in Five',
    desc: 'The Bible In Five is a scaleable way to read the Bible in context at all times. This app seeks to do away with the lack of understanding in the church.',
    url: 'www.BibleInFive.com',
    path: 'BibleInFive',
    techStack: ['React', 'Node', 'Go']
  },
  {
    id: 'd1',
    type: 'dev',
    title: 'Beerthoven',
    desc: 'Beerthoven Concert Series is a nonprofit classical music concert series for all ages. Dress how you want, clap when you want, and come enjoy a beer, on us!',
    url: 'www.Beerthoven.com',
    path: 'Beerthoven',
    techStack: ['JS', 'React', 'Node']
  },
  {
    id: 'd2',
    type: 'dev',
    title: 'Craft Music Lessons',
    desc: 'Craft is an adult group piano class held in laid back environments like breweries, bars, & coffee shops.',
    url: 'www.CraftMusicLessons.com',
    path: 'CraftMusicLessons',
    techStack: ['JS', 'React']
  },
  {
    id: 'd3',
    type: 'dev',
    title: 'TuneKit',
    desc: 'TuneKit is a platform to empower people to create venues in their own homes.',
    url: 'www.TuneKit.com',
    path: 'TuneKit',
    techStack: ['JS', 'React', 'Node', 'ChartJS']
  },
  {
    id: 'd4',
    type: 'dev',
    title: 'Beerthoven Data App',
    desc: 'This app is a living document for all things Beerthoven concert data. Designed for the staff to access all data in a single customized dashboard.',
    url: 'www.Beerthoven.com/datadash',
    path: 'BeerthovenDataDash',
    techStack: ['JS', 'React', 'Node', 'Python', 'Django']
  },
  {
    id: 'd5',
    type: 'dev',
    title: 'My Personal Website',
    desc: "Well, you're already here, but I may as well add it to the list. Go ahead and click on it! You should head over there/here and take a look.",
    url: 'www.AustinHowes.com',
    path: 'AustinHowes',
    techStack: ['JS', 'React', 'Node']
  }
]

const artWork = [
  {
    id: 'a0',
    type: 'art',
    title: 'Demo Reel',
    desc: 'This is a highlight reel of my work ranging from traditional to scan-data modeling.',
    url: 'https://vimeo.com/154961183',
    path: '154961183',
    techStack: ['Modo', 'PhotoScan', 'Sony_a99', 'Lidar']
  },
  {
    id: 'a1',
    type: 'art',
    title: 'AR15',
    desc: 'This project sought to model complex hard surface geometry without faking any of the modeling detail with textures.',
    url: 'https://vimeo.com/97918154',
    path: '97918154',
    techStack: ['Modo']
  },
  {
    id: 'a2',
    type: 'art',
    title: 'Stone Wall',
    desc: 'This was a project aiming for photorealism requiring minimal modeling time.',
    url: 'https://vimeo.com/135458192',
    path: '135458192',
    techStack: ['Modo', 'PhotoScan', 'Sony_a99']
  },
  {
    id: 'a3',
    type: 'art',
    title: 'Brick Pillar Corner',
    desc: 'Photogrammetry project to capture granular details in seemingly flat surfaces.',
    url: 'https://vimeo.com/124166261',
    path: '124166261',
    techStack: ['Modo', 'PhotoScan', 'Sony_a99', 'Maya']
  },
  {
    id: 'a4',
    type: 'art',
    title: 'Manhole Cover',
    desc: 'Photogrammetry asset designed for realistic road/sidewalk texture library.',
    url: 'https://vimeo.com/116153733',
    path: '116153733',
    techStack: ['Modo', 'PhotoScan', 'Sony_a99']
  }
]

const Work = (props) => {
  return (
    <div>

      {props.showDev && <section className='work-card-array'>
        {devWork.map((piece) => {
          return <WorkCard 
            key={piece.id} 
            title={piece.title} 
            desc={piece.desc} 
            url={piece.url}
            path={piece.path} 
            techStack={piece.techStack} 
          />
      })}
      </section>}


      {props.showArt && <section className='work-card-array'>
        {artWork.map((piece) => {
          return <WorkCard 
            key={piece.id} 
            title={piece.title} 
            desc={piece.desc} 
            url={piece.url} 
            path={piece.path}
            techStack={piece.techStack} 
          />
      })}
      </section>}

    </div>
  )
}

export default Work;
