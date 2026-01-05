import { NextResponse } from 'next/server';
export async function POST(request: Request) { return NextResponse.json({ error: 'Instagram OAuth removed' }, { status: 410 }); }