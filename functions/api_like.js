export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors() });
  try {
    if (request.method === 'POST') {
      const body = await request.json();
      const slug = body.slug;
      if (!slug) return new Response('Missing slug', { status: 400, headers: cors() });

      // Insert like
      const insertRes = await fetch(`${env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/likes`, {
        method: 'POST',
        headers: {
          'apikey': env.SUPABASE_SERVICE_ROLE,
          'Authorization': 'Bearer ' + env.SUPABASE_SERVICE_ROLE,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({ slug: slug })
      });

      if (!insertRes.ok) {
        const text = await insertRes.text();
        return new Response(JSON.stringify({ error: text }), { status: insertRes.status, headers: Object.assign({ 'Content-Type': 'application/json' }, cors()) });
      }

      // Fetch count
      const countRes = await fetch(`${env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/likes?slug=eq.${encodeURIComponent(slug)}&select=slug`, {
        method: 'GET',
        headers: {
          'apikey': env.SUPABASE_SERVICE_ROLE,
          'Authorization': 'Bearer ' + env.SUPABASE_SERVICE_ROLE
        }
      });
      const rows = await countRes.json();
      const cnt = Array.isArray(rows) ? rows.length : 0;
      return new Response(JSON.stringify({ likes: cnt }), { status: 200, headers: Object.assign({ 'Content-Type': 'application/json' }, cors()) });
    }

    if (request.method === 'GET') {
      const url = new URL(request.url);
      const slug = url.searchParams.get('slug');
      if (!slug) return new Response('Missing slug', { status: 400, headers: cors() });

      const countRes = await fetch(`${env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/likes?slug=eq.${encodeURIComponent(slug)}&select=slug`, {
        method: 'GET',
        headers: {
          'apikey': env.SUPABASE_SERVICE_ROLE,
          'Authorization': 'Bearer ' + env.SUPABASE_SERVICE_ROLE
        }
      });
      const rows = await countRes.json();
      const cnt = Array.isArray(rows) ? rows.length : 0;
      return new Response(JSON.stringify({ likes: cnt }), { status: 200, headers: Object.assign({ 'Content-Type': 'application/json' }, cors()) });
    }

    return new Response('Method not allowed', { status: 405, headers: cors() });
  } catch (err) {
    const text = (err && err.message) ? err.message : String(err);
    return new Response(JSON.stringify({ error: text }), { status: 500, headers: Object.assign({ 'Content-Type': 'application/json' }, cors()) });
  }
}

function cors(){
  return { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
}
