import { useInView } from 'react-intersection-observer';

interface Interest {
  name: string;
  icon: string;
  description: string;
}

const interests: Interest[] = [
  {
    name: 'Linux',
    icon: '🐧',
    description: 'Passionate about open-source and Linux systems'
  },
  {
    name: 'Embedded Systems',
    icon: '⚡',
    description: 'Love working with microcontrollers and hardware'
  },
  {
    name: '3D Printing',
    icon: '🖨️',
    description: 'Creating physical projects from digital designs'
  },
  {
    name: 'Open Source',
    icon: '💻',
    description: 'Contributing to community-driven projects'
  },
  {
    name: 'Electronics',
    icon: '🔌',
    description: 'Tinkering with circuits and hardware projects'
  },
  {
    name: 'Teaching',
    icon: '📚',
    description: 'Sharing knowledge through workshops and mentorship'
  }
];

const InterestCard = ({ interest, index }: { interest: Interest; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`col-md-4 col-sm-6 mb-4 interest-card ${inView ? 'is-visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="interest-item">
        <div className="interest-icon">{interest.icon}</div>
        <h5 style={{ color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>
          {interest.name}
        </h5>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
          {interest.description}
        </p>
      </div>
    </div>
  );
};

const Interests = () => {
  return (
    <div className="container py-5" id="interests">
      <h1 className="text-center mb-5">Interests & Hobbies</h1>
      <div className="row justify-content-center">
        {interests.map((interest, index) => (
          <InterestCard key={interest.name} interest={interest} index={index} />
        ))}
      </div>

      <style>{`
        .interest-item {
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
          backdrop-filter: blur(5px);
        }
        .interest-item:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 48, 135, 0.6);
          box-shadow: 0 10px 30px rgba(0, 48, 135, 0.2);
        }
        .interest-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        .interest-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .interest-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Interests;

