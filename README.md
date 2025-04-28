# Fitness GPT

A Next.js-based fitness application that leverages AI to provide personalized fitness guidance and workout plans.

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Authentication**: Clerk
- **Database**: Convex
- **AI Integration**: Google Generative AI
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN
- **Animation**: tw-animate-css
- **Voice AI**: Vapi AI

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- Git

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Google AI
GOOGLE_AI_API_KEY=your_google_ai_api_key

# Vapi AI
VAPI_API_KEY=your_vapi_api_key

# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/pradip2004/fitness_gpt.git
cd fitness_gpt
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env`
   - Fill in your API keys and secrets

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
fitness_gpt/
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # Reusable UI components
│   ├── constants/    # Constant values and configurations
│   ├── lib/          # Utility functions and helpers
│   └── providers/    # Context providers
├── public/           # Static assets
├── convex/          # Convex database schema and functions
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Features

- User authentication with Clerk
- AI-powered fitness recommendations
- Voice AI integration for hands-free interaction
- Real-time database with Convex
- Responsive design with Tailwind CSS
- Modern UI components with Radix UI

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
