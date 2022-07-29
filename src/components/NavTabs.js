import React from 'react';
import '../styles/NavTabs.css'
import '../styles/bubblebutton/css/style.css'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div id="navBar">
      <div id="navTitle">
        <h1>Tyler Alcover</h1>
      </div>
      <nav id="navRight">
        <ul className="nav nav-tabs">
          <li className="nav-item bubbly-button">
            <a
              id="navAbout"
              href="#home"
              onClick={() => handlePageChange('AboutMe')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item bubbly-button">
            <a
              id="navPortfolio"
              href="#about"
              onClick={() => handlePageChange('MyWork')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item bubbly-button">
            <a
              id="navContact"
              href="#blog"
              onClick={() => handlePageChange('ContactMe')}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>

          {/* TO BE ADDED LATER */}
          {/* <li>
            <a
               id="songUsed"
               href="https://www.youtube.com/watch?v=hirdkEEvw_k"
               target="_blank"
            >
              <p class="song">Song: VS 1010 </p>
              <p class="song">(From "No Straight Roads")</p>
              <p class="song">Artist: James Landino </p>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
