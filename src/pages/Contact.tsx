import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[k: string]: string}>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: {[k: string]: string} = {};
    if (!name) errs.name = 'Name is required';
    if (!email) errs.email = 'Email is required';
    if (!message) errs.message = 'Message is required';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const res = await fetch(`${window.location.origin}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <>
      <PageHeader title="Contact us" />
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <Input id="name" value={name} onChange={e => setName(e.target.value)} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <span id="name-error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <span id="email-error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} aria-describedby={errors.message ? 'message-error' : undefined} />
          {errors.message && <span id="message-error">{errors.message}</span>}
        </div>
        <Button type="submit">Send</Button>
        {status === 'success' && <p role="status">Message sent successfully.</p>}
        {status === 'error' && <p role="status">Something went wrong.</p>}
      </form>
    </>
  );
};

export default Contact;
