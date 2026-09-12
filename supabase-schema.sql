create table if not exists exams (id text primary key, name text not null, description text not null);
create table if not exists subjects (id bigint generated always as identity primary key, exam_id text references exams(id), name text not null);
create table if not exists chapters (id bigint generated always as identity primary key, subject_id bigint references subjects(id), name text not null);
create table if not exists resources (
  id text primary key,
  title text not null,
  type text not null,
  exam_id text references exams(id),
  subject text,
  chapter text,
  description text not null,
  url text not null,
  source_name text not null,
  source_url text not null,
  official boolean default false,
  tags text[]
);
create table if not exists doubts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  exam text not null,
  subject text not null,
  upvotes int default 0,
  replies int default 0,
  created_at timestamptz default now()
);
