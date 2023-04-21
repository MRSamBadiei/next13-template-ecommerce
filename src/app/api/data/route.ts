import { NextResponse } from "next/server";
import { arr } from "../../../../lib/data";

export async function GET(req: Request) {
  return NextResponse.json(arr);
}
