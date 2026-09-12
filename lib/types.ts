export type ExamId = 'jee' | 'neet' | 'upsc';
export type ResourceType = 'notes' | 'formula' | 'lecture' | 'pyq' | 'practice';

export type Resource = {
  id: string;
  title: string;
  type: ResourceType;
  exam: ExamId;
  subject: string;
  chapter?: string;
  description: string;
  url: string;
  sourceName: string;
  sourceUrl: string;
  official?: boolean;
  tags: string[];
};

export type Doubt = {
  id: string;
  title: string;
  body: string;
  exam: ExamId;
  subject: string;
  upvotes: number;
  replies: number;
  createdAt: string;
};
