import { Link } from '@chakra-ui/react'
import React from 'react'


export const Experiences = {
  PrawaTech: {
    name: 'PrawaTech',
    longName: 'PrawaTech',
    subDetail: '',
    url: 'https://www2.deloitte.com/',
    position: 'MERN Stack Developer',
    duration: 'May 2024 - Present',
    logo: {
      light: '/worked_at_logos/deloitte/Deloitte_logo_black.png',
      dark: '/worked_at_logos/deloitte/Deloitte_logo.png',
    },
    roles: [
      <>
      Led the design and development of a full-featured web application frontend using Next.js, 
      incorporating responsive and utility-first styling with Tailwind CSS. 
      Efficiently deployed the frontend on platforms like Vercel.
    </>,
    
    <>
      Streamlined state management using Redux Toolkit, ensuring seamless data flow across the application.
      Leveraged RESTful APIs to interact with backend services, displaying real-time data using dynamic tables.
    </>,
    
    <>
      Successfully showcased API data on the frontend with a user-friendly table layout, enhancing the overall user experience.
    </>,
    
    ],
  },
  DG: {
    name: 'Digitalis Global',
    longName: 'Digitalis Global',
    subDetail: 'Software House',
    url: 'https://www.digitalisglobal.com/',
    position: 'MERN Stack Developer',
    duration: 'Feb 2020 - Sep 2021',
    logo: {
      light: '/worked_at_logos/scg/SCG_400x400.jpg',
      dark: '/worked_at_logos/scg/SCG.png',
    },
    roles: [
      <>
        Revamping the legacy Partner Portal into a new{' '}
        <Link
          aria-label="Westfield Marketing Hub"
          href="https://www.digitalisglobal.com/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield Marketing Hub
        </Link>{' '}
        using NextJS and Typescript. Restructuring the old express app into a
        newer architectural design approach.
      </>,
      <>
        Created multiple Contentful and Bynder extensions to improve BX process
        better.
      </>,
      <>
        Worked on maintaining{' '}
        <Link
          variant="primaryLink"
          href="https://www.westfield.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield
        </Link>{' '}
        main site and Graphql apis written in NodeJS.
      </>,
      <>
        Migrating of existing marketing email related tools and batch jobs from
        Responsys into new platform called Braze.
      </>,
      <>
        Hired at early 2020, first major task was helping with selecting a new
        marketing vendor that can scale and also enable us to have
        personalisation as well, selecting{' '}
        <Link
          aria-label="Braze"
          href="https://www.braze.com/"
          target="_blank"
          rel="noreferrer"
        >
          Braze
        </Link>{' '}
        as a result.
      </>,
    ],
  },
  Digitalis: {
    name: 'Digitalis Global.',
    longName: 'Digitalis Global.',
    subDetail: 'Software House',
    url: 'https://digitalisglobal.com/',
    position: 'Junior Front-End Developer',
    duration: 'August 2023 - December 2023',
    logo: {
      light: '/worked_at_logos/ivp/blotocol_logo-dark.png',
      dark: '/worked_at_logos/ivp/blotocol-logo-white.png',
    },
    roles: [
      <>
        Developed a Twitter Raffle Campaign / Contest Bot called Camps with
        statistics similar to Facebook Ads.
      </>,
      <>
        In 2019 got promoted as Senior Software Engineer and worked with Cryto
        Exchange, Smart Contracts and other APIs using several techs such as
        NodeJS, .NET Core and React.
      </>,
      <>
        Create highly scalable Japanese e-commerce sites. Most notable clients
        were TV Tokyo, Layla EC using .NET.
      </>,
      <>
        Hired at 2016, Undergone Japanese language training first. Shortly
        after, worked with in-house .NET MVC Framework called ERS.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.PrawaTech,
  Experiences.DG,
  Experiences.Digitalis,
]
