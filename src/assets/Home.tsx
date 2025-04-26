import React from 'react';

function Home() {
    const githubLink = "https://github.com/AFE123x";
    const linkedinLink = "https://linkedin.com/in/arun-felix-389b03231";
    const instagramLink = "https://www.instagram.com/afe123x/";
    const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4E03AQFcxXy94vp6lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729830943671?e=1750896000&v=beta&t=Lz4MFP-ndsYYldqouDyRdbssYx3b47bI22lFkX9RcQY";

    return (
        // Added `min-vh-100` to make the row take full viewport height.
        // Kept `align-items-center` to vertically center the columns within the tall row.
        // Removed `my-4` (optional, remove if you don't want margin outside the 100vh).
        // Kept `py-5` for internal padding top/bottom.
        <div className="row py-5 align-items-center min-vh-100" id="home">

            {/* Column 1: Image, Name, Social Links */}
            <div className="col-lg-4 col-md-5 text-center mb-4 mb-md-0">
                <img
                    src={profileImageUrl}
                    className="img-fluid w-75 mx-auto d-block mb-3"
                    style={{ borderRadius: '50%', maxWidth: '250px' }}
                    alt="Profile picture of Arun Felix"
                />
                <h1 className="mb-3 text-center">Arun Felix</h1>
                <div className="my-3">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="GitHub Profile">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style={{ width: '30px', height: 'auto' }} alt="GitHub Icon" />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="LinkedIn Profile">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" style={{ width: '30px', height: 'auto' }} alt="LinkedIn Icon" />
                    </a>
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="Instagram Profile">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" style={{ width: '30px', height: 'auto' }} alt="Instagram Icon" />
                    </a>
                </div>
            </div>

            {/* Column 2: Welcome Text */}
            <div className="col-lg-8 col-md-7 text-center text-md-start ps-md-4">
                <p className="lead">
                    Welcome to my portfolio! My name is Arun Felix, a fourth-year Computer Science and Music double major. Here, you can find information about my skills, experience, and projects. Hopefully, you find something interesting!
                </p>
            </div>
        </div>
    );
}

export default Home;