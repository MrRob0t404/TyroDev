import React from 'react';
import { Link, Route } from 'react-router-dom';

class Me extends React.Component {
  constructor() {
    super();
  }



  render(){
    const { user, logOut } = this.props
    console.log(`profile`, user)
    return(
      <div id="profile">
        <div id="profile-info">
          <img id="profile-pic" src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`} />
          <h2>{user.username}</h2>
          <h3>{`level`}</h3>
          <h3>{user.email}</h3>
        </div>
        <div id="language-container">
          <h3>Languages</h3>
          <p>Language - <span class="dull">{`# years`}</span></p>
          <p>Language - <span class="dull">{`# years`}</span></p>
          <p>Language - <span class="dull">{`# years`}</span></p>
          <p>Language - <span class="dull">{`# years`}</span></p>
        </div>
        <div id="links-container">
          <h3>Links</h3>
          <Link to={`link`}>{`link`}</Link>
          <Link to={`link`}>{`link`}</Link>
        </div>
        <button onClick={this.logOutButton}>LOG OUT</button>
      </div>
    )
  }
}

export default Me;
