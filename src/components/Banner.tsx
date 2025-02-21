import { motion } from 'framer-motion';


function Banner(){
return(
<div className="relative w-auto h-[300px] center mb-8 rounded-2xl overflow-hidden">


    <img 
      src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
      alt="Special Offer"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-12">
      <div className="text-white">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Promoção de Verão
        </motion.h2>
        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Mais de 50% de Desconto em Produtos Selecionados
        </motion.p>
        <motion.div
          className="inline-block bg-white text-dark-bg px-6 py-3 rounded-full font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Use o código: SUMMER50
        </motion.div>
      </div>
    </div>
  </div>
)

}export default Banner;