'use client';

import MainLayout from '#/lib/components/layout';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import { Handshake, PartyPopper, Sparkle } from 'lucide-react';
import React, { useState } from 'react';
import Markdown from 'react-markdown';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { toast } from 'sonner';

import { EmailWriter } from '.';
import { generateEmail } from './handler';

const tones = [
  {
    label: 'Formal',
    icon: Handshake,
  },
  {
    label: 'Friendly',
    icon: Sparkle,
  },
  {
    label: 'Casual',
    icon: PartyPopper,
  },
];

function EmailWriterPage() {
  const [tone, setTone] = useState('');
  const [recipient, setRecipient] = useState('');
  const [content, setContent] = useState('');

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <MainLayout
      gradient="2"
      title={EmailWriter.title}
      description={EmailWriter.description}
      showBack
      footer={
        <div className="flex gap-1">
          <Button
            color="primary"
            isLoading={loading}
            onClick={async () => {
              setLoading(true);
              const response = await generateEmail(recipient, content, tone);
              setResponse(response);
              setModal(true);
              setLoading(false);
            }}
          >
            Generate
          </Button>
          <Button as={Link} href="/" variant="light">
            Go back
          </Button>
        </div>
      }
    >
      <Modal isOpen={modal} onOpenChange={setModal} size="4xl">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Response
              </ModalHeader>
              <ModalBody>
                <Markdown
                  components={{
                    strong: ({ node, ...props }) => (
                      <strong className="font-semibold" {...props} />
                    ),
                  }}
                >
                  {response}
                </Markdown>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => {
                    navigator.clipboard.writeText(response);
                    toast('Copied to clipboard');
                  }}
                >
                  Copy to clipboard
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {tones.map(({ label, icon: Icon }) => (
            <motion.div
              className={`flex items-center gap-2 p-4 w-full rounded-xl bg-white/40 shadow-sm border-2 ${
                tone === label ? 'border-black' : ''
              }`}
              key={label}
              onClick={() => setTone(label)}
              whileTap={{ scale: 0.97 }}
            >
              <Icon size={20} />
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
        <Select
          label="Who you want to write to?"
          variant="underlined"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        >
          {[
            'Boss',
            'Employee',
            'Friend',
            'Family',
            'Client',
            'Customer',
            'Other',
          ].map((recipient) => (
            <SelectItem key={recipient}>{recipient}</SelectItem>
          ))}
        </Select>
        <Textarea
          label="What do you want to say?"
          variant="underlined"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </MainLayout>
  );
}

export default EmailWriterPage;
