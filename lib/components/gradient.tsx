'use client';

import React from 'react';

import { motion } from 'framer-motion';

function Gradient({ variant = '1' }: { variant?: '1' | '2' | '3' }) {
  if (variant === '1')
    return (
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute w-[30rem] h-[30rem] -mt-20 -mr-[10rem] blur-2xl bg-gradient-to-t from-red-400 to-purple-600 rounded-full"
      />
    );
  if (variant === '2')
    return (
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute w-[30rem] h-[30rem] -mt-20 -ml-[30rem] blur-2xl bg-gradient-to-t from-purple-400 to-orange-200 rounded-full"
      />
    );
  if (variant === '3')
    return (
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute w-[30rem] h-[30rem] -mt-10 -ml-[15rem] blur-2xl bg-gradient-to-t from-green-400 to-blue-600 rounded-full"
      />
    );
}

export default Gradient;
