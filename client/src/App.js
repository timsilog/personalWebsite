import React from 'react';
import './App.scss';
import Fade from 'react-reveal/Fade';
import fb from './img/logos/fb.png';
import ig from './img/logos/ig.png';
import git from './img/logos/git.png';
import lin from './img/logos/lin.png';
import ttv from './img/logos/ttv.png';
import arrow from './img/rightArrow.png';
import mug from './img/mug.jpg';
import collab from './img/collab.png';
import ttvbot from './img/ttvbot.png';
import shooter from './img/shooter.gif';
import SmoothScroll from 'smooth-scroll'; // https://www.npmjs.com/package/smooth-scroll
import Project from './components/Project';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    body: '',
    nameErr: false,
    emailErr: false,
    bodyErr: false,
  }

  scroll = new SmoothScroll('a[href*="#"]',
    {
      speed: 1500,
      easing: 'easeInOutQuart'
    }
  )

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value });
  }

  createEmail = async () => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let nameErr = false;
    let emailErr = false;
    let bodyErr = false;
    if (this.state.name === '') {
      nameErr = true;
    }
    if (!regex.test(this.state.email)) {
      emailErr = true;
    }
    if (this.state.body === '') {
      bodyErr = true;
    }
    if (nameErr || emailErr || bodyErr) {
      this.setState({ nameErr, emailErr, bodyErr });
      return;
    }
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        fromEmail: this.state.email,
        msg: this.state.body
      })
    }
    this.setState({ name: '', email: '', body: '', nameErr: false, emailErr: false, bodyErr: false })
    const response = await fetch('http://localhost:4000/email', request)
    if (response.status === 200) {
      alert('Successfully sent email!')
    } else {
      alert('Email failed to send.');
    }
  }

  render() {
    return (
      <div className="app">
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
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
        <div className="bg-img-container" ref={this.myRef}>
          <div className="title-div">
            <div className="subtitle">Hi there,</div>
            <div className="name">I'm <div className="color">Tim</div></div>
            <div className="subtitle">a Software Engineer</div>
          </div>
        </div>

        <div id="about">
          <div className="about-content">
            <Fade bottom><h2>- About Me -</h2></Fade>
            <div className="mugshot-container">
              <div className="about-text">
                <Fade bottom distance='50px'><p>
                  A passionate and enthusiastic software engineer from Fremont, CA. I have an obsession with learning and exploring new things. I'm currenty focusing on development of full stack web applications. I aim to build seemless and intuitive user interfaces while ensuring robust and scalable backend infrastructure at the same time.
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
              <img alt="mugshot" src={mug} />
            </div>
          </div>
        </div>

        <div id="projects">
          <Fade bottom distance='100px'><h2>- Projects -</h2></Fade>
          <Project
            title="Fullstack Spotify Collaboration Playlist Manager"
            img={collab}
            description={<div>A website that manages a collaboration playlist me and many of my friends share on Spotify.<br /><br /><a href="https://thecollablist.com">thecollablist.com</a></div>}
            more="All songs we add to the playlist are stored in a MongoDB. Each week a script utilizes the Spotify API to trim the playlist down to 150 songs to keep it fresh. The website displays recently added songs, what will be removed, and who added what. This was my exploration into Amazon Web Services and deployment of a website from back to front."
            git="https://github.com/timsilog/spotifyBot"
            tech="Typescript, Node.js, React, SCSS, MongoDB, Express, AWS EC2, AWS S3, AWS Cloudfront"
          />
          <Project
            title="Twitch.tv Queue Bot"
            img={ttvbot}
            description="A bot that allows viewers to queue up to play with a Twitch streamer."
            reverse={true}
            more="The bot lives on an AWS EC2 server as a background process that monitors a Twitch stream for activity. The bot authenticates with the Twitch API in order to retrieve data regarding the streamer and viewers. Bot commands pay attention to whether or not viewers are followers, subscribers, or moderators in order to properly parse commands. Commands can be delivered via chatroom or whisper."
            git="https://github.com/timsilog/twitchBots"
            tech="Javascript, AWS EC2"
          />
          <Project
            title="C++ Side-Scrolling Shooter Game"
            img={shooter}
            description="A 2d side-scrolling shooter game using ASCII characters."
            more="A simple Shoot 'em up style game that utilizes the Ncurses library to use the terminal as a GUI. An exploration into objected oriented programming."
            git="https://github.com/timsilog/cpp-piscine/tree/master/r00"
            tech="C++"
          />
        </div>

        <Fade bottom cascade distance='100px'><div id="contact">
          <h1>Contact Me</h1>
          <input type="text" className="word" id="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} required />
          <input type="email" className="word" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required />
          <textarea id="body" rows="8" placeholder="Say hello!" value={this.state.body} onChange={this.handleBodyChange} required />
          <button id="submit" onClick={this.createEmail}>Submit</button>
          <div className={this.state.nameErr ? "form-error" : "hidden"}>Please enter a name</div>
          <div className={this.state.emailErr ? "form-error" : "hidden"}>Please enter a valid email</div>
          <div className={this.state.bodyErr ? "form-error" : "hidden"}>Please enter a message</div>
        </div></Fade>
      </div>
    );
  }
}

export default App;
