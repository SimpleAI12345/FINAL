/*
  # Create inquiries table

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `selected_service` (text, required)
      - `company_name` (text, required)
      - `problem_to_solve` (text, required)
      - `additional_info` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for authenticated users to insert their own data
    - Add policy for service role to read all data
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  selected_service text NOT NULL,
  company_name text NOT NULL,
  problem_to_solve text NOT NULL,
  additional_info text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert inquiries (for contact form submissions)
CREATE POLICY "Anyone can insert inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to read all inquiries (for admin access)
CREATE POLICY "Service role can read all inquiries"
  ON inquiries
  FOR SELECT
  TO service_role
  USING (true);