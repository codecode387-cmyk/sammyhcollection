// supabase-config.js
const SUPABASE_URL = "https://xczpjiderpjraturbhkn.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjenBqaWRlcnBqcmF0dXJiaGtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5ODM4MTYsImV4cCI6MjEwODU1OTgxNn0.ZZ5GZav1-jlWCN3g49hSos4G4vmfFv7HEWAKFMILCSo";

// Loads Supabase JS SDK from CDN, exposes window.db
(async function initSupabase() {
  if (window.supabase) return;
  await new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  window.db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.dispatchEvent(new Event("supabase-ready"));
})();
