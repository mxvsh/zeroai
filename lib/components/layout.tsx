'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

import { useRouter } from 'next/navigation';

import Gradient from './gradient';

type Props = {
  children: React.ReactNode;
  gradient?: '1' | '2' | '3';
  title?: string;
  description?: string;
  showBack?: boolean;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
};
function MainLayout({
  children,
  title,
  description,
  showBack,
  actions,
  footer,
  gradient = '1',
}: Props) {
  const r = useRouter();
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center overflow-hidden">
      <Gradient variant={gradient} />
      <Card className="xl:w-[40rem] w-full bg-white/50 p-4 select-none">
        <CardHeader>
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
          <div className="flex-1" />
          {actions}
        </CardHeader>
        <CardBody className="overflow-auto h-[25rem] flex flex-col">
          {children}
        </CardBody>
        <CardFooter className="justify-between">{footer}</CardFooter>
      </Card>
    </div>
  );
}

export default MainLayout;
