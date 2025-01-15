import  { useState, useEffect } from 'react';
import "./Module.css";
import { Parallax } from "react-parallax";
import image1 from "../images/imagenuno.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import BasicExample from '../componente/BasicExample';
import Skills from '../componente/Skills';
import Education from '../componente/Education';
import Contact from '../componente/Contact';

const insideStyles = {
  background: "rgba(0, 0, 0, 0.5)", // Fondo oscuro pero leve
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff", // Texto en blanco para mejor visibilidad
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "80%",
  borderRadius: "10px"
};

const textStyles = {
  maxWidth: "60%",
  marginRight: "20px"
};

export function ModuleParallax() {
  const [opacity1, setOpacity1] = useState(1);
  const [opacity2, setOpacity2] = useState(1);
  const [opacity3, setOpacity3] = useState(1);
  const [opacity4, setOpacity4] = useState(1);
  const [opacity5, setOpacity5] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Calcular la opacidad para cada imagen
    const opacity1 = 1 - Math.min(scrollTop / windowHeight, 1);
    const opacity2 = 1 - Math.min((scrollTop - windowHeight) / windowHeight, 1);
    const opacity3 = 1 - Math.min((scrollTop - 2 * windowHeight) / windowHeight, 1);
    const opacity4 = 1 - Math.min((scrollTop - 3 * windowHeight) / windowHeight, 1);
    const opacity5 = 1 - Math.min((scrollTop - 4 * windowHeight) / windowHeight, 1);

    setOpacity1(opacity1);
    setOpacity2(opacity2);
    setOpacity3(opacity3);
    setOpacity4(opacity4);
    setOpacity5(opacity5);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ( <div> <div id="sobre-mi" style={{ position: "relative", height: "100vh", backgroundColor: "black" }}> <Parallax bgImage={image1} strength={400} style={{ opacity: opacity1 }}> <div style={{ height: "100vh" }}> <div style={insideStyles}> <div style={{ ...textStyles, maxWidth: "70%" }}> {/* Ajusta el ancho aquí */} <h1 className="text-4xl mt-4">Sobre mí</h1> <p className="mt-4">💡¡Hola! Soy Juan Sebastián, Cuento con conocimientos en desarrollo web, adquiridos en estudios de Ingeniería de Software, complementados por una experiencia de inmersión en la fábrica de software de Agile Innova, donde participé en más de 6 proyectos reales, adquiriendo experiencia práctica y enfrentando desafíos del mundo laboral.</p> <p>Tengo un sólido dominio de tecnologías como React.js, TypeScript, Redux, Material UI, Bootstrap, HTML y CSS, que utilizo para construir interfaces eficientes y escalables. Mi enfoque está en optimizar procesos y mejorar la experiencia del usuario en cada proyecto. Mis conocimientos adicionales incluyen contabilidad y finanzas, lo cual me permite combinar la lógica del desarrollo con el entendimiento de cifras, proyecciones y análisis matemático.</p> <p>Siempre estoy buscando formas de llevar los proyectos al siguiente nivel con soluciones prácticas e innovadoras. ¡Estoy listo para crear y transformar ideas en realidad!✌</p> </div> <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736208733/IMG_20240606_135149_wq6ey0.jpg" alt="Mi foto" className="h-40 w-40 rounded-full object-cover" /> </div> </div> </Parallax> </div>

      <div id="section2" style={{ position: "relative", height: "100vh", backgroundColor: "black" }}>
        <Parallax bgImage={image2} strength={400} style={{ opacity: opacity2 }}>
          <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
          <BasicExample
  title="VAMOS A LEER"
  text="Read es una aplicación interactiva diseñada para motivar a los niños a leer. Permite a los profesores verificar en tiempo real si los estudiantes completaron sus lecturas y su progreso en cada cuento disponible. Además, los resultados pueden enviarse automáticamente a los acudientes, manteniéndolos informados sobre el desempeño de sus hijos. Es una herramienta educativa que combina interacción y seguimiento en tiempo real para mejorar el hábito de la lectura."
  imageUrl="https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736289039/read_x0gqul.png"
  liveSiteUrl="https://proyecto-demoday-7ryu000.vercel.app"
  githubUrl="https://github.com/sebastian12j/proyectoDemoday.git"
/>
<BasicExample
  title="BUFALO GYM"
  text="Buffalo GYM es una app para seguimiento de ejercicios. Permite registrarte con Gmail o Facebook, registrar altura, peso y género, y elegir entre rutinas predeterminadas o personalizables. Incluye cronómetros y explicaciones en tiempo real para realizar ejercicios correctamente."
  imageUrl="https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736289038/bufaloGym_hb6vis.png"
  liveSiteUrl="https://bufalogym-20p926d8i-juans-projects-edcf8b55.vercel.app/"
  githubUrl="https://github.com/sebastian12j/bufalogym"
/>
<BasicExample
  title="PETS"
  text="Pets es una aplicación web que facilita la adopción de animales, permitiendo tanto dar en adopción como adoptar. Además, ofrece la opción de buscar alimentos para mascotas y publicar anuncios para dar en adopción, todo en un entorno amigable."
  imageUrl="https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736289038/pets_ajd9im.png"
  liveSiteUrl="https://retogatos-30lp5d6f1-juans-projects-edcf8b55.vercel.app/"
  githubUrl="https://github.com/sebastian12j/retogatos.git"
/>
<BasicExample
  title="CURSERA"
  text="Coursera es una aplicación diseñada para el aprendizaje, donde puedes acceder a lecturas, responder cuestionarios y ver videos que te ayudarán a responder correctamente. También ofrece la opción de hacer un seguimiento de tu proceso de aprendizaje."
  imageUrl="https://res.cloudinary.com/dzubhlegp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736289038/cursera_qgaihp.png"
  liveSiteUrl="https://educa-ten.vercel.app/"
  githubUrl="https://github.com/sebastian12j/educa"
/>



          </div>
        </Parallax>
      </div>

      <div id="section3" style={{ position: "relative", height: "100vh", backgroundColor: "black" }}> <Parallax bgImage={image1} strength={400} style={{ opacity: opacity3 }}> <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}> <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", textAlign: "center", color: "#fff", zIndex: 1 }}>My Skills</h1> <div style={{ ...insideStyles, marginTop: "148px", zIndex: 0 }}> <Skills /> </div> </div>
      </Parallax>
      </div>

      <div id="section4" style={{ position: "relative", height: "100vh", backgroundColor: "black" }}> <Parallax bgImage={image2} strength={400} style={{ opacity: opacity4 }}> <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}> <div style={{ ...insideStyles, marginTop: "20px", backgroundColor: "#2c2a2a7b", color: "#fff", padding: "20px", borderRadius: "10px", width: "70%" }}> <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", textAlign: "center", color: "#ffffff" }}>Educación</h1> <Education /> </div> </div>
      </Parallax>
      </div>

      <div id="section5" style={{ position: "relative", height: "100vh", backgroundColor: "black" }}>
        <Parallax bgImage={image3} strength={400} style={{ opacity: opacity5 }}>
          <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}> <Contact /> </div>
        </Parallax>
      </div>
    </div>
  );
}

export default ModuleParallax;



















