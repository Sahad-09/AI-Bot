# ChatGPT Clone

A React-based chat application that integrates with OpenAI's API to provide AI-powered conversations.

## Features

- Real-time chat interface with OpenAI
- Error handling and user feedback
- Input validation and loading states
- Responsive design

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your OpenAI API key to the `.env` file:
     ```
     VITE_OPENAI_API_KEY=your_openai_api_key_here
     ```
   - Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

4. Run the development server:
   ```bash
   npm run dev
   ```

## Security Notes

- Never commit your API keys to version control
- Use environment variables for sensitive configuration
- The `.env` file is already in `.gitignore` to prevent accidental commits

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
