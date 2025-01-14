import React from 'react';
import styled from 'styled-components';
import { FaJs, FaReact, FaGithub, FaFigma, FaBootstrap, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiTailwindcss, SiCloudinary, SiFirebase } from 'react-icons/si';

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkillIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const SkillName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const skills = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Cloudinary', icon: <SiCloudinary /> },
  { name: 'Firebase', icon: <SiFirebase /> },
];

const Skills = () => {
  return (
    <SkillsContainer>
      {skills.map((skill, index) => (
        <SkillCard key={index}>
          <SkillIcon>{skill.icon}</SkillIcon>
          <SkillName>{skill.name}</SkillName>
        </SkillCard>
      ))}
    </SkillsContainer>
  );
};

export default Skills;


