// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Load Supabase URL and Key from environment variables
const SUPABASE_URL = "https://zeekfphrdktsykrbclyk.supabase.co"
const SUPABASE_K = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZWtmcGhyZGt0c3lrcmJjbHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MDc5NjcsImV4cCI6MjA1MDM4Mzk2N30.c9j7_jpP8nCdwWTPfqZuboTsUhHlPqhXZ1-AimsLX-c"


if (!SUPABASE_URL || !SUPABASE_K) {
  throw new Error("Supabase URL or API key is missing!");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_K);

export default supabase;
