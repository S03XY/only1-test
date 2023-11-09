import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  return new Response(JSON.stringify({ data: "ok" }));
};

export const POST = async (request: NextRequest) => {};
