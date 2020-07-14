import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import Navbar from '../Navbar/Navbar';
import Fade from 'react-reveal/Fade';
import fb from '../../img/logos/fb.png';
import ig from '../../img/logos/ig.png';
import git from '../../img/logos/git.png';
import lin from '../../img/logos/lin.png';
import ttv from '../../img/logos/ttv.png';
import arrow from '../../img/rightArrow.png';
import face from '../../img/face.jpg';
import collab from '../../img/collab.png';
import ttvbot from '../../img/ttvbot.png';
import shooter from '../../img/shooter.gif';
import personal from '../../img/personal.png';
import amq from '../../img/amq.png';
import SmoothScroll from 'smooth-scroll'; // https://www.npmjs.com/package/smooth-scroll
import Project from '../Project/Project';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [bodyErr, setBodyErr] = useState(false);

  const scroll = new SmoothScroll('a[href*="#"]',
    {
      speed: 800,
      easing: 'easeInOutCubic'
    }
  )

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

  const createEmail = async () => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let nameError = false;
    let emailError = false;
    let bodyError = false;
    if (name === '') {
      nameError = true;
    }
    if (!regex.test(email)) {
      emailError = true;
    }
    if (body === '') {
      bodyError = true;
    }
    if (nameError || emailError || bodyError) {
      setNameErr(nameError);
      setEmailErr(emailError);
      setBodyErr(bodyError);
      return;
    }
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        fromEmail: email,
        msg: body
      })
    }
    setName('');
    setEmail('');
    setBody('');
    setNameErr(false);
    setBodyErr(false);
    setEmailErr(false);
    const response = await fetch('http://timjose.com:8080/email', request)
    if (response.status === 200) {
      alert('Successfully sent email!')
    } else {
      alert('Email failed to send.');
    }
  }

  return (
    <div className="home">
      <Navbar>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
        {/* <Link to='/more'>More Tim</Link> */}
      </Navbar>
      <div className="sidebar">
        <a href="https://www.linkedin.com/in/tim-jose-b7809019/"><img className="logo" alt="linkedin" src={lin} /></a>
        <a href="https://github.com/timsilog"><img className="logo" alt="github" src={git} /></a>
        <a href="https://www.instagram.com/only5dolla/"><img className="logo" alt="instagram" src={ig} /></a>
        <a href="https://www.twitch.tv/gimmedafruitsnacks"><img className="logo" alt="twitch" src={ttv} /></a>
        <a href="https://www.facebook.com/5dowla"><img className="logo" alt="facebook" src={fb} /></a>
      </div>
      <a className="advance-container" href="#about">
        Learn something new everyday
          <img className="arrow" src={arrow} alt="arrow" />
      </a>
      <div className="bg-img-container">
        <div className="title-div">
          <div className="subtitle">Hi there,</div>
          <div className="name">I'm <div className="color">Tim</div></div>
          <div className="subtitle">a Software Engineer</div>
        </div>
      </div>

      <div id="about">
        <div className="about-content">
          <Fade bottom><h2>- About Me -</h2></Fade>
          <div className="face-container">
            <div className="about-text">
              <Fade bottom distance='50px'><p>
                Hello! I'm a software engineer from Fremont, CA. I have an obsession with learning and exploring new things with enthusiasm. My current focus lies with fullstack web development as I continue to explore the vast amount of tools available to web developers. I aim to build seamless and intuitive user interfaces while ensuring robust and scalable backend infrastructure at the same time.
                </p></Fade>
              <br />
              <Fade bottom><div>- Skills -</div></Fade>
              <Fade bottom cascade><ul>
                <li>Javascript (ES6) / Typescript</li>
                <li>C / C++</li>
                <li>HTML / (S)CSS</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>React</li>
                <li>MongoDB / Firebase</li>
                <li>PostgreSQL</li>
                <li>AWS: EC2, S3, Lambda, Cloudfront</li>
                <li>Git / Github</li>
              </ul></Fade>
            </div>
            <img alt="faceshot" src={face} />
          </div>
        </div>
      </div>

      <div id="projects">
        <Fade bottom distance='100px'><h2>- Projects -</h2></Fade>
        <Project
          title={`Fullstack Web App & Chrome Extension for Web Game`}
          img={amq}
          description={<div>A chrome extension and website to display users' results from <a href='https://animemusicquiz.com/'>Anime Music Quiz</a>. Website and sample search result below:
          <br /><br />
            <a href='https://timsilog.github.io/amqprogress/?#/timsilog'>https://timsilog.github.io/amqprogress</a>
            <br /><br />
            <a href='https://timsilog.github.io/amqprogress/?#/timsilog'>https://timsilog.github.io/amqprogress/?#/timsilog</a><br />
          </div>}
          more={<div>
            The chrome extension stores user results onto a MongoDB.
            The website is a React application utilizing React Router and React Hooks deployed to Github Pages.
            The backend is a RESTful API deployed to Heroku.
            This was a fun project to explore how easy it is to deploy to Github Pages and Heroku, as well as leverage knowledge in React Hooks and RESTful practices.
          </div>}
          reverse={true}
          git="https://github.com/timsilog/amqprogress"
          tech="Typescript, Node.js, React, SCSS, Express, MongoDB, Github Pages, Heroku"
        />
        <Project
          title="Fullstack Spotify Collaboration Playlist Manager"
          img={collab}
          description={<div>A website that manages a collaboration playlist shared by several of my friends on Spotify.<br /><br /><a href="https://thecollablist.com" onClick={e => e.stopPropagation()}>thecollablist.com</a></div>}
          more="All songs we add to the playlist are stored in a MongoDB. Each week a script utilizes the Spotify API to trim the playlist down to 150 songs to keep it fresh. The website displays recently added songs, what will be removed, and who added what. This was my exploration into Amazon Web Services and deployment of a website from back to front.
                  A simple API in Express exposes song and user data from the database to the website."
          git="https://github.com/timsilog/spotifyBot"
          tech="Typescript, Node.js, React, SCSS, MongoDB, Express, AWS EC2, AWS S3, AWS Cloudfront"
        />
        <Project
          title="Personal Website"
          img={personal}
          description="My personal website to display some of my work! My first foray into the world of Docker."
          reverse={true}
          more={<div>A React app with its build stored on an Nginx Docker container. A simple Express app is stored in its own Docker container with an endpoint to send me emails via the Contact Me section. Both containers are hosted on an AWS EC2 server. The domain is managed through AWS Route 53. Both images available on my Dockerhub!<br /><br /><a href="https://hub.docker.com/repository/docker/timsilog/personalwebsite_client">Dockerhub Repo Frontend</a><br /><br /><a href="https://hub.docker.com/repository/docker/timsilog/personalwebsite_backend">Dockerhub Repo Backend</a></div>}
          git="https://github.com/timsilog/personalWebsite"
          tech="Docker, Nginx, AWS EC2, AWS Route 53, Javascript, React, Node.js, SCSS, Express"
        />
        <Project
          title="Twitch.tv Queue Bot"
          img={ttvbot}
          description="A bot that allows viewers to queue up to play with a Twitch streamer via simple chatroom commands."
          more="The bot lives on an AWS EC2 server as a background process that monitors a Twitch stream for activity. The bot authenticates with the Twitch API in order to retrieve data regarding the streamer and viewers. Bot commands pay attention to whether or not viewers are followers, subscribers, or moderators in order to properly parse commands. Commands can be delivered via chatroom or whisper."
          git="https://github.com/timsilog/twitchBots"
          tech="Javascript, AWS EC2"
        />
        <Project
          title="C++ Side-Scrolling Shooter Game"
          img={shooter}
          reverse={true}
          description="A 2d side-scrolling shooter game using ASCII characters."
          more="A Shoot 'em up style game that utilizes the Ncurses library to use the terminal as a GUI. An exploration into objected oriented programming."
          git="https://github.com/timsilog/cpp-piscine/tree/master/r00"
          tech="C++"
        />
      </div>

      <Fade bottom cascade distance='100px'><div id="contact">
        <h1>Contact Me</h1>
        <div>Send me a short email here, or you can dm me via LinkedIn!</div>
        <input type="text" className="word" id="name" name="name" placeholder="Name" value={name} onChange={handleNameChange} maxLength="20" required />
        <input type="email" className="word" id="email" placeholder="Your Email" value={email} onChange={handleEmailChange} maxLength="20" required />
        <textarea id="body" rows="8" placeholder="Say hello!" value={body} onChange={handleBodyChange} required />
        <button id="submit" onClick={createEmail}>Submit</button>
        <div className={nameErr ? "form-error" : "hidden"}>Please enter a name</div>
        <div className={emailErr ? "form-error" : "hidden"}>Please enter a valid email</div>
        <div className={bodyErr ? "form-error" : "hidden"}>Please enter a message</div>
      </div></Fade>
    </div>
  );
}

export default App;
