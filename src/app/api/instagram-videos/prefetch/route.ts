import { NextResponse } from 'next/server';
export async function POST() { return NextResponse.json({ error: 'Instagram endpoints removed' }, { status: 410 }); }