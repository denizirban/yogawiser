-- Run once in the Supabase SQL Editor for the Yogawiser project.
create extension if not exists pgcrypto;

create table if not exists public.ground_sites (
  id uuid primary key default gen_random_uuid(),
  submission_id text not null unique,
  created_at timestamptz not null default now(),
  consent boolean not null default false,
  consent_version text not null,
  source_version text not null,
  language text not null,
  location text not null,
  map_lat numeric(8,3),
  map_lng numeric(9,3),
  parcel_system text,
  land_reference_a text,
  land_reference_b text,
  climate_zone text not null,
  space_type text not null,
  area_m2 numeric not null,
  direct_sun text not null,
  water_access text not null,
  primary_goal text not null,
  soil_type text,
  soil_depth_cm numeric,
  irrigation_l_day numeric,
  slope text,
  existing_trees text,
  previous_crop text,
  plot_shape text,
  rain_capture text,
  organic_material text,
  sanitation text,
  candidate_count integer not null default 0,
  recommended_crop_ids jsonb not null default '[]'::jsonb,
  strategy_choices jsonb not null default '[]'::jsonb,
  input_coverage integer not null default 0,
  has_drawn_boundary boolean not null default false,
  constraint ground_sites_area_check check (area_m2 between 1 and 1000000),
  constraint ground_sites_location_check check (char_length(location) between 1 and 200),
  constraint ground_sites_consent_check check (consent is true)
);

alter table public.ground_sites enable row level security;

revoke all on table public.ground_sites from anon;
grant insert on table public.ground_sites to anon;

drop policy if exists "anonymous consented ground submissions" on public.ground_sites;
create policy "anonymous consented ground submissions"
on public.ground_sites
for insert
to anon
with check (consent is true);

-- No SELECT policy is created: public visitors cannot read submissions.
-- The project owner can view and export rows from Supabase Table Editor.
