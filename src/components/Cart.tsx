import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, CreditCard, ArrowLeft } from "lucide-react";
import { useStore } from "../store/useStore";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handlePayment = () => {
    alert("Pagamento realizado com sucesso!");
    cart.forEach((item) => removeFromCart(item.id));
    setIsCheckingOut(false);
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isCheckingOut && setIsCartOpen(false)}
          />
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-dark-bg text-dark-text dark:text-white z-50 shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-dark-border">
                {isCheckingOut ? (
                  <button
                    onClick={() => setIsCheckingOut(false)}
                    className="flex items-center space-x-2 hover:text-dark-primary dark:hover:text-gray-300 transition-colors"
                  >
                    <ArrowLeft size={20} />
                    <span>Voltar ao Carrinho</span>
                  </button>
                ) : (
                  <h2 className="text-xl font-semibold">Carrinho</h2>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-300 dark:hover:bg-dark-border/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {isCheckingOut ? (
                <motion.div
                  className="flex-1 p-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Checkout</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Número do Cartão</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-dark-border/10 border border-gray-300 dark:border-dark-border focus:outline-none focus:border-dark-primary"
                        placeholder="4242 4242 4242 4242"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Data de Validade</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-dark-border/10 border border-gray-300 dark:border-dark-border focus:outline-none focus:border-dark-primary"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-dark-border/10 border border-gray-300 dark:border-dark-border focus:outline-none focus:border-dark-primary"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <motion.button
                      onClick={handlePayment}
                      className="w-full btn-primary flex items-center justify-center space-x-2 mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <CreditCard size={20} />
                      <span>Pagar R${total.toFixed(2)}</span>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <AnimatePresence>
                      {cart.map((item) => (
                        <motion.div
                          key={item.id}
                          className="flex items-center space-x-4 bg-gray-200 dark:bg-dark-border/10 p-4 rounded-lg"
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.price} R$
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <motion.button
                                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                className="p-1 hover:bg-gray-300 dark:hover:bg-dark-border/10 rounded"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Minus size={16} />
                              </motion.button>
                              <span>{item.quantity}</span>
                              <motion.button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-300 dark:hover:bg-dark-border/10 rounded"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Plus size={16} />
                              </motion.button>
                            </div>
                          </div>
                          <motion.button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 hover:bg-gray-300 dark:hover:bg-dark-border/10 rounded-full transition-colors"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <X size={20} />
                          </motion.button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="p-4 border-t border-gray-300 dark:border-dark-border">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold">{total.toFixed(2)} R$</span>
                    </div>
                    <motion.button
                      onClick={handleCheckout}
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                      disabled={cart.length === 0}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingBag size={20} />
                      <span>Finalizar compra</span>
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
