import { motion } from "framer-motion";

export default function Home(){
  return (
    <div className="hero">
      <motion.h1 
        className="hero-title"
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
      >
        ARASU SUJITH REDDY
      </motion.h1>
      <p className="hero-sub">Computer Science Engineer • Full-Stack Developer • Game Developer</p>
      <div className="contact-links">
        <p><strong>Email:</strong> <a href="mailto:Sujith.200513@gmail.com">Sujith.200513@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 8688583286</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sujithreddy-arasu" target="_blank" rel="noopener noreferrer">sujithreddy-arasu</a></p>
      </div>
    </div>
  );
}
