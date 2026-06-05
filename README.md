# DevTrack

> Production-grade GitHub profile analytics and developer growth tracking platform built with Next.js 15, TypeScript, and PostgreSQL.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.17+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)

## Overview

DevTrack is a full-stack web application that provides comprehensive GitHub profile analytics, contribution tracking, and developer growth insights. Built with modern web technologies and following clean architecture principles, it demonstrates production-ready software engineering practices.

### Key Capabilities

- **GitHub Profile Analysis** - Real-time synchronization and detailed profile metrics
- **Contribution Tracking** - Visual contribution history with streak tracking
- **Repository Analytics** - Language distribution, stars, forks, and growth metrics
- **Developer Dashboard** - Comprehensive growth visualization and statistics
- **Achievement System** - Milestone-based achievements and recognition
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

## Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Strict type safety
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Data visualization

### Backend & Data
- **Node.js** - Runtime environment
- **Next.js Server Actions** - Secure server-side mutations
- **PostgreSQL** - Relational database
- **Prisma** - Type-safe ORM

### Development & Quality
- **Zod** - Runtime schema validation
- **Jest** - Testing framework
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **GitHub Actions** - CI/CD pipelines

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Local development
- **Vercel/Railway** - Deployment options

## Prerequisites

- **Node.js** 18.17.0 or higher
- **npm** or **yarn**
- **PostgreSQL** 14 or higher
- **GitHub Personal Access Token**

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/arupdas0825/devtrack.git
cd devtrack
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/devtrack"

# GitHub API
GITHUB_TOKEN="your_github_personal_access_token"
GITHUB_API_URL="https://api.github.com"

# Application
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

**Getting a GitHub Token:**
1. Visit https://github.com/settings/tokens
2. Click "Generate new token" (classic)
3. Select `public_repo` scope
4. Copy and paste into `.env.local`

### 4. Setup Database

```bash
npm run db:push
```

This command creates all necessary tables in your PostgreSQL database.

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quick Start with Docker

For a complete local environment with PostgreSQL:

```bash
docker-compose up -d
```

This starts:
- PostgreSQL database on port 5432
- Next.js application on port 3000

## Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # TypeScript type checking

# Testing
npm test                 # Run test suite
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report

# Database
npm run db:push          # Sync schema with database
npm run db:migrate       # Create new migration
npm run db:studio        # Open Prisma Studio GUI

# Code Generation
npm run db:generate      # Generate Prisma client
```

## Project Structure

```
devtrack/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── (dashboard)/         # Dashboard routes
│   │   ├── api/                 # API endpoints
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   │
│   ├── components/               # React components
│   │   ├── ui/                  # Base UI components (Button, Card, Input)
│   │   ├── shared/              # Shared components (Header, Footer, Spinner)
│   │   ├── github/              # GitHub-specific (ProfileCard, RepoCard)
│   │   └── dashboard/           # Dashboard components
│   │
│   ├── lib/
│   │   ├── api/                 # GitHub API client
│   │   ├── db/                  # Database client
│   │   ├── hooks/               # Custom React hooks
│   │   ├── schemas/             # Zod validation schemas
│   │   └── utils/               # Utility functions
│   │
│   ├── server/
│   │   ├── actions/             # Server Actions (data mutations)
│   │   ├── services/            # Business logic layer
│   │   └── middleware/          # Middleware functions
│   │
│   ├── types/                    # TypeScript type definitions
│   └── middleware.ts            # App middleware
│
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── migrations/              # Migration history
│
├── tests/
│   ├── unit/                    # Unit tests
│   ├── integration/             # Integration tests
│   └── setup.ts                 # Test configuration
│
├── .github/
│   └── workflows/               # GitHub Actions CI/CD
│
├── public/                       # Static assets
├── Configuration files          # TS, ESLint, Prettier, Jest, etc.
├── Dockerfile                   # Container configuration
├── docker-compose.yml           # Local development stack
├── README.md                    # This file
├── ARCHITECTURE.md              # System architecture documentation
└── DEPLOYMENT.md                # Deployment guide
```

## Architecture

DevTrack follows a **layered clean architecture** with clear separation of concerns:

### Layers

1. **Presentation Layer** - React components with Tailwind CSS
2. **Business Logic Layer** - Server Actions and Services
3. **Data Access Layer** - Prisma ORM and GitHub API client
4. **Database Layer** - PostgreSQL with Prisma migrations

### Design Principles

- **SOLID Principles** - Single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion
- **Type Safety** - 100% TypeScript with strict mode
- **Error Handling** - Comprehensive error handling with custom exceptions
- **Validation** - Zod schemas for runtime type safety
- **Security** - Input validation, security headers, SQL injection prevention

## Features

### GitHub Profile Analysis

Real-time GitHub profile synchronization with comprehensive metrics:
- Profile information (avatar, bio, location, company)
- Repository statistics (count, stars, forks)
- Follower/following counts
- Language distribution analysis

### Contribution Tracking

Visualize your GitHub contributions:
- Daily contribution data
- Contribution streaks
- Historical trends
- Activity patterns

### Repository Analytics

Deep dive into your repositories:
- Star count trends
- Fork tracking
- Open issues monitoring
- Language breakdown
- Repository metadata

### Achievement System

Milestone-based recognition:
- First repository achievement
- Star milestones (100, 1K, 10K)
- Follower achievements
- Contributor badges

### Dashboard

Personalized growth dashboard featuring:
- Key metrics overview
- Growth charts
- Achievement display
- Repository highlights

## API Reference

### Server Actions

#### `syncGitHubProfile(username: string)`

Synchronizes a GitHub user's profile and repositories.

```typescript
const result = await syncGitHubProfile('octocat');

if (result.success) {
  console.log('Profile synced:', result.data);
} else {
  console.error('Error:', result.message);
}
```

#### `getUserProfile(username: string)`

Retrieves a user's profile with analytics.

```typescript
const result = await getUserProfile('octocat');

if (result.success) {
  const { user, stats } = result.data;
}
```

### Database Models

**GitHubUser**
- Profile information
- Relationship to repositories and achievements

**Repository**
- Repository metadata
- Star, fork, issue counts
- Language information

**Achievement**
- Achievement type and metadata
- Unlock date tracking

**AnalyticsSnapshot**
- Time-series analytics data
- Growth metrics snapshots

See `prisma/schema.prisma` for complete schema.

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Test Structure

- **Unit Tests** - Utility functions, schemas, validation
- **Integration Tests** - API endpoints, database operations

## Deployment

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts to connect your GitHub repository. [Detailed guide](./DEPLOYMENT.md#option-1-vercel-recommended-for-nextjs)

### Option 2: Docker

```bash
docker build -t devtrack .
docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://..." \
  -e GITHUB_TOKEN="..." \
  devtrack
```

### Option 3: Self-Hosted

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on Railway, AWS, and VPS deployment.

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✓ |
| `GITHUB_TOKEN` | GitHub Personal Access Token | ✓ |
| `NODE_ENV` | Environment (development/production) | ✓ |
| `NEXT_PUBLIC_APP_URL` | Application URL | ✓ |
| `GITHUB_API_URL` | GitHub API base URL | ✗ |

### TypeScript Configuration

Strict mode enabled with:
- `noImplicitAny` - No implicit any types
- `strictNullChecks` - Null/undefined type safety
- `noUnusedLocals` - Prevent unused variables
- `noImplicitReturns` - Require explicit returns

## Performance

DevTrack is optimized for performance:

- **Code Splitting** - Route-based splitting with Next.js
- **Database Indexing** - Strategic indexes on frequently queried fields
- **Caching** - Server-side caching with `revalidatePath`
- **API Rate Limiting** - GitHub API rate limit handling
- **Bundle Optimization** - Tree-shaking and dead code elimination

## Security

Comprehensive security measures:

- **Input Validation** - Zod schemas validate all inputs
- **Type Safety** - TypeScript prevents type-related vulnerabilities
- **SQL Injection Prevention** - Prisma parameterized queries
- **XSS Protection** - React's built-in escaping + sanitization
- **Security Headers** - Configured in Next.js middleware
- **Environment Secrets** - Sensitive data in `.env` files
- **Rate Limiting** - GitHub API rate limit protection

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:
- Code follows project style (ESLint/Prettier)
- Tests pass (`npm test`)
- Types check (`npm run type-check`)
- Documentation is updated

## Troubleshooting

### Database Connection Error

```bash
# Check PostgreSQL is running
psql -U postgres -h localhost

# Verify DATABASE_URL format
postgresql://username:password@localhost:5432/dbname
```

### GitHub API Rate Limit

- Ensure `GITHUB_TOKEN` is set
- Check token has `public_repo` scope
- Wait for rate limit reset (1 hour)

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001

# Or kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

### Type Errors

```bash
# Regenerate Prisma client
npm run db:generate

# Check TypeScript
npm run type-check
```

## Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System design, data flow, and patterns
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment strategies
- **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)** - Community guidelines

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Prisma](https://www.prisma.io/) - Type-safe ORM
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [GitHub API](https://docs.github.com/en/rest) - GitHub REST API

## Support

For questions, issues, or suggestions:

1. **Issues** - [GitHub Issues](https://github.com/arupdas0825/devtrack/issues)
2. **Discussions** - [GitHub Discussions](https://github.com/arupdas0825/devtrack/discussions)
3. **Email** - Open an issue for contact information

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.

---

<div align="center">

**[Live Demo](https://devtrack.vercel.app)** • **[Repository](https://github.com/arupdas0825/devtrack)** • **[Report Issue](https://github.com/arupdas0825/devtrack/issues)**

Built with ❤️ by [Arup Das](https://github.com/arupdas0825)

</div>
