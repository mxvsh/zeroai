import { MailIcon } from 'lucide-react';

import { Tool } from '..';

export const EmailWriter: Tool = {
  title: 'Email Writer',
  description: 'Create professional and personalized email templates.',
  icon: MailIcon,
  color: 'bg-green-100 text-green-500',
  page: () => import('./page'),
};
