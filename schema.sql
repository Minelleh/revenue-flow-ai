create table newsletter_contacts (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  first_name text,
  source text default 'landing-page',
  tags text[] default array[]::text[],
  subscribed boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create index newsletter_contacts_email_idx on newsletter_contacts(email);
create index newsletter_contacts_source_idx on newsletter_contacts(source);

-- RLS
alter table newsletter_contacts enable row level security;

-- No public read (visitors don't see other visitors)
-- No public write (only API route writes)
-- Service role bypasses RLS, used by the API route
create policy "service role only"
  on newsletter_contacts
  for all
  using (false);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger newsletter_contacts_updated_at
  before update on newsletter_contacts
  for each row execute function update_updated_at();
