import React from 'react';

// --- Project Data ---
// Define your project data here.
// Replace this sample data with your actual projects.
const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Personal-portfolio+page', // Replace with your image URL or path
        description: 'My personal portfolio page written in React and Bootstrap.',
        githubUrl: 'nan', // Replace with your repo URL
    },
    {
        id: 2,
        title: 'NES Emulator',
        imageUrl: 'https://raw.githubusercontent.com/AFE123x/NES-Emulator/refs/heads/main/images/zelda.png', // Replace with your image URL or path
        description: 'A fully functional Nintendo Entertainment System Emulator',
        githubUrl: 'https://github.com/AFE123x/NES-Emulator', // Replace with your repo URL
    },
    {
        id: 3,
        title: 'Micromouse',
        imageUrl: 'https://avatars.githubusercontent.com/u/172004430?s=800&v=4', // Replace with your image URL or path
        description: 'An autonomous robot capable of navigating an entire maze, reaching the centering.',
        githubUrl: 'https://github.com/RutgersMicromouse/Micromouse-2025', // Replace with your repo URL
    },

];

// --- Projects Component ---
const Projects = () => {
    return (
        <div id="project">
            {/* Basic CSS for the hover effect - included here for simplicity */}
            {/* In a larger app, move this to a separate CSS/SCSS file */}
            <style>
                {`
          .project-card {
            position: relative; /* Needed for absolute positioning of the overlay */
            overflow: hidden; /* Hide overflow content */
            transition: transform 0.3s ease; /* Smooth scaling on hover */
            text-decoration: none; /* Remove underline from link */
            color: inherit; /* Inherit text color */
            display: block; /* Make the anchor fill the card space */
          }
          .project-card:hover {
            transform: scale(1.03); /* Slightly scale up card on hover */
            box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* Add shadow on hover */
          }
          .project-card .card-img-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7); /* Dark overlay */
            color: white; /* Text color on overlay */
            opacity: 0; /* Hidden by default */
            transition: opacity 0.3s ease; /* Smooth fade-in */
            display: flex; /* Use flexbox for centering */
            flex-direction: column; /* Stack title and description */
            justify-content: center; /* Center content vertically */
            align-items: center; /* Center content horizontally */
            text-align: center; /* Center text */
            padding: 1rem; /* Add some padding */
          }
          .project-card:hover .card-img-overlay {
            opacity: 1; /* Show overlay on hover */
          }
          .project-card .card-title-static {
             /* Style for the title always visible below the image */
             font-weight: bold;
          }
          .project-card .card-img {
             /* Ensure image covers the area, might crop */
             object-fit: cover;
             height: 200px; /* Fixed height for uniform card images */
          }
          /* Ensure card body has minimal padding when overlay is not shown */
           .project-card .card-body {
             padding: 0.5rem 1rem; /* Reduced padding */
           }
        `}
            </style>

            {/* Main container */}
            <div className="container py-5" id="projects">
                {/* Section Title */}
                <h1 className="text-center mb-5">Projects</h1>

                {/* Row for the grid, using Bootstrap's row-cols utilities for responsiveness */}
                {/* row-cols-1: 1 card per row on xs screens */}
                {/* row-cols-md-2: 2 cards per row on md screens and up */}
                {/* row-cols-lg-3: 3 cards per row on lg screens and up */}
                {/* g-4: Adds gutters (spacing) between columns and rows */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {/* Check if there are projects to display */}
                    {projects.length > 0 ? (
                        // Map over the projects data array
                        projects.map((project) => (
                            // Grid column for each project
                            <div key={project.id} className="col">
                                {/* Anchor tag wraps the entire card, linking to GitHub */}
                                {/* project-card class applies hover styles */}
                                {/* h-100 ensures cards in the same row have equal height */}
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="card project-card h-100 shadow-sm">
                                    {/* Project Thumbnail Image */}
                                    <img
                                        src={project.imageUrl}
                                        className="card-img-top card-img" // Added card-img class for styling
                                        alt={`${project.title} thumbnail`}
                                        // Add error handling for broken images
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/31343C?text=Image+Not+Found"; }}
                                    />

                                    {/* Card Body - Contains the title always visible */}
                                    <div className="card-body">
                                        <h5 className="card-title card-title-static text-center">{project.title}</h5>
                                    </div>

                                    {/* Hover Overlay - Contains title and description, shown on hover */}
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text small">{project.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        // Message if no projects are available
                        <div className="col-12">
                            <p className="text-center text-muted">Project details coming soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
