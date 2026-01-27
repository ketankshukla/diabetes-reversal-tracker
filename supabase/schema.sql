-- Diabetes Reversal Tracker - Supabase Schema
-- Run this SQL in your Supabase SQL Editor to set up the database

-- Create the weekly_measurements table
CREATE TABLE weekly_measurements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  measurement_date DATE NOT NULL UNIQUE,  -- Always a Saturday
  weight_lbs DECIMAL(6,2) NOT NULL,       -- e.g., 210.00 (2 decimal places)
  waist_inches DECIMAL(5,2),              -- e.g., 45.00 (2 decimal places, optional)
  notes TEXT,                              -- Optional notes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster date queries
CREATE INDEX idx_measurements_date ON weekly_measurements(measurement_date DESC);

-- NOTE: Starting values are hardcoded in the app:
-- - Starting weight: 210.00 lbs
-- - Starting waist: 45.00 inches
-- - Journey start: January 24, 2026 (Saturday)
-- - First weigh-in: January 31, 2026 (Saturday) - end of Week 1
-- 
-- The database starts empty. Users enter their first weigh-in on Saturday, Jan 31, 2026.

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_weekly_measurements_updated_at
  BEFORE UPDATE ON weekly_measurements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE weekly_measurements ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (for now - no auth)
-- In production, you'd want to restrict this based on user authentication
CREATE POLICY "Allow all operations on weekly_measurements" ON weekly_measurements
  FOR ALL
  USING (true)
  WITH CHECK (true);
