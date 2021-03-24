import React from 'react';

function ContactInfo({ user }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
  }
  
  function Contact() {
    const users = [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ];
  
    return (
      <div>
        {users.map(user => (
          <ContactInfo user={user} key={user.id} />
        ))}
      </div>
    );
  }

export default Contact;