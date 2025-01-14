import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #2c2a2aae; /* Fondo oscuro */
  color: #fff; /* Texto en blanco */
  border-radius: 5px;
  width: 70%;
  margin-top: 20px;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactText = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.2); /* Aumentar tamaño al pasar el mouse */
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.7); /* Resaltar con sombra */
    border-radius: 30%; /* Borde redondeado */
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%; /* Borde redondeado */
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contáctame</ContactTitle>
      <ContactText>
        Si estás interesado en trabajar conmigo o contratarme para tu próximo proyecto, no dudes en contactarme en cualquier momento a mi correo <a href="mailto:devjuansebastian@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>devjuansebastian@gmail.com</a>.
      </ContactText>
      <IconsContainer>
        <IconLink href="https://github.com/sebastian12j" target="_blank" rel="noopener noreferrer">
          <Icon src="https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736304039/GitHub-Logo_p7fohw.png" alt="GitHub" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/juan-sebastian-lasso-448b161b9/" target="_blank" rel="noopener noreferrer">
          <Icon src="https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736304039/logo-linkedin-icon-1536_izvqi6.png" alt="LinkedIn" />
        </IconLink>
      </IconsContainer>
    </ContactContainer>
  );
};

export default Contact;


