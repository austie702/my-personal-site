import React from 'react';
import WorkCard from '../WorkCard/WorkCard.js';
// import PlaceHolder from '../../Images/300x200.png';
import DevThumb_TBIF from '../../Images/DevThumbnails/DevThumb_BibleInFive.jpg';
import DevThumb_Beerthoven from '../../Images/DevThumbnails/DevThumb_Beerthoven.jpg';
import DevThumb_CraftMusicLessons from '../../Images/DevThumbnails/DevThumb_CraftMusicLessons.jpg';
import DevThumb_TuneKit from '../../Images/DevThumbnails/DevThumb_TuneKit.jpg';
import DevThumb_Calculator from '../../Images/DevThumbnails/DevThumb_Calculator.jpg';
import DevThumb_AustinHowes from '../../Images/DevThumbnails/DevThumb_AustinHowes.jpg';
import ArtThumb_ManholeCover from '../../Images/ArtThumbnails/ArtThumb_ManholeCover.jpg';
import ArtThumb_StonekWall from '../../Images/ArtThumbnails/ArtThumb_StonekWall.jpg';
import ArtThumb_AR15 from '../../Images/ArtThumbnails/ArtThumb_AR15.jpg';
import ArtThumb_TreeTrunk from '../../Images/ArtThumbnails/ArtThumb_TreeTrunk.jpg';
import ArtThumb_DemoReel from '../../Images/ArtThumbnails/ArtThumb_DemoReel.jpg';

const devWork = [
  {
    id: 'd0',
    type: 'dev',
    title: 'The Bible in Five',
    desc: 'The Bible In Five is a scaleable way to read the Bible in context at all times. This app seeks to do away with the lack of understanding in the church.',
    url: 'www.BibleInFive.com',
    path: '/dev/bible-in-five',
    techStack: ['React', 'Node', 'Go'],
    imageThumb: DevThumb_TBIF
  },
  {
    id: 'd1',
    type: 'dev',
    title: 'Beerthoven',
    desc: 'Beerthoven Concert Series is a nonprofit classical music concert series for all ages. Dress how you want, clap when you want, and come enjoy a beer, on us!',
    url: 'www.Beerthoven.com',
    path: 'Beerthoven',
    techStack: ['JS', 'React', 'Node'],
    imageThumb: DevThumb_Beerthoven
  },
  {
    id: 'd2',
    type: 'dev',
    title: 'Craft Music Lessons',
    desc: 'Craft is an adult group piano class held in laid back environments like breweries, bars, & coffee shops.',
    url: 'www.CraftMusicLessons.com',
    path: 'CraftMusicLessons',
    techStack: ['JS', 'React'],
    imageThumb: DevThumb_CraftMusicLessons
  },
  {
    id: 'd3',
    type: 'dev',
    title: 'TuneKit',
    desc: 'TuneKit is a platform to empower people to create venues in their own homes.',
    url: 'www.TuneKit.com',
    path: 'TuneKit',
    techStack: ['JS', 'React', 'Node', 'ChartJS'],
    imageThumb: DevThumb_TuneKit
  },
  {
    id: 'd4',
    type: 'dev',
    title: 'Calculator',
    desc: 'A project from my first days of React, learning how to build minimal components and pass the necessary props to replicate the classic machine.',
    url: 'www.austinhowes.com/calculator',
    path: 'BeerthovenDataDash',
    techStack: ['JS', 'React', 'Node'],
    imageThumb: DevThumb_Calculator
  },
  {
    id: 'd5',
    type: 'dev',
    title: 'My Personal Website',
    desc: "Well, you're already here, but I may as well add it to the list. Go ahead and click on it! You can head over there/here and take a(nother) look.",
    url: 'www.AustinHowes.com',
    path: 'AustinHowes',
    techStack: ['JS', 'React', 'Node'],
    imageThumb: DevThumb_AustinHowes
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
    techStack: ['Modo', 'PhotoScan', 'Sony_a99', 'Lidar'],
    imageThumb: ArtThumb_DemoReel
  },
  {
    id: 'a1',
    type: 'art',
    title: 'AR15',
    desc: 'This project sought to model complex hard surface geometry without faking any of the modeling detail with textures.',
    url: 'https://vimeo.com/97918154',
    path: '97918154',
    techStack: ['Modo'],
    imageThumb: ArtThumb_AR15
  },
  {
    id: 'a2',
    type: 'art',
    title: 'Stone Wall',
    desc: 'This was a project aiming for photorealism requiring minimal modeling time.',
    url: 'https://vimeo.com/135458192',
    path: '135458192',
    techStack: ['Modo', 'PhotoScan', 'Sony_a99'],
    imageThumb: ArtThumb_StonekWall
  },
  {
    id: 'a3',
    type: 'art',
    title: 'Tree Trunk',
    desc: 'Photogrammetry project to test capture of multiple deep crevices in a target.',
    url: 'https://vimeo.com/118117782',
    path: '124166261',
    techStack: ['Modo', 'PhotoScan', 'Sony_a99', 'Maya'],
    imageThumb: ArtThumb_TreeTrunk
  },
  {
    id: 'a4',
    type: 'art',
    title: 'Manhole Cover',
    desc: 'Photogrammetry asset designed for realistic road/sidewalk texture library.',
    url: 'https://vimeo.com/116153733',
    path: '116153733',
    techStack: ['Modo', 'PhotoScan', 'Sony_a99'],
    imageThumb: ArtThumb_ManholeCover
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
            imageThumb={piece.imageThumb}
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
            imageThumb={piece.imageThumb}
          />
      })}
      </section>}

    </div>
  )
}

export default Work;
