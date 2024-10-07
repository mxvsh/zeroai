import { LucideIcon } from 'lucide-react';

import { EmailWriter } from './email-writer';
import { GrammarChecker } from './grammar-checker';
import { ImageGenerator } from './image-generator';
import { MCQ } from './mcq';
import { QnA } from './qna';
import { YouTubeSummary } from './youtube-summary';

export type Tool = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  page?: () => Promise<{ default: React.ComponentType }>;
};
export type ToolID =
  | 'email-writer'
  | 'grammar-check'
  | 'image-generator'
  | 'mcq'
  | 'qna'
  | 'youtube-summary';

export const toolsMap: Record<ToolID, Tool> = {
  'email-writer': EmailWriter,
  'grammar-check': GrammarChecker,
  'image-generator': ImageGenerator,
  mcq: MCQ,
  qna: QnA,
  'youtube-summary': YouTubeSummary,
};
