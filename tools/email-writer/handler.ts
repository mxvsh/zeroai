'use server';

import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

const model = openai('gpt-4o-mini');

export async function generateEmail(
  writingTo: string,
  topic: string,
  tone: string,
) {
  const response = await generateText({
    model,
    prompt: `Write an email to ${writingTo} about ${topic}, in a ${tone} tone.`,
    system: `You are an AI that helps users write effective emails based on the given tone, recipient, and topic. Your task is to craft an email that:

      1.	Tone: Matches the requested tone (e.g., formal, friendly, urgent, etc.).
      2.	Recipient: Adapts to the relationship with the recipient (e.g., boss, colleague, friend).
      3.	Topic: Clearly addresses the provided topic, with relevant details and a clear action or conclusion.
      4.	Structure: Ensure the email includes:
        •	Subject Line: A concise, relevant subject.
        •	Greeting: Proper salutation for the tone and recipient.
        •	Body: Main message with clarity and focus.
        •	Closing: Appropriate sign-off for the tone and recipient.
    Maintain politeness and professionalism throughout, adjusting to the context.`,
  });
  return response.text;
}
