import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, ShoppingBag, Sun } from "lucide-react";
import { useStore } from "../store/useStore";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode, cart, setIsCartOpen } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-dark-bg text-dark-text dark:text-white border-b border-gray-300 dark:border-dark-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-yellow-500 dark:text-white">
              Bear
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-border/50 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <motion.button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-border/50 transition-colors relative"
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-dark-primary dark:bg-white text-white dark:text-dark-bg text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
