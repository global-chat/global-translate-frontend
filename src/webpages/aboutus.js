import React, {ReactDOM} from 'react';
import Charles from '../images/charles.png';
import Xia from '../images/xia.png';
import Anthony from '../images/anthony.png';
import Vinh from '../images/vinh.png';
import Navigation from './nav';
import '../css/aboutus.css';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Navigation auth={this.props.isAuthenticated} props={this.props} logout={this.props.logoutUser} userName={this.props.userName} userToken={this.props.userToken}></Navigation>
        <div className="about">
          <h2>About Us</h2>
          <div className="slide-container">
          <div className="portrait">
            <div>
            <img alt="Vinh" src={Vinh} />
            <p>Vinh Nguyen</p>
            </div>
            <p className="description">Engineer, Programmer, and Former Submarine Warfare Officer with five years of experience in the world’s most accomplished nuclear program.</p>
          </div>
          <div className="portrait">
            <div>
            <img alt="Charles" src={Charles} />
            <p>Charles Clemens</p>
            </div>
            <p className="description">Charles is my name and I am many things beside a full stack web developer (though I do find myself humming Kip's ode to technology from the movie Napolean Dynamite quite often).
  
            Family man, martial artist, veteran, author, comedian, gamer, bassist, public speaker; these are all labels that describe different aspects of myself. At the core I am a man that yearns for growth, a lifelong learner that spends more time researching, contemplating, and practicing than watching tv.
  
            I believe in the chase and motivating others to chase after their own dreams makes me smile.
            All too often the inner critic receives more attention than it deserves so everyone wins when we can keep it silent. The inner critic is a liar that does not want you to know the truth: that we can convert dreams, no matter how big, into circumstances as long as we are willing to put in the work to make that happen.</p>
          </div>
          <div className="portrait">
            <div>
            <img alt="Xia" src={Xia} />
            <p>Xia Liu</p>
            </div>
            <p className="description">MS Information Systems and Operations management graduate with strong education background in information technology and management; diverse range of experience in IT-related positions; innovative at problem solving; excellent logical thinking and quantitative analytical abilities; creative and strategic leader with experience in a variety of different areas; results-oriented, well organized and detail oriented. My career goal is to be a both generalist and specialist in integrated information technology field.</p>
          </div>
          <div className="portrait">
            <div>
            <img alt="Anthony" src={Anthony} />
            <p>Anthony Berry</p>
            </div>
            <p className="description">Highly skilled and resourceful leader who has exhibited an excellent work ethic, commitment to people, and a dedication to results as a member of the US Army. Demonstrated years of success in problem solving, critical thinking, and effective communication that can translate to success in any company.</p>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs