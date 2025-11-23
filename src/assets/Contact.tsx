const Contact = () => {
  const formSubmitEndpoint = "https://formsubmit.co/arunf400@gmail.com";

  const redirectUrl = "afe123x.netlify.app";

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className='text-center mb-4' style={{ color: 'var(--text-primary)' }}>Contact Me</h2>

        <form action={formSubmitEndpoint} method="POST">
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>

          {/* Email Field - REQUIRED BY FORMSUBMIT */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              // FIX: rows expects a number in JSX/TS. Use {5} not "5".
              rows={5}
              required
            ></textarea>
          </div>

          {/* FormSubmit Hidden Fields */}
          {/* 1. Redirect URL after submission */}
          <input type="hidden" name="_next" value={redirectUrl} />

          {/* 2. Optional: Customize Subject Line */}
          <input type="hidden" name="_subject" value="New Contact Form Submission!" />

          {/* 3. Optional: Honeypot field */}
          <input type="text" name="_honeypot" style={{ display: 'none' }} />

          {/* Submit Button */}
          <div className="text-center">
             <button type="submit" className="btn btn-primary mt-3">Send Message</button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;