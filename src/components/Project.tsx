import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mockdefault from '../assets/images/mock-default.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Curated Browsing</h2></a>
                <p>A sleek, user-friendly web application for browsing movies curated by genre, popularity, and personal taste. It fetches data from a movie database API and includes features like search, watchlists, trailers, and user ratings. A simple but effective way to explore films with clean UI and filtering capabilities.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mockdefault} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Job Tracker</h2></a>
                <p> productivity tool designed to help users organize and manage their job search. Users can log job applications, track interview stages, set reminders, and categorize opportunities. The app features CRUD functionality, filters, and optional analytics.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mockdefault} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Meme Memory App</h2></a>
                <p>A fun and interactive web application that allows users to create custom memes. Users can upload images or select from a gallery, add top and bottom text, and download or share their creations. The project demonstrates client-side image editing, user input handling, and dynamic DOM manipulation using HTML, CSS, and JavaScript.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mockdefault} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Jalan Je</h2></a>
                <p>A travel planning and real-time transit app that helps users find routes, track public transport, and plan commutes. The app includes a dashboard with personalized trip history, route stats, and saved locations. It integrates mapping and transit APIs for real-time route updates and directions.</p>
            </div>
              
            
            
        </div>
    </div>
    );
}

export default Project;