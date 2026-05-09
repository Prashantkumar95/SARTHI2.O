import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Booking from "@/models/booking.model";

// export async function POST(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   await connectDb();

//   const booking = await Booking.findById(params.id);
//   if (!booking)
//     return NextResponse.json({ message: "Not found" }, { status: 404 });

// booking.status = "arrived";
// booking.arrivedAt = new Date();

//   await booking.save();

//   return NextResponse.json({ success: true });
// }

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } // 1. Wrap in Promise
) {
  await connectDb();

  const { id } = await params; // 2. Await the params

  const booking = await Booking.findById(id); // 3. Use the awaited id
  if (!booking)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  booking.status = "arriving"; // (Assuming this is the logic for this route)
  // ... rest of your logic

  await booking.save();

  return NextResponse.json({ success: true });
}