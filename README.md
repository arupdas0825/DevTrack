# DevTrack

> Production-grade GitHub profile analytics and developer growth tracking platform

A full-stack web application built with Next.js 15, TypeScript, and PostgreSQL to analyze GitHub profiles, track contributions, and celebrate developer achievements.

## 🚀 Features

- **GitHub Profile Analysis**: Comprehensive analysis of GitHub profiles with real-time sync
- **Contribution Tracking**: Visual contribution history and streak tracking
- **Repository Analytics**: Detailed insights into your repositories
- **Developer Growth Dashboard**: Beautiful dashboard showcasing your growth metrics
- **Achievement System**: Unlock achievements as you reach milestones
- **Responsive Design**: Works seamlessly on mobile and desktop

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js Server Actions, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Validation**: Zod
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn
- PostgreSQL 14+
- GitHub Personal Access Token

## 🔧 Installation

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/arupdas0825/devtrack.git
cd devtrack
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set up environment variables

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit \`.env.local\` and add your GitHub token:

\`\`\`env
DATABASE_URL="postgresql://user:password@localhost:5432/devtrack"
GITHUB_TOKEN="your_github_token_here"
\`\`\`

### 4. Set up database

\`\`\`bash
npm run db:push
\`\`\`

### 5. Run development server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🐳 Docker Setup

### With Docker Compose

\`\`\`bash
docker-compose up -d
\`\`\`

This will start both PostgreSQL and the Next.js application.

## 📝 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run lint:fix\` - Fix linting issues
- \`npm run format\` - Format code with Prettier
- \`npm run type-check\` - Run TypeScript type checking
- \`npm test\` - Run tests
- \`npm run test:watch\` - Run tests in watch mode
- \`npm run test:coverage\` - Generate coverage report
- \`npm run db:push\` - Push schema to database
- \`npm run db:migrate\` - Create migration
- \`npm run db:studio\` - Open Prisma Studio

## 📂 Project Structure

\`\`\`
src/
├── app/                 # Next.js app directory
├── components/          # Reusable React components
├── lib/
│   ├── api/            # API clients
│   ├── db/             # Database client
│   ├── hooks/          # Custom React hooks
│   ├── schemas/        # Zod validation schemas
│   └── utils/          # Utility functions
├── server/
│   ├── actions/        # Server actions
│   ├── services/       # Business logic
│   └── middleware/     # Middleware functions
├── types/              # TypeScript type definitions
└── middleware.ts       # App middleware
\`\`\`

## 🧪 Testing

Run the test suite:

\`\`\`bash
npm test
\`\`\`

Generate coverage report:

\`\`\`bash
npm run test:coverage
\`\`\`

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## 📊 Database Schema

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture documentation.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit changes (\`git commit -m 'Add amazing feature'\`)
4. Push to branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [Prisma](https://www.prisma.io/)
- GitHub API integration

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built by a software engineer applying for top European internships** ⭐
