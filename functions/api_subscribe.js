export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors() });
  try {
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: cors() });
    const body = await request.json();
    const email = (body.email || '').trim();
    if (!email) return new Response('Missing email', { status: 400, headers: cors() });

    // Insert subscriber (unique constraint in DB will prevent duplicates)
    const insertRes = await fetch(`${env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/subscribers`, {
      method: 'POST',
      headers: {
        'apikey': env.SUPABASE_SERVICE_ROLE,
        'Authorization': 'Bearer ' + env.SUPABASE_SERVICE_ROLE,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({ email: email })
    });

    if (!insertRes.ok) {
      const text = await insertRes.text();
      // If conflict (duplicate), return 200 with message
      if (insertRes.status === 409) return new Response(JSON.stringify({ ok: true, message: 'Already subscribed' }), { status: 200, headers: Object.assign({ 'Content-Type': 'application/json' }, cors()) });
      return new Response(text, { status: insertRes.status, headers: cors() });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: Object.assign({ 'Content-Type': 'application/json' }, cors()) });
  } catch (err) {
    return new Response(String(err), { status: 500, headers: cors() });
  }
}

function cors(){
  return { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
}
