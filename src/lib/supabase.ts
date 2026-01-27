import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getWeightEntries() {
  const { data, error } = await supabase
    .from('weekly_measurements')
    .select('*')
    .order('measurement_date', { ascending: true });

  if (error) {
    console.error('Error fetching weight entries:', error);
    return [];
  }

  return data || [];
}

export async function getLatestWeightEntry() {
  const { data, error } = await supabase
    .from('weekly_measurements')
    .select('*')
    .order('measurement_date', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('Error fetching latest weight entry:', error);
    return null;
  }

  return data;
}

export async function upsertWeightEntry(entry: {
  measurement_date: string;
  weight_lbs: number;
  waist_inches?: number | null;
  notes?: string | null;
}) {
  const { data, error } = await supabase
    .from('weekly_measurements')
    .upsert(entry, { onConflict: 'measurement_date' })
    .select()
    .single();

  if (error) {
    console.error('Error upserting weight entry:', error);
    throw error;
  }

  return data;
}

export async function getWeightEntryByDate(date: string) {
  const { data, error } = await supabase
    .from('weekly_measurements')
    .select('*')
    .eq('measurement_date', date)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching weight entry by date:', error);
    return null;
  }

  return data;
}
