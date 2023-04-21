import { NextResponse } from "next/server";
import { arr } from "../../../../../lib/data";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json(arr.find((e) => e.id.toString() === params.id));
}
