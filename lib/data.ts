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
  {
    id: "flux1-ai",
    name: "Flux.1 AI",
    iconUrl: "/flux1-ai-icon.svg",
    description: "Free online advanced Flux AI image generator with multiple model variants (pro, dev, schnell), supporting high-resolution image creation up to 2.0 megapixels.",
    category: "Image Generation",
    screenshots: [
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
    ],
    markdownDoc: `
# Flux.1 AI Usage Guide

## Main Features
- Advanced transformer-based flow models for image generation
- Multiple model variants: Flux.1 [pro], [dev], [schnell]
- High-resolution output up to 2.0 megapixels
- Support for various aspect ratios
- Excellent prompt adherence and diverse image styles
- Upcoming text-to-video capabilities

## Model Variants
- **Flux.1 [pro]**: Highest quality, best for professional use
- **Flux.1 [dev]**: Balanced performance and quality
- **Flux.1 [schnell]**: Fastest generation for quick iterations

## Usage Steps
1. Visit Flux.1 AI website and register for free credits
2. Choose your preferred model variant
3. Enter detailed text description of desired image
4. Select image dimensions and aspect ratio
5. Click generate and wait for high-quality results
6. Download your generated images

## Usage Tips
- Use detailed, specific prompts for better results
- Experiment with different model variants for various needs
- Specify artistic styles, lighting, and composition details
- Take advantage of the high-resolution output capabilities
- Try different aspect ratios for various use cases

## Pricing & Access
- Free tier available with registration credits
- Multiple access methods: Web interface, API, Replicate, fal.ai
- Open-weight versions available for non-commercial use
- Paid plans for enhanced features and commercial usage

## Notes
- Developed by BlackForestLabs with cutting-edge technology
- Excellent for both creative and professional image generation
- Follow platform terms of service for commercial usage
- Respect content policies and guidelines
    `,
    originalUrl: "https://flux1.ai",
  },
]

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  favorites: [],
  recentlyViewed: [],
  theme: "system",
}

export const DEFAULT_TRAFFIC_STATS: AllTrafficStats = {}
