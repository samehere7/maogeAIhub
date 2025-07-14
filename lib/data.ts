import type { AiTool, UserPreferences, AllTrafficStats } from "./types"

export const INITIAL_TOOLS: AiTool[] = [
  {
    id: "remove-bg",
    name: "remove.bg",
    iconUrl: "/remove-bg-icon.svg",
    description: "AI-powered background removal tool that automatically removes backgrounds from images in seconds, perfect for e-commerce, marketing, and creative projects.",
    category: "Image Enhancement",
    screenshots: [
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
    ],
    markdownDoc: `
# remove.bg Usage Guide

## Main Features
- Automatic AI-powered background removal
- Supports people, products, animals, cars, and graphics
- High-quality edge detection and preservation
- Bulk processing capabilities
- API integration available
- Multiple output formats (PNG, JPG)

## Usage Steps
1. Visit remove.bg website
2. Upload your image or drag & drop
3. Wait for automatic AI processing (usually 5 seconds)
4. Download the result with transparent background
5. Use the image in your projects

## Use Cases
- **E-commerce**: Product photography with clean backgrounds
- **Marketing**: Creating promotional materials and ads
- **Social Media**: Profile pictures and content creation
- **Design**: Graphic design and photo editing workflows
- **Photography**: Portrait and product photo enhancement

## Pricing
- Free tier: Limited downloads per month
- Paid plans: Higher resolution and bulk processing
- API access: For developers and businesses
- Subscription options available

## Tips for Best Results
- Use high-contrast images for better results
- Ensure clear subject boundaries
- Good lighting improves accuracy
- Avoid complex backgrounds when possible
- Preview before downloading

## Notes
- Powered by advanced computer vision AI
- Supports various image formats
- Works best with clear, well-lit subjects
- Commercial use allowed with paid plans
    `,
    originalUrl: "https://www.remove.bg",
  },
  {
    id: "remini-ai",
    name: "Remini AI",
    iconUrl: "/remini-ai-icon.svg",
    description: "AI photo enhancer that transforms low-quality photos into stunning HD images, restoring old photos and improving image quality with advanced AI technology.",
    category: "Image Enhancement",
    screenshots: [
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
      "/placeholder.svg?width=600&height=400",
    ],
    markdownDoc: `
# Remini AI Usage Guide

## Main Features
- AI-powered photo enhancement and restoration
- Transform low-resolution images to HD quality
- Face enhancement and detail restoration
- Old photo colorization and repair
- Video enhancement capabilities
- Batch processing support

## Enhancement Types
- **Photo Enhancement**: Improve image quality and sharpness
- **Face Enhancement**: Enhance facial details and clarity
- **Old Photo Restoration**: Repair damaged or faded photos
- **Colorization**: Add color to black and white photos
- **Video Enhancement**: Improve video quality and resolution

## Usage Steps
1. Download Remini app or visit the website
2. Upload your low-quality or old photo
3. Select enhancement type (Auto, Face, or specific mode)
4. Wait for AI processing (typically 10-30 seconds)
5. Compare before/after results
6. Download or share the enhanced image

## Best Use Cases
- **Personal Photos**: Enhance family photos and memories
- **Professional**: Improve business headshots and portraits
- **Historical**: Restore old family photographs
- **Social Media**: Create high-quality content
- **Print**: Prepare images for large format printing

## Tips for Optimal Results
- Start with the highest quality original possible
- Ensure faces are clearly visible for face enhancement
- Use appropriate enhancement mode for your image type
- Multiple processing attempts may yield different results
- Save originals before enhancement

## Pricing & Access
- Free version: Limited daily enhancements
- Premium subscription: Unlimited processing
- Professional plans: Advanced features and batch processing
- Mobile app and web version available

## Notes
- Uses cutting-edge AI and machine learning
- Continuous improvements to AI models
- Privacy-focused with secure processing
- Available on iOS, Android, and web platforms
    `,
    originalUrl: "https://remini.ai",
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
