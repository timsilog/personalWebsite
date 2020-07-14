import React, { useState } from 'react';
import './Project.scss';
import Fade from 'react-reveal/Fade';
import arrow from '../../img/rightArrow.png';

const Project = (props) => {
  const [dropdownShowing, setDropdownShowing] = useState(false);

  const toggleDropdown = () => {
    setDropdownShowing(!dropdownShowing);
  }

  return (
    <div>
      <Fade bottom distance='50px'>
        <div
          className={`project-container${props.reverse ? ' reverse' : ''}`}
          onClick={toggleDropdown}
        >
          <div className={`project-text`}>
            <div className="project-title">{props.title}</div>
            <div className="project-description">
              {props.description}
            </div>
            <br />
            <div className="more">
              <div>{dropdownShowing
                ? 'Less'
                : 'More'
              }</div>
              <img src={arrow} alt="arrow"
                className={dropdownShowing
                  ? 'up'
                  : 'down'}
              />
            </div>
          </div>
          <img className="project-img" alt="project-img" src={props.img} />
        </div>
      </Fade>
      <Fade top distance='10px' ><div
        className={dropdownShowing
          ? 'dropdown-showing'
          : 'dropdown-hidden'}
      >
        {props.more}
        <br /><br />
        <a href={props.git}>Github Repo</a>
        <br /><br />
        <div className="tech">{props.tech}</div>
      </div></Fade>
    </div>
  )
}

export default Project;