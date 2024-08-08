import "./App.css";
import "animate.css";
import hamburger from "./media/camera.gif";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import wedding from './media/sample.jpg'
import { motion } from "framer-motion";


const letters = "HELLO!".split("");
const bounce = {
  hidden: { y: "-40px", opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
  }),
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 1.0, duration: 0.8 },
  }),
};

function App() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-image">
          {/* <img
            src={hamburger}
            className="w-12 h-12 bg-transparent"
            alt="hamburger"
          /> */}
          
          <div className="hero-content">
            <div className="2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[30%] sm:w-[0px] "></div>
            <div>
              <div className="word-container">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={bounce}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <motion.h1
                initial={{ x: "40vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
                variants={textVariants}
              >
                <p className="text-white drop-shadow-3xl text-[32px] font-extrabold mb-2">
                  CHALLA CHANDU
                </p>
              </motion.h1>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={bounce}
                custom={1} 
              >
                <p className="font-bold mb-2">PHOTOGRAPHY</p>
              </motion.h1>
            
                <p className="mb-8 bg-black text-white p-2 weight-semi-bold">Capturing Moments, Creating Memories</p>
              
              <a 
                href="#" 
                className="font-bold px-4 py-2 border-white border-2 bg-transparent text-white drop-shadow-3xl transition-transform transform hover:bg-white hover:text-black" 
                style={{ transformOrigin: 'center' }}
              >
                Contact Me
              </a>
            </div>
            <div className="hidden lg:flex  h-50 flex-col bg-black text-lg text-white py-4 px-3 gap-4 ">
              <a href="#" className="hoverclass"><FaFacebook /></a>
              <a href="#" className="hoverclass"><FaInstagram /></a>
              <a href="#" className="hoverclass"><FaTwitter/></a>
              <a href="#" className="hoverclass"><FaLinkedin /></a>
              <a href="#" className="hoverclass"><MdEmail/></a>
              <a href="#" className="hoverclass"><FaWhatsappSquare/></a>
            </div>
          </div>
          <div className="extra-content">
            <h1 className="text-center font-extrabold text-2xl my-6">WEDDING</h1>
            <div className="flex flex-wrap justify-center gap-4">
              <img src={wedding} className="w-32 h-32 object-cover" alt="Wedding" />
              <img src={wedding} className="w-32 h-32 object-cover" alt="Wedding" />
              <img src={wedding} className="w-32 h-32 object-cover" alt="Wedding" />
              <img src={wedding} className="w-32 h-32 object-cover" alt="Wedding" />
              <img src={wedding} className="w-32 h-32 object-cover" alt="Wedding" />
              <img src={wedding} className="w-32 h-32 object-cover" alt="Wedding" />
              <img src={wedding} className="w-32 h-32 object-cover" alt="Wedding" />
              <img src={wedding} className="w-32 h-32 object-cover" alt="Wedding" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
