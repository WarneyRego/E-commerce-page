import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Tag } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Product } from '../types';
import street from './streetweare.png'
import street2 from './streetye.png'
import Banner from './Banner';



const categories = [
  { id: 'all', name: 'Todos os itens', icon: Tag },
  { id: 'men', name: 'Tênis', icon: Tag },
  { id: 'women', name: 'Jaquetas e Moletons', icon: Tag },
  { id: 'accessories', name: 'Acessórios', icon: Tag },
];

const products: Product[] = [
  {
    id: '1',
    name: 'New Balance 237',
    price: 346.55,
    description: 'É confeccionado em couro camurça com recortes em material têxtil',
    image: 'https://cdn.dooca.store/1290/products/237-linem-off-white-4_640x640+fill_ffffff.jpg?v=1712168303&webp=0',
    category: 'men',
    rating: 4.3,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['white', 'black', 'gray']
  },
  {
    id: '2',
    name: 'Nike Court Vision Mid Branco',
    price: 409.99,
    description: 'Substituindo o couro por materiais sintéticos ele é confeccionado com pelo menos 20% de materiais reciclados',
    image: 'https://cdn.dooca.store/1290/products/tenis-1_1600x1600+fill_ffffff.jpg?v=1681236150',
    category: 'men',
    rating: 4.8,
    sizes: ['S', 'M', 'L'],
    colors: ['black', 'brown']
  },
  {
    id: '3',
    name: 'Corteiz x Nike Air Max 95 "Gutta Green"',
    price: 399.99,
    description: 'Projetado em conjunto com a marca de streetwear com sede em Londres, o Corteiz x Nike Air Max 95 SP',
    image: 'https://acdn.mitiendanube.com/stores/002/944/067/products/design-sem-nome-6730f409e81e31e6bb17188064430060-1024-1024.webp',
    category: 'men',
    rating: 4.6,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['blue', 'red', 'white']
  },
  {
    id: '4',
    name: 'Moletom TheSaint x Tsubasa Crewneck Overhead Kick (Off White)',
    price: 159.99,
    description: 'A peça é confeccionada em tecido de alta qualidade, unindo estilo e durabilidade',
    image: 'https://s.hipnoise.com.br/product/2024/12/tsaint-55.jpg',
    category: 'women',
    rating: 4.7,
    sizes: ['ONE SIZE'],
    colors: ['black', 'gold']
  },
  {
    id: '5',
    name: 'Jaqueta TheSaint Jeans Estonada Oversized',
    price: 199.99,
    description: 'Apresenta caimento mais amplo, dando uma sensação de estar usando um número maior.',
    image: 'https://s.hipnoise.com.br/product/2024/05/tsaint-020.jpg',
    category: 'women',
    rating: 4.4,
    sizes: ['30', '32', '34', '36'],
    colors: ['blue', 'black']
  },
  {
    id: '6',
    name: 'Shoulder Bag - Indomável 1/1',
    price: 89.99,
    description: 'Shoulder Bag em material sintético dublado e forro em nylon 600 impermeável. ',
    image: 'https://thumb.braavo.me/alltribe/1000/2627913136.webp',
    category: 'accessories',
    rating: 4.4,
    sizes: ['30', '32', '34', '36'],
    colors: ['blue', 'black']
  },

];

const ProductGrid = () => {
  

  const { isDarkMode, addToCart, filters, searchQuery, setIsCartOpen, selectedCategory, setSelectedCategory } = useStore();

  const filteredProducts = products.filter(product => {
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (filters.category.length && !filters.category.includes(product.category)) {
      return false;
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    if (filters.rating && product.rating < filters.rating) {
      return false;
    }
    return true;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <>
       <div className="relative h-[300px] mb-8 rounded-2xl overflow-hidden">
        <img 
          src={isDarkMode ? street : street2} 
          alt="Special Offer"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
   

    
      <div className="mb-8 overflow-x-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {categories.map(({ id, name, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition-all font-semibold
                ${selectedCategory === id 
                  ? 'bg-yellow-500 text-black dark:bg-red-600 dark:text-white' 
                  : 'bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600'
                }`}
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} />
              <span>{name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-full flex flex-col
              bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            layout
          >

            <div className="relative w-full pt-[100%] overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>


            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white flex-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-black dark:text-white">{product.price} R$</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-black dark:text-white">{product.rating}</span>
                </div>
              </div>

      
              <motion.button
                className="mt-4 bg-yellow-500 text-black px-6 py-3 rounded-full flex items-center justify-center space-x-2 
                  hover:bg-yellow-600 dark:bg-dark-primary dark:text-white dark:hover:bg-dark-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart size={20} />
                <span>Adicionar ao carrinho</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;