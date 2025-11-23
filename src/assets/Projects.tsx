import React, { useState, useEffect } from 'react';

// Define the expected structure for a project (optional but good practice with TypeScript)
interface Project {
    id: number;
    title: string;
    imageUrl: string;
    description: string | null; // Description can be null from GitHub API
    githubUrl: string;
}

// --- Projects Component ---
const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // --- Your GitHub Username ---
    const githubUsername = 'AFE123x'; // <--- REPLACE WITH YOUR GITHUB USERNAME

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch repositories from GitHub API
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`); // Fetch sorted by last updated

                if (!response.ok) {
                    throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
                }

                const repos = await response.json();

                // --- Filtering and Mapping ---
                // Decide which repos to show. You might not want ALL of them.
                // Example: Filter by topic 'portfolio' or check for a description
                const filteredRepos = repos.filter(() =>
                    // Example filter: only show repos with a description
                    // repo.description &&
                    // Example filter: only show repos with a specific topic (requires fetching topics or setting them consistently)
                    // repo.topices?.includes('portfolio')
                    // Example: Show all for now, or implement your specific logic
                    true
                );


                // Map GitHub repo data to your Project structure
                const formattedProjects: Project[] = filteredRepos.map((repo: any) => {
                    // --- Image URL Logic (Choose your strategy) ---
                    // Strategy 1: Convention - Look for 'preview.png' in the main branch
                    const potentialImageUrl = `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/${repo.default_branch}/preview.png`;
                    // Note: This URL might 404 if the image doesn't exist. The onError handler will catch it.

                    // Strategy 2: Fallback to owner avatar or placeholder
                    // const imageUrl = repo.owner.avatar_url || 'https://placehold.co/600x400/CCCCCC/31343C?text=Project+Image';

                    return {
                        id: repo.id,
                        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), // Nicer formatting for title
                        // Use the potentialImageUrl - onError will handle failures
                        imageUrl: potentialImageUrl,
                        description: repo.description || 'No description provided.', // Handle null descriptions
                        githubUrl: repo.html_url,
                    };
                });

                setProjects(formattedProjects);

            } catch (err) {
                console.error("Failed to fetch projects:", err);
                setError(err instanceof Error ? err.message : "An unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [githubUsername]); // Re-run effect if username changes (though unlikely here)

    // --- Error Handling for Image Loading ---
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null; // Prevent infinite loop if fallback also fails
        target.src = "https://placehold.co/600x400/CCCCCC/31343C?text=Github";
    };

    return (
        <div id="project">
            {/* CSS Styles (keep as is or move to separate file) */}
            <style>
                {`
                  /* ... your existing CSS styles ... */
                  .project-card {
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-decoration: none;
                    color: inherit;
                    display: block;
                  }
                  .project-card:hover {
                    transform: translateY(-10px) scale(1.03);
                    box-shadow: 0 15px 40px rgba(0, 212, 255, 0.3) !important;
                  }
                  .project-card .card-img-overlay {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(135deg, rgba(0, 212, 255, 0.95), rgba(124, 58, 237, 0.95)) !important;
                    color: white;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 1rem;
                  }
                  .project-card:hover .card-img-overlay {
                    opacity: 1;
                  }
                  .project-card .card-title-static {
                     font-weight: bold;
                     color: var(--text-primary) !important;
                  }
                  .project-card .card-img {
                     object-fit: cover;
                     height: 200px;
                     width: 100%;
                     transition: transform 0.4s ease;
                  }
                  .project-card:hover .card-img {
                     transform: scale(1.1);
                  }
                   .project-card .card-body {
                     padding: 0.5rem 1rem;
                     background: var(--bg-secondary) !important;
                   }
                `}
            </style>

            {/* Main container */}
            <div className="container py-5" id="projects">
                <h1 className="text-center mb-5">Projects</h1>

                {/* Loading State */}
                {loading && <p className="text-center" style={{ color: 'var(--text-secondary)' }}>Loading projects from GitHub...</p>}

                {/* Error State */}
                {error && <p className="text-center text-danger">Error loading projects: {error}</p>}

                {/* Project Grid */}
                {!loading && !error && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <div key={project.id} className="col">
                                    {/* Link points to GitHub repo */}
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="card project-card h-100 shadow-sm">
                                        <img
                                            // Try loading the conventional image URL
                                            src={project.imageUrl}
                                            className="card-img-top card-img"
                                            alt={`${project.title} thumbnail`}
                                            // Use the onError handler you already have!
                                            onError={handleImageError}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title card-title-static text-center">{project.title}</h5>
                                        </div>
                                        {/* Overlay shows description on hover */}
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">{project.title}</h5>
                                            <p className="card-text small">{project.description}</p>
                                        </div>
                                    </a>
                                </div>
                            ))
                        ) : (
                            // Show message if API returns projects but none match filters (or user has no public repos)
                             <div className="col-12">
                                 <p className="text-center" style={{ color: 'var(--text-secondary)' }}>No public projects found matching the criteria, or project details coming soon!</p>
                             </div>
                        )}
                    </div>
                )}
                 {/* Message if API fetch worked but returned zero projects */}
                 {!loading && !error && projects.length === 0 && (
                     <div className="col-12">
                          <p className="text-center" style={{ color: 'var(--text-secondary)' }}>No public projects found on GitHub.</p>
                      </div>
                  )}
            </div>
        </div>
    );
};

export default Projects;