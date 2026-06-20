# Dikesh Gautam — Portfolio v2

A TypeScript + React + Vite multi-page portfolio with Supabase contact form.

**Live:** https://portfolio-dikesh098s-projects.vercel.app

## Tech Stack
- React 18 + TypeScript
- React Router v6 (multi-page)
- Framer Motion (page transitions)
- Supabase (contact form)
- Tailwind CSS + Custom CSS variables
- Vite

## Pages
- `/` — Home (hero, terminal, projects, stats)
- `/about` — About (bio, values, tools)
- `/skills` — Skills (proficiency bars, tech stack)
- `/experience` — Experience (timeline)
- `/education` — Education (degree, coursework)
- `/projects` — Projects (filterable grid, 8 projects)
- `/certifications` — Certifications (6 certs)
- `/contact` — Contact (Supabase form)

## Setup

```bash
npm install
cp .env.example .env   # fill in your Supabase keys
npm run dev
```

## Supabase Setup

Run this SQL in your Supabase project → SQL Editor:

```sql
create table messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text default 'General Inquiry',
  message text not null,
  created_at timestamptz default now()
);

alter table messages enable row level security;

create policy "Anyone can insert messages"
  on messages for insert to anon with check (true);
```

Then add to Vercel → Settings → Environment Variables:
```
VITE_SUPABASE_URL       = https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY  = your-anon-key
```

## Deploy to Vercel

```bash
git add .
git commit -m "feat: portfolio v2"
git push
```
Vercel auto-deploys. The `vercel.json` handles SPA routing for React Router.
