import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ error: 'Instagram endpoints removed' }, { status: 410 });
} 
