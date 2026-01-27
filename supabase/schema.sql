-- Diabetes Reversal Tracker - Supabase Schema
-- Run this SQL in your Supabase SQL Editor to set up the database

-- Create the weekly_measurements table
CREATE TABLE weekly_measurements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  measurement_date DATE NOT NULL UNIQUE,  -- Always a Saturday
  weight_lbs DECIMAL(5,1) NOT NULL,       -- e.g., 210.0
  waist_inches DECIMAL(4,1),              -- e.g., 38.5 (optional initially)
  notes TEXT,                              -- Optional notes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster date queries
CREATE INDEX idx_measurements_date ON weekly_measurements(measurement_date DESC);

-- Insert the starting measurement (January 24, 2026 - Saturday)
INSERT INTO weekly_measurements (measurement_date, weight_lbs, waist_inches, notes)
VALUES ('2026-01-24', 210.0, 40.0, 'Starting weight - Day 1 of journey');

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
