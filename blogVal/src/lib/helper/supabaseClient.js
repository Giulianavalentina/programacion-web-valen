// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://idkkywrjwrijiztttavr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlka2t5d3Jqd3Jpaml6dHR0YXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMTg2NDQsImV4cCI6MjA0MjY5NDY0NH0.5CW1YoiB9wxRaHOxuH_9OXiizdIMNMuiGoPr2S2b1LA";
export const supabase = createClient(supabaseUrl, supabaseKey);
