import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ title, text, imageUrl, liveSiteUrl, githubUrl }) {
  const cardStyle = {
    width: '20rem',
    height: '48rem', // Altura fija para todas las tarjetas
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const cardBodyStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body style={cardBodyStyle}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <div className="d-flex justify-content-center gap-2">
          <Button variant="primary" href={liveSiteUrl} target="_blank">Live site</Button>
          <Button variant="primary" href={githubUrl} target="_blank">Github</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;





