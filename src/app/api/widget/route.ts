import { NextResponse } from 'next/server';
import { readWidget, writeWidget } from '@/lib/widgetConfig';

export async function GET() {
  try {
    const data = readWidget();
    return NextResponse.json({ embed: data?.embed || '' });
  } catch (error: any) {
    return NextResponse.json({ embed: '' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const embed = String(body.embed || '');
    writeWidget(embed);
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message }, { status: 500 });
  }
}