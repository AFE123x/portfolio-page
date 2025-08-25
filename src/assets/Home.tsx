import { ReactTyped } from "react-typed";
function Home() {
    const githubLink = "https://github.com/AFE123x";
    const linkedinLink = "https://linkedin.com/in/arun-felix-389b03231";
    const profileImageUrl = "../1729830943671.jpeg";

    return (
        <div className="row py-5 align-items-center min-vh-100" id="home">
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
                </div>
            </div>
            <div className="col-lg-8 col-md-7 text-center"> {/* Removed text-md-start and ps-md-4, kept text-center */}
                <ReactTyped
                    // Add a font-size or display class here. fs-3 or display-4 are examples.
                    // Choose the size that fits your design.
                    className="fs-1" // Example: Using font-size utility class
                    // OR className="display-4" // Example: Using a larger display heading class
                    // Removed text-right
                    strings={[
                        "Full Stack Developer",
                        "Software Engineer",
                        "Embedded Systems Engineer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                >
                    {/* ReactTyped often renders into a span by default, which text-center will center */}
                </ReactTyped>
            </div>
        </div>
    );
}

export default Home;