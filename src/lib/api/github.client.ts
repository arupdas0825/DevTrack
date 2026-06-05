import axios, { AxiosInstance, AxiosError } from "axios";
import { GITHUB_API_BASE_URL } from "@/lib/utils/constants";
import { ApiException } from "@/types/api.types";
import {
  GitHubProfileResponseSchema,
  GitHubRepositoryResponseSchema,
} from "@/lib/schemas/github.schema";

class GitHubApiClient {
  private client: AxiosInstance;

  constructor(token?: string) {
    this.client = axios.create({
      baseURL: GITHUB_API_BASE_URL,
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(token && { Authorization: `token ${token}` }),
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => this.handleError(error)
    );
  }

  async getUser(username: string) {
    try {
      const response = await this.client.get(`/users/${username}`);
      return GitHubProfileResponseSchema.parse(response.data);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getUserRepositories(username: string, page = 1, perPage = 30) {
    try {
      const response = await this.client.get(`/users/${username}/repos`, {
        params: { page, per_page: perPage, sort: "updated", direction: "desc" },
      });
      return response.data.map((repo: unknown) => GitHubRepositoryResponseSchema.parse(repo));
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getUserContributions(username: string) {
    try {
      const response = await this.client.get(`/users/${username}/events/public`, {
        params: { per_page: 100 },
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 500;
      const data = error.response?.data as Record<string, unknown> | undefined;

      if (status === 404) {
        throw new ApiException("NOT_FOUND", 404, "GitHub user not found");
      }

      if (status === 403) {
        throw new ApiException(
          "RATE_LIMIT",
          403,
          "GitHub API rate limit exceeded. Please try again later."
        );
      }

      if (status === 422) {
        throw new ApiException("VALIDATION_ERROR", 422, "Invalid GitHub username");
      }

      throw new ApiException(
        "API_ERROR",
        status,
        data?.message ?? "Failed to fetch data from GitHub API"
      );
    }

    throw new ApiException("UNKNOWN_ERROR", 500, "An unknown error occurred");
  }
}

export const githubApiClient = new GitHubApiClient(process.env.GITHUB_TOKEN);
export default GitHubApiClient;
