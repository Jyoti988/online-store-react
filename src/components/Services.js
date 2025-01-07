import React from 'react';

const Services = () => {
  const servicesList = [
    { id: 1, title: 'Web Development', description: 'Building responsive and high-performance websites.' },
    { id: 2, title: 'Mobile App Development', description: 'Creating user-friendly and efficient mobile applications.' },
    { id: 3, title: 'UI/UX Design', description: 'Designing intuitive and aesthetically pleasing user interfaces.' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Services</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {servicesList.map(service => (
          <li key={service.id} style={{ marginBottom: '20px' }}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
