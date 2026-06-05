export interface AnalyticsData {
  userId: string;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalFollowers: number;
  languageDistribution: Record<string, number>;
  repoGrowthRate: number;
  contributionStreak: number;
  averageCommitsPerDay: number;
}

export interface GrowthMetrics {
  period: "week" | "month" | "year" | "all";
  repos: number;
  stars: number;
  followers: number;
  contributions: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
}
