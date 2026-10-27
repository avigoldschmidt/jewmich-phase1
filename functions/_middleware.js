/**
 * Cloudflare Pages middleware: host-aware rewrite for `/` only.
 * JewMich.com → /home/students
 * ChabadAnnArbor.com → /home/community
 *
 * Pair with public/_routes.json so only `/` invokes Functions.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname !== '/' && url.pathname !== '') {
    return context.next();
  }

  const host = (context.request.headers.get('host') || '')
    .toLowerCase()
    .replace(/:\d+$/, '');

  const studentHosts = new Set(['jewmich.com', 'www.jewmich.com']);
  const communityHosts = new Set([
    'chabadannarbor.com',
    'www.chabadannarbor.com',
  ]);

  let target = '/home/students';
  if (communityHosts.has(host)) target = '/home/community';
  else if (studentHosts.has(host)) target = '/home/students';

  const rewriteUrl = new URL(target, url.origin);
  rewriteUrl.search = url.search;
  return context.env.ASSETS.fetch(rewriteUrl);
}
