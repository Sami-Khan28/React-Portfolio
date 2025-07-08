import React from 'react';

const Contact = () => (
  <section className="container py-5">
    <h2>Contact</h2>
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </section>
);

export default Contact;
