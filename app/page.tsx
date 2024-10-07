'use client';

import MainLayout from '#/lib/components/layout';
import { toolsMap } from '#/tools';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import { ArrowRight, Search, Settings2 } from 'lucide-react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
};

const tools = Object.entries(toolsMap);

function Page() {
  const r = useRouter();

  return (
    <MainLayout
      title="ZeroAI"
      description="Collection of powerful AI tools designed to help you save time."
      actions={
        <div className="flex gap-2">
          <Button isIconOnly variant="light">
            <Search />
          </Button>
          <Button isIconOnly variant="light">
            <Settings2 />
          </Button>
        </div>
      }
      footer={
        <>
          <p className="text-sm text-gray-500">
            Got a tool idea?{' '}
            <Link
              target="_blank"
              href="https://github.com/mxvsh/zeroai/issues/new"
              className="text-blue-500 hover:opacity-70 cursor-pointer"
            >
              Create an issue
            </Link>
          </p>
          <p className="text-sm text-neutral-400 text-center">v1.0.0</p>
        </>
      }
    >
      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {tools.map(([id, tool]) => (
          <motion.div
            className="flex items-center gap-4 cursor-pointer"
            variants={item}
            whileTap={{ scale: 0.99 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.1 }}
            onClick={() => {
              r.push(`/tools/${id}`);
            }}
          >
            <div className={`${tool.color} p-2 rounded-xl`}>
              <tool.icon className={`w-8 h-8`} />
            </div>
            <div>
              <h2 className="font-medium">{tool.title}</h2>
              <p className="text-sm text-neutral-500">{tool.description}</p>
            </div>
            <div className="flex-1" />
            <div>
              <ArrowRight size={20} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </MainLayout>
  );
}

export default Page;
