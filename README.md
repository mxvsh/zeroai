<img src="public/zeroai-banner.png"/>

> [!NOTE]  
> This project is still under development. You can contribute by adding new tools, fixing bugs, or improving the existing code. Feel free to open an issue or a pull request. 😊

## Table of Contents

- [About](#about)
- [Available Tools](#available-tools)
- [Running Locally](#running-locally)
- [Adding a new tool](#adding-a-new-tool)
- [Help](#help)

## About

ZeroAI is a collection of AI tools (eg. Email Writer, MCQ generator, YouTube Summarizer, etc.) that helps you get your job done with AI in an interactive and easy way. It is a web application built using Next.js, Tailwind CSS, and AI SDK.

You can completely run this application on your local machine without any internet connection and use it for free. It supports Ollama and OpenAI API for generating content.

## Available Tools

I am planning to add more tools in the future. Here is the list of tools that are currently available (or planned to be available):

- [x] Email Writer
- [ ] Code Generator
- [ ] Grammar Checker
- [ ] Image Generator
- [ ] Text Summarizer
- [ ] MCQ Generator
- [ ] Question Answering
- [ ] YouTube Summarizer
- [ ] Text Translator

## Running Locally

First, clone the repository:

```bash
git clone git@github.com:mxvsh/zeroai.git
```

Then, install the dependencies:

```bash
bun install
```

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
PROVIDER=openai
OPENAI_API_KEY=
```

Finally, run the development server:

```bash
bun dev
```

## Adding a new tool

To add a new tool, create a new folder in the `tools` directory with `index.ts`, `page.tsx` and `action.ts`. You can refer to the existing tools for the structure.

## Help

If you have any questions or need help, feel free to open an issue or reach out to me on [Twitter](https://twitter.com/monawwarx) or [Telegram](https://t.me/monawwarx). 🙂
