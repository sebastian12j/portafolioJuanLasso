import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar el contenido */
  padding: 20px;
`;

const EducationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #333; /* Fondo oscuro */
  color: #fff; /* Texto en blanco */
  width: 80%;
  transition: transform 0.3s, background-color 0.3s; /* Transición para el efecto de resaltado */
  
  &:hover {
    transform: scale(1.05); /* Aumentar tamaño al pasar el mouse */
    background-color: #444; /* Cambiar color de fondo al pasar el mouse */
  }
`;

const EducationTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  align-items: center; /* Alinear el texto y el logotipo */
`;

const EducationDetails = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Logo = styled.img`
  width: 30px; /* Ajusta el tamaño del logotipo */
  height: 30px;
  margin-left: 10px; /* Espacio entre el texto y el logotipo */
`;

const education = [
  { title: 'Educación Universitaria- Politecnico Gran Colombiano', details: 'Ingeniería de Software- 3 semestre cursando', logo: 'https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736302274/poli_gdqr0a.avif' },
  { title: 'Bootcamp- Agile Innova', details: 'Desarrollador web frotend - 5 meses de formación 6 horas diarias.', logo: 'https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736302274/agile-innova-academy_fa8qa1.png' },
  { title: 'Tecnólogo-Fcepcep', details: 'Tecnólogo en Finanzas y Sistemas contables.', logo: 'https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736302274/fcecep_dpsagq.webp' },
  { title: 'Inglés- Politecnico Empresarial Colombia', details: 'Nivel B1 certificado', logo: 'https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1736302273/pec_nx3ncz.png' },
];

const Education = () => {
  return (
    <EducationContainer>
      {education.map((edu, index) => (
        <EducationCard key={index}>
          <EducationTitle>
            {edu.title}
            <Logo src={edu.logo} alt={`${edu.title} logo`} />
          </EducationTitle>
          <EducationDetails>{edu.details}</EducationDetails>
        </EducationCard>
      ))}
    </EducationContainer>
  );
};

export default Education;








