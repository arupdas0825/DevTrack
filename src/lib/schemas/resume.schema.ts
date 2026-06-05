import { z } from "zod";

export const ResumeUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "File must be less than 5MB")
    .refine(
      (file) => ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type),
      "Only PDF and DOCX files are supported"
    ),
});

export const ResumeSkillSchema = z.object({
  name: z.string().min(1),
  level: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
  category: z.string().optional(),
});

export const ResumeProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  technologies: z.array(z.string()),
  dates: z.object({
    start: z.string(),
    end: z.string().optional(),
  }),
  url: z.string().url().optional(),
});

export const ResumeExperienceSchema = z.object({
  company: z.string().min(1),
  position: z.string().min(1),
  dates: z.object({
    start: z.string(),
    end: z.string().optional(),
  }),
  description: z.string(),
  technologies: z.array(z.string()).default([]),
});

export const MatchScoreResponseSchema = z.object({
  overallScore: z.number().int().min(0).max(100),
  skillsScore: z.number().int().min(0).max(100),
  projectsScore: z.number().int().min(0).max(100),
  experienceScore: z.number().int().min(0).max(100),
  activityScore: z.number().int().min(0).max(100),
  matchedSkills: z.array(z.string()),
  unmatchedSkillsFromResume: z.array(z.string()),
  unmatchedSkillsFromGitHub: z.array(z.string()),
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  concerns: z.array(z.string()),
  missingProofPoints: z.array(z.string()),
  improvements: z.array(z.string()),
  recommendations: z.array(z.string()),
});

export type ResumeUploadInput = z.infer<typeof ResumeUploadSchema>;
export type ResumeSkill = z.infer<typeof ResumeSkillSchema>;
export type ResumeProject = z.infer<typeof ResumeProjectSchema>;
export type ResumeExperience = z.infer<typeof ResumeExperienceSchema>;
export type MatchScoreResponse = z.infer<typeof MatchScoreResponseSchema>;
