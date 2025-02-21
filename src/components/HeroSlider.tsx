import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../store/useStore";
import carrousel1 from "./carrousel.svg";
import carrousel2_mobile from "./stret1.svg";
import carrousel2 from "./carrousela.svg";
import red_sneaker_pc from "./tenis-vermelho-pc.png";
import mobile_carrousel1 from "./stret-red.svg";
import tenis_red_mobile from './tenis-red-mobile.svg'
import tenis_amarelo_pc from './Tenis-amarelo-pcV1.png'
import yellow_sneaker_mobile from './tenis_amarelo_mobileV2.png'


const slides = [
  {
    id: 1,
    title: "Referência em Streetwear",
    subtitle: "Onde a essência vale mais que a aparência!",
    image: carrousel1,
    image_mobile: mobile_carrousel1,
    image2: carrousel2,
    image_mobile2: carrousel2_mobile,
  },
  {
    id: 2,
    title: `Frete Grátis para todo Brasil`,
    subtitle: "Autenticidade não se compra, se veste!",
    image: red_sneaker_pc,
    image_mobile: tenis_red_mobile,
    image2:tenis_amarelo_pc,
    image_mobile2:yellow_sneaker_mobile
  
  },
 
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isDarkMode } = useStore();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const getSlideImage = (slide) => {
    if (isMobile) {
      return isDarkMode ? slide.image_mobile || slide.image : slide.image_mobile2 || slide.image;
    }
    return isDarkMode ? slide.image : slide.image2 || slide.image;
  };

  return (
    <div className="relative h-[600px] overflow-hidden rounded-2xl mb-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
          <img
            src={getSlideImage(slides[currentSlide])}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center justify-start p-12">
            <div className="max-w-xl text-white">
              <motion.h2
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
