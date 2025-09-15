'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setIsMounted(false), 1000); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <motion.p 
              className="mt-6 text-white text-lg font-medium text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
