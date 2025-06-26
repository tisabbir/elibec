import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ message: "✅ MongoDB connected successfully" });
  } catch (err) {
    return NextResponse.json(
      { error: "❌ Failed to connect to MongoDB" },
      { status: 500 }
    );
  }
}
