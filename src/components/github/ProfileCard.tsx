"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatCompactNumber } from "@/lib/utils/formatting";

interface ProfileCardProps {
  user: {
    username: string;
    avatarUrl: string;
    bio?: string | null;
    location?: string | null;
    profileUrl: string;
    publicRepos: number;
    followers: number;
  };
  totalStars: number;
  totalForks: number;
  onSync?: () => void;
  isSyncing?: boolean;
}

export function ProfileCard({
  user,
  totalStars,
  totalForks,
  onSync,
  isSyncing = false,
}: ProfileCardProps) {
  return (
    <Card variant="elevated" className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <img
            src={user.avatarUrl}
            alt={user.username}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user.username}</h2>
            {user.bio && <p className="text-sm text-gray-600">{user.bio}</p>}
            {user.location && <p className="text-sm text-gray-600">📍 {user.location}</p>}
          </div>
        </div>
        {onSync && (
          <Button size="sm" onClick={onSync} isLoading={isSyncing}>
            Sync Profile
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-600">Repositories</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatCompactNumber(user.publicRepos)}
          </p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-600">Stars</p>
          <p className="text-lg font-semibold text-gray-900">{formatCompactNumber(totalStars)}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-600">Forks</p>
          <p className="text-lg font-semibold text-gray-900">{formatCompactNumber(totalForks)}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-600">Followers</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatCompactNumber(user.followers)}
          </p>
        </div>
      </div>

      <a
        href={user.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-accent-600 hover:text-accent-700 text-sm font-medium"
      >
        View on GitHub →
      </a>
    </Card>
  );
}
