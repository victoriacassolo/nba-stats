import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, city } = body;

  const team = await prisma.team.create({
    data: {
      name,
      city,
    },
  });

  return NextResponse.json(team);
}
