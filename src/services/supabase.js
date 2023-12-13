import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gjqflcikuoteevlkehpw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcWZsY2lrdW90ZWV2bGtlaHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzOTQzMDksImV4cCI6MjAxNzk3MDMwOX0.GBVbDPRJwd9UnCn_JoAfeHC6zdMuT1ZB6FPaT_rLkZ4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
