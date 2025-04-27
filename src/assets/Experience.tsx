import { useInView } from 'react-intersection-observer'; // Import the hook

// --- Type Definitions ---
interface SkillData {
  languages: string[];
  frameworksLibs: string[];
  toolsDatabases: string[];
  // Add other categories as needed, ensuring keys match keys in skillsData
  [key: string]: string[]; // Index signature to allow string keys
}

interface ExperienceData {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ExperienceItemProps {
  exp: ExperienceData; // Use the ExperienceData interface
}

// --- Skills Data ---
// Define your skills, grouped by category. Replace with your actual skills.
const skillsData: SkillData = { // Add type annotation
  languages: ['JavaScript', 'Rust', 'C', 'C++', 'x86 Assembly', 'RISC-V Assembly', 'Verilog', 'HTML', 'CSS'],
  frameworksLibs: ['React', 'Node.js', 'Express', 'Bootstrap', 'Tailwind CSS'],
  toolsDatabases: ['Git & GitHub', 'REST APIs', 'PostgreSQL', 'MongoDB'],
};

// --- Experience Data ---
// Define your experience data here.
// Make sure to replace this sample data with your actual experience.
const experiences: ExperienceData[] = [ // Add type annotation (array of ExperienceData)
  {
    id: 1,
    title: 'Teaching Assistant',
    company: 'Rutgers University',
    location: 'Piscataway, NJ',
    startDate: 'January 2024',
    endDate: 'Present',
    description: [
      '- Supported the instructor in course development by creating assignments, leading weekly recitations, and grading student work.',
      '- Facilitated and encouraged student discussions to enhance classroom engagement and understanding.',
      '- Helped prepare and manage course materials in collaboration with the professor. For instance, setting up a server for an assignment where students defuse a binary bomb.',
    ],
  },
  {
    id: 2,
    title: 'Vice President',
    company: 'Rutgers Institute for Electrical and Electronics Engineering - N2E division',
    location: 'Piscataway, NJ',
    startDate: 'September 2024',
    endDate: 'May 2025',
    description: [
      '- Served as Vice president for an organization that teaches students to code.',
      '- Led five instructors, organizing and holding different workshops. ',
      '- Lead workshops and judged at RIEEE\'s hackathon, teaching students about android development using Kotlin.'
    ],
  },
  {
    id: 3,
    title: 'Vice President',
    company: 'Rutgers University Student Linux Users Group',
    location: 'Piscataway, NJ',
    startDate: 'September 2023',
    endDate: 'May 2025',
    description: [
      '- Cofounded a Linux organization, providing a new outlet for computer enthusiasts and hobbyists.',
      '- Organized various workshops, like terminal basics and 3D printing, providing an average yield of 30+ students. ',
      '- Created multiple community-driven projects to better the Rutgers Community, like a bus stop sign using recycled screens.'
    ],
  },
  {
    id: 4,
    title: 'Firmware Engineer',
    company: 'Tacodi',
    location: 'Burlington, New Jersey',
    startDate: 'June 2024',
    endDate: 'August 2024',
    description: [
      "- Developed Kernel Modules on a conference device, based on the Nvidia Jetson Orin, allowing for seamless user communication.",
      "- Implemented features like autofocus and zoom from scratch, allowing for a 30% increase in performed compared to previous revisions.",
      "- Recompiled the Linux kernel, removing unnecessary features, reducing memory usage by 20% and memory usage by 10%. ",
    ],
  },
  // Add more experiences here following the same structure
];

// --- Single Experience Item Component (for Animation) ---
// Added Type Annotation for props { exp }
const ExperienceItem = ({ exp }: ExperienceItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once when it comes into view
    threshold: 0.1, // Trigger when 10% of the item is visible
  });

  return (
    <div
      ref={ref}
      // key is no longer needed here as it's applied in the parent map
      className={`experience-item mb-4 border-start border-primary border-3 ps-4 ${inView ? 'is-visible' : ''
        }`}
    >
      <h5 className="fw-bold">{exp.title}</h5>
      <h6 className="text-primary mb-2">{exp.company}</h6>
      <p className="text-muted small mb-2">
        {exp.startDate} - {exp.endDate} | {exp.location}
      </p>
      <ul className="list-unstyled">
        {/* Added Type Annotations for map parameters */}
        {exp.description.map((point: string, index: number) => (
          <li key={index} className="mb-1">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};


// --- Main Experience Component ---
const Experience = () => {
  return (
    <div className="container py-5 overflow-hidden" id="experience">
      <h1 className="text-center mb-5">Experience</h1>
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              // Pass the whole exp object, key is correctly placed here
              <ExperienceItem key={exp.id} exp={exp} />
            ))
          ) : (
            <p className="text-center text-muted">Experience details coming soon!</p>
          )}
        </div>
      </div>

      <div className="mt-5 pt-5 border-top">
        <h2 className="text-center mb-4">Technical Skills</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Type inference works well here now due to SkillData type on skillsData */}
            {Object.entries(skillsData).map(([category, skillsList]) => (
              <div key={category} className="mb-4">
                <h4 className="text-center text-md-start mb-3">{formatCategoryTitle(category)}</h4>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                  {/* Type inference should correctly identify skill as string */}
                  {skillsList.map((skill) => (
                    <span key={skill} className="badge bg-secondary fs-6 fw-normal me-2 mb-2 px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Removed the 'jsx' prop from the style tag */}
      <style>{`
        .experience-item {
          opacity: 0;
          transform: translateY(20px); /* Start slightly below */
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .experience-item.is-visible {
          opacity: 1;
          transform: translateY(0); /* Move to original position */
        }
        /* Optional: Adjust badge styling if needed */
        .badge.bg-secondary {
           background-color: #6c757d !important; /* Ensure Bootstrap color override if needed */
           /* Add any other custom badge styles here */
        }
        h4 { /* Category titles */
            text-transform: capitalize; /* Nicer formatting for category keys */
            border-bottom: 2px solid #dee2e6; /* Optional underline */
            padding-bottom: 0.5rem;
            display: inline-block; /* Make underline fit text */
        }
      `}</style>
    </div>
  );
};

// Helper function to format category keys
// Added type annotation for parameter 'key' and return type 'string'
function formatCategoryTitle(key: string): string {
  const words = key.replace(/([A-Z])/g, ' $1').trim(); // Add space before caps
  return words.charAt(0).toUpperCase() + words.slice(1).replace(/Libs/, '& Libs'); // Capitalize and format 'Libs'
}

export default Experience;