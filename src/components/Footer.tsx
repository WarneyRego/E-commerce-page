import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-bg border-t border-gray-300 dark:border-dark-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-dark-text dark:text-white">BEAR</h3>
            <p className="text-gray-700 dark:text-gray-400">
              
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-dark-text dark:text-white">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dark-primary dark:hover:text-gray-300">Sobre</a></li>
              <li><a href="#" className="hover:text-dark-primary dark:hover:text-gray-300">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-dark-primary dark:hover:text-gray-300">Envio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-dark-text dark:text-white">Contato</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@bear.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+55 (86) 98141-5670</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-dark-text dark:text-white">Acompanhe nossas redes sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 dark:hover:text-dark-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-yellow-500 dark:hover:text-dark-primary">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-500 dark:hover:text-dark-primary">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-dark-border text-center text-sm text-gray-700 dark:text-gray-400">
          <p>&copy; 2025 BEAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
