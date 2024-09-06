import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ztzbktqwbtrdflnxkspi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0emJrdHF3YnRyZGZsbnhrc3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMDc1MjUsImV4cCI6MjA0MDY4MzUyNX0.aHkpXIxYJ-c_HjVYVNLZ80xIS6nbfuaahVJCJn-b2kY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
