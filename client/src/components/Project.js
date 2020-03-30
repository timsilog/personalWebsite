import React from 'react';
import './Project.scss';
import Fade from 'react-reveal/Fade';
import arrow from '../img/rightArrow.png';

export default class Project extends React.Component {
  state = {
    dropdownShowing: false,
  }

  toggleDropdown = () => {
    this.setState({ dropdownShowing: !this.state.dropdownShowing });
  }

  render() {
    return (
      <div>
        <Fade bottom distance='50px'>
          <div
            className={`project-container${this.props.reverse ? ' reverse' : ''}`}
            onClick={this.toggleDropdown}
          >
            <div className={`project-text`}>
              <div className="project-title">{this.props.title}</div>
              <div className="project-description">
                {this.props.description}
              </div>
            </div>
            <div className="more">
              <div>{this.state.dropdownShowing
                ? 'Less'
                : 'More'
              }</div>
              <img src={arrow} alt="arrow"
                className={this.state.dropdownShowing
                  ? 'up'
                  : 'down'}
              />
            </div>
            <img className="project-img" alt="project-img" src={this.props.img} />
          </div>
        </Fade>
        <Fade top distance='10px' ><div
          className={this.state.dropdownShowing
            ? 'dropdown-showing'
            : 'dropdown-hidden'}
        >
          {this.props.more}
          <br /><br />
          <a href={this.props.git}>Github Repo</a>
          <br /><br />
          <div className="tech">{this.props.tech}</div>
        </div></Fade>
      </div>
    )
  }
}