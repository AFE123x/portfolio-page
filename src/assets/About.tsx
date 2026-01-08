import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container py-5" id="about">
      <h1 className="text-center mb-5">About Me</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div 
            ref={ref}
            className={`about-content ${inView ? 'is-visible' : ''}`}
          >
            <p className="lead mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
              I'm a software engineer with a deep love for embedded systems and low-level programming. 
              When I'm not diving into kernel modules or optimizing firmware, you'll find me exploring the fascinating 
              world of Linux, contributing to open-source projects, or tinkering with hardware.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              My journey in embedded systems started when I saw a project where someone made a PS2 controller using a PIC microcontroller on discocrd.
              I fell in the rabbit hole of embedded systems and haven't come out yet. I bought a few microcontrollers, joined various clubs and organizations,
              and started to learn about embedded systems. I then proceded to read many books on embedded linux, Real Time Operating Systems, and embedded software development.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Currently, I'm at Tesla as a Vehicle Firmware Engineer, working on the audio system. I'm always eager to learn, share knowledge, and build things that matter.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .about-content.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default About;

