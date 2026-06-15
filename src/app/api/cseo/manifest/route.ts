import { NextResponse } from 'next/server';
import siteMeta from '../../../../../config/site-meta.json'

export async function GET(request: Request) {
  // TODO: Protect this endpoint with a shared secret token in production
  if (request.headers.get('x-cseo-token') !== process.env.CSEO_SECRET_TOKEN) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  return NextResponse.json({
    framework: 'Next.js 16+ App Router',
    currentConfig: siteMeta,
    // Dynamically list all active hardcoded or programmatic paths
    registeredRoutes: Object.keys(siteMeta.routes)
  });
}