import "@testing-library/jest-dom";

process.env.GITHUB_TOKEN = "test_token";
process.env.DATABASE_URL = "postgresql://test:test@localhost:5432/devtrack_test";
process.env.NEXT_PUBLIC_APP_URL = "http://localhost:3000";

global.fetch = jest.fn();
