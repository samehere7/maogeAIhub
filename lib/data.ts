import type { AiTool, UserPreferences, AllTrafficStats } from "./types"

export const INITIAL_TOOLS: AiTool[] = [
  {
    id: "flux-kontext-ai",
    name: "Flux Kontext AI",
    iconUrl: "/flux-kontext-ai-icon.svg",
    description: "Powerful AI text-to-image tool that supports multiple styles of image generation, providing high-quality image creation services based on the Flux model.",
    category: "Image Generation",
    screenshots: [
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
    ],
    markdownDoc: `
# Flux Kontext AI Usage Guide

## Main Features
- High-quality image generation based on Flux model
- Support for multiple artistic styles and visual styles
- Fast text-to-image conversion
- Support for both English and Chinese prompts

## Usage Steps
1. Visit the Flux Kontext AI website
2. Enter your image description in the input box
3. Select appropriate style and parameter settings
4. Click the generate button and wait for image generation
5. Download or save the generated image

## Usage Tips
- Use detailed and specific descriptions for better results
- You can specify visual style, color, composition and other elements
- Support for multiple image sizes and aspect ratios
- Adjust generation parameters to get different effects

## Notes
- Please follow the platform's terms of use and content policy
- Generated images are for personal use only
- Pay attention to copyright and intellectual property issues
    `,
    originalUrl: "https://flux-kontext-ai.org",
  },
  {
    id: "ai-song-generator",
    name: "AI Song Generator",
    iconUrl: "/ai-song-generator-icon.svg",
    description: "Intelligent music creation tool that generates original songs through AI technology, supporting multiple music styles and personalized customization.",
    category: "Music Generation",
    screenshots: ["/placeholder.svg?width=600&height=400", "/placeholder.svg?width=600&height=400"],
    markdownDoc: `
# AI Song Generator Usage Guide

## Main Features
- AI-driven music creation and generation
- Support for multiple music styles and genres
- Customizable lyrics, melody, and rhythm
- High-quality audio output

## Usage Steps
1. Visit the AI Song Generator website
2. Choose your preferred music style
3. Enter lyrics or let AI generate them automatically
4. Set music parameters (tempo, key, etc.)
5. Click the generate button to start creation
6. Listen and download the generated music

## Feature Highlights
- Intelligent lyrics generation and optimization
- Diverse music style selection
- Professional-grade audio quality output
- Support for personalized music customization

## Usage Tips
- Clearly specify music style for better results
- Try different parameter combinations multiple times
- Recommend listening before downloading the full version
- Pay attention to music copyright and usage rights

## Notes
- Follow platform terms of service
- Respect music copyright and intellectual property
- Generated music is for personal use only
    `,
    originalUrl: "http://aisonggenerator.cc",
  },
]

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  favorites: [],
  recentlyViewed: [],
  theme: "system",
}

export const DEFAULT_TRAFFIC_STATS: AllTrafficStats = {}
