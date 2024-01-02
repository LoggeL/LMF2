import type { Component } from 'solid-js'
import Header from './Header'
import Hero from './Hero'
import Section from './Section'
import Footer from './Footer'
import FAB from './FAB'

const projects = [
  {
    title: 'Infected - Short Film',
    category: 'Movie',
    description:
      'An action packed short film, shot over 2 days. Post production took about 2 months.',
    picture: 'images/Infected',
    link: 'https://youtu.be/6iNdfsbZWHs',
  },
  {
    title: 'Voll-O-Meter',
    category: 'Website',
    description:
      'A website with PWA support to track your blood alcohol level based on your drinks. It features decay and a lot of other cool stuff.',
    picture: 'images/VollOMeter',
    link: 'https://loggel.github.io/VollOMeter',
  },
  {
    title: 'Melod.ai - Karaoke App',
    category: 'Website',
    description:
      'All in one Karaoke App using Machine Learning to extract the vocals and lyrics from any song.',
    picture: 'images/Melodai',
    link: 'https://melodai.logge.top',
  },
  {
    title: 'Exception - Short Film',
    category: 'Movie',
    description:
      'A short film, made in the span of 2 days in a movie "hackathon". Main focus was having a lot of fun :)',
    picture: 'images/Exception',
    link: 'https://youtu.be/uhlAo1chnlM',
  },
  {
    title: 'Skiing 2022 Aftermovie',
    category: 'Movie',
    description:
      'The Aftermovie for our yearly Skiing Trip. This year we went to the Austrian Alps (Zillertal) and had a lot of fun!',
    picture: 'images/Skiing2022',
    link: 'https://www.youtube.com/watch?v=GVPzXOix2sk',
  },
  {
    title: 'Sailing 2022 Aftermovie',
    category: 'Movie',
    description:
      'The Aftermovie for our Sailing Trip 2022. We sailed through the Netherlands (IJsselmeer) and collected lots of cool memories!',
    picture: 'images/Sailing2022',
    link: 'https://www.youtube.com/watch?v=MbZPufQscBw',
  },
  {
    title: 'Kolpingtheater Ramsen',
    category: 'Website + Ticket System',
    description:
      'Our local theater in Ramsen, Germany. I am responsible for the website and the ticket system. The website is built with Vue.js and the ticket system is built with Express.js and SQLite.',
    picture: 'images/Kolpingtheater',
    link: 'http://theater.kolping-ramsen.de',
  },
  {
    title: 'JP Poolparty Website',
    category: 'Website + Management System',
    description:
      'The website for our yearly Poolparty. I am responsible for the website and the management system. Users can register for the event and choose their favorite songs. The website is built with PaperCSS and the management system is built with Express.js and SQLite.',
    picture: 'images/PoolpartyWebsite',
    link: 'https://poolparty.jupeters.de',
  },
  {
    title: 'Palatina Films',
    category: 'Website + VFX',
    description:
      'My first proper website. I am responsible for the website and the Visual Effects (VFX). The website is built with Materializecss and the VFX are made with After Effects.',
    picture: 'images/PalatinaFilms',
    link: 'https://palatina-films.de',
  },
  {
    title: 'Poolparty 2021 Aftermovie',
    category: 'Movie',
    description:
      'The Aftermovie for our yearly Poolparty at the new location. Main star guest was a hot tub and the cocktail bar.',
    picture: 'images/Poolparty2021',
    link: 'https://www.youtube.com/watch?v=ZCvVEFKuC_o',
  },
  {
    title: 'Skiing 2020 Aftermovie',
    category: 'Movie',
    description:
      'The Aftermovie for our yearly Skiing Trip. This year we went to the Austrian Alps (Bad Gastein). I totally didn`t fall down the mountain :)',
    picture: 'images/Skiing2020',
    link: 'https://www.youtube.com/watch?v=KYahVktrq_I',
  },
  {
    title: 'Poolparty 2020 Aftermovie',
    category: 'Movie',
    description:
      'The Aftermovie for our yearly Poolparty. This year we had a lot of fun and the weather was great!',
    picture: 'images/Poolparty2020',
    link: 'https://www.youtube.com/watch?v=6Qai_0gckB4',
  },
  {
    title: 'Bodensee 2020 Aftermovie',
    category: 'Movie',
    description:
      'The Aftermovie for our Bodensee (Lake Constance) Trip. Driving across the lake and learning to wakeboard.',
    picture: 'images/Bodensee2020',
    link: 'https://www.youtube.com/watch?v=8p3xwe7amDE',
  },
  {
    title: 'Skiing 2019 Aftermovie',
    category: 'Movie',
    description:
      'A shortrip to the Feldberg in the Black Forest. Only 2 days but still a great experience!',
    picture: 'images/Skiing2019',
    link: 'https://www.youtube.com/watch?v=VTPliFOTA0',
  },
  {
    title: 'Die Chroniken von Selantis',
    category: 'Movie',
    description:
      'A big project with a lot of people. We made a triology about a fantasy world called Selantis. I was responsible for the Visual Effects (VFX) and took part as an actor.',
    picture: 'images/Selantis',
    link: 'https://www.youtube.com/playlist?list=PLUron51rWgon7UQuXYib-eS6MZtTybpvw',
  },
  {
    title: 'Sailing 2019 Aftermovie',
    category: 'Movie',
    description:
      'Our first Sailing Trip. We sailed through the Netherlands (IJsselmeer). Good team building experience!',
    picture: 'images/Sailing2019',
    link: 'https://www.youtube.com/watch?v=Vt3wFY_ldt4',
  },
  {
    title: 'Spyfall',
    category: 'Game Website',
    description:
      'A website implementing the game Spyfall in a Hot-Seat mode. The website it built in a minimalistic style as a Progessive Web App (PWA).',
    picture: 'images/Spyfall',
    link: 'https://loggel.github.io/spyfall/',
  },
  {
    title: 'Corona Board',
    category: 'Data Science Website',
    description:
      'A website showing the current Corona situation. The data is fetched from the Johns Hopkins University (JHU).',
    picture: 'images/CoronaBoard',
    link: 'https://loggel.github.io/CoronaBoard/',
  },
  {
    title: 'Gummibärenbande',
    category: 'Partner',
    description:
      'A german gaming Discord Server. I mainly stick around there and sometimes showcase my new projects.',
    video: 'videos/gummibaeren.webm',
    link: 'https://discord.gg/K7Tjtfq',
  },
  {
    title: 'Kolpingtheater Ramsen',
    category: 'Partner',
    description:
      'Our local theater group, which I am a part of. We present a new open air play every year.',
    image: 'svg/Kolpingtheater.svg',
    link: 'http://theater.kolping-ramsen.de',
  },
  {
    title: 'Palatina Films',
    category: 'Partner',
    description:
      'A small hobby film production company. I am a part of the team but the project is currently on hold.',
    image: 'svg/PalatinaFilms.svg',
    link: 'https://palatina-films.de',
  },
  {
    title: 'JP',
    category: 'Partner',
    description:
      'Events, Partys, Trips and more. This guys knows how to create great memories and experiences. Always fun to be around!',
    image: 'svg/JP.svg',
    link: 'https://jupeters.de',
  },
  {
    title: 'CFW',
    category: 'Partner',
    description:
      'The practical mastermind. Very dependable and always ready to help. I am very happy to have him as a friend!',
    image: 'svg/CFW.svg',
    link: 'https://www.youtube.com/channel/UClU8mK17SZwqCLDES0olV1w',
  },
  {
    title: 'Mail - hyper.xjo@gmail.com',
    category: 'Contact',
    description:
      'Feel free to contact me via mail. I will try to answer as soon as possible.',
    image: 'svg/Mail.svg',
    link: 'mailto:hyper.xjo@gmail.com',
  },
  {
    title: 'Telegram - loggel.t.me',
    category: 'Contact',
    description:
      'If you want an answer as soon as possible, feel free to contact me via Telegram. I am always online there.',
    image: 'svg/Telegram.svg',
    link: 'https://t.me/loggel',
  },
  {
    title: 'Discord - Logge#1337',
    category: 'Contact',
    description:
      'If you have questions or want to talk about a project, feel free to contact me via Discord (DM or in the GBB Server). ',
    image: 'svg/Discord.svg',
  },
  {
    title: 'GitHub - LoggeL',
    category: 'Contact',
    description:
      'If you want to see my code or want to contribute to a project, feel free to contact me via GitHub. I am always open for new ideas.',
    image: 'svg/GitHub.svg',
    link: 'https://github.com/LoggeL/',
  },
]

const App: Component = () => {
  return (
    <div>
      <Header />
      <Hero projects={projects} />
      <div class='sm:px-0 md:px-10 xl:px-15'>
        <Section
          projects={projects}
          filter='Movie'
          title='Movies'
          description="All the movies I've done. Lots of Aftermovies (event recap) for different events."
        />
        <Section
          projects={projects}
          filter='Website'
          title='Websites'
          description="A list of Websites I've done. Mostly just messing around with new technologies."
        />

        <Section
          projects={projects}
          filter='Partner'
          title='Partners'
          description="A list of Patners I've worked with. They are all great people and I am very happy to have them as friends."
        />

        <Section
          projects={projects}
          filter='Contact'
          title='Contact'
          description='A list of ways to contact me. Feel free to contact me via any of the listed ways. I dont bite (I swear).'
        />
      </div>
      <Footer />

      <FAB />
    </div>
  )
}

export default App
