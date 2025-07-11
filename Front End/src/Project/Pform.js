
import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import './Pform.css';

function Pform() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://game-world-v2-w7e4.onrender.com/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setShow(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  return (
    <div className="form-wrapper">
      <hr id="line" />
      <h1 className="form-title">Game With Us – Ask Away</h1>

      <Form className="custom-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message..."
            required
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <div style={{ textAlign: 'center' }}>
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
      <Modal show={show} onHide={() => setShow(false)} centered >
        <Modal.Body style={{ textAlign: 'center', padding: '30px',background:'black', color:' #00a2ffd8',fontFamily:"cursive"}}>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.SFGtinUcWA8VHrSwhzti8QHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Success"
            style={{ width: '150px', marginBottom: '20px' }}
          />
          <h4 style={{}}>Soldier's Message Received.</h4>
          <p>We’ll Contact You Soooonnn...</p>
          <Button variant="success" onClick={() => setShow(false)}>Close</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Pform;
