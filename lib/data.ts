import type { AiTool, UserPreferences, AllTrafficStats } from "./types"

export const INITIAL_TOOLS: AiTool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    iconUrl: "/placeholder.svg?width=48&height=48",
    description: "Advanced AI language model for conversation and text generation.",
    category: "Language Model",
    screenshots: [
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
    ],
    markdownDoc: `
# ChatGPT Usage Guide

## Main Features
- Conversational AI
- Text generation (articles, code, summaries)
- Translation
- Answering questions

## Usage Steps
1. Go to the ChatGPT website.
2. Type your prompt in the input box.
3. Press Enter to get a response.

## Notes
- Be specific with your prompts for better results.
- Review generated content for accuracy.
    `,
    originalUrl: "https://chat.openai.com",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    iconUrl: "/placeholder.svg?width=48&height=48",
    description: "AI image generator that creates stunning visuals from text prompts.",
    category: "Image Generation",
    screenshots: ["/placeholder.svg?width=600&height=400", "/placeholder.svg?width=600&height=400"],
    markdownDoc: `
# Midjourney Usage Guide

## Main Features
- High-quality image generation from text
- Various artistic styles
- Image upscaling and variations

## Usage Steps
1. Join the Midjourney Discord server.
2. Use the \`/imagine\` command followed by your prompt.
3. Wait for the bot to generate images.
4. Select images to upscale or create variations.

## Notes
- Experiment with different keywords and styles.
- Check community guidelines for prompt restrictions.
    `,
    originalUrl: "https://www.midjourney.com",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    iconUrl: "/placeholder.svg?width=48&height=48",
    description: "AI pair programmer that helps you write code faster.",
    category: "Development",
    screenshots: ["/placeholder.svg?width=600&height=400", "/placeholder.svg?width=600&height=400"],
    markdownDoc: `
# GitHub Copilot Usage Guide

## Main Features
- Code suggestions and autocompletion
- Converts comments to code
- Supports multiple languages

## Usage Steps
1. Install the GitHub Copilot extension in your IDE.
2. Sign in with your GitHub account.
3. Start typing code or comments, and Copilot will provide suggestions.

## Notes
- Always review Copilot's suggestions for correctness and security.
- Useful for boilerplate code and learning new syntax.
    `,
    originalUrl: "https://copilot.github.com/",
  },
  // Add 2-3 more tools for a better initial display
  {
    id: "dall-e-3",
    name: "DALL·E 3",
    iconUrl: "/placeholder.svg?width=48&height=48",
    description: "AI system that can create realistic images and art from a description in natural language.",
    category: "Image Generation",
    screenshots: ["/placeholder.svg?width=600&height=400", "/placeholder.svg?width=600&height=400"],
    markdownDoc: `
# DALL·E 3 Usage Guide

## Main Features
- Highly detailed image generation
- Understands complex prompts
- Integrated with ChatGPT Plus

## Usage Steps
1. Access DALL·E 3 via ChatGPT Plus or Bing Image Creator.
2. Provide a detailed text prompt describing the image you want.
3. Refine prompts for desired results.

## Notes
- More descriptive prompts yield better images.
- Adheres to content policies.
    `,
    originalUrl: "https://openai.com/dall-e-3",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    iconUrl: "/placeholder.svg?width=48&height=48",
    description: "AI assistant integrated into Notion for writing, summarizing, and brainstorming.",
    category: "Productivity",
    screenshots: ["/placeholder.svg?width=600&height=400", "/placeholder.svg?width=600&height=400"],
    markdownDoc: `
# Notion AI Usage Guide

## Main Features
- Summarize existing text
- Draft articles, emails, and more
- Brainstorm ideas
- Translate content

## Usage Steps
1. Open a Notion page.
2. Type \`space\` on a new line or highlight text to activate AI features.
3. Choose an AI action from the menu.

## Notes
- Available as an add-on to Notion plans.
- Works within the Notion ecosystem.
    `,
    originalUrl: "https://www.notion.so/product/ai",
  },
]

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  favorites: [],
  recentlyViewed: [],
  theme: "system",
}

export const DEFAULT_TRAFFIC_STATS: AllTrafficStats = {}
