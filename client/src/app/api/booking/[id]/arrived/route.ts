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
  { params }: { params: Promise<{ id: string }> } // 1. Change to Promise
) {
  await connectDb();

  // 2. Await the params to get the id
  const { id } = await params;

  const booking = await Booking.findById(id); // 3. Use the awaited id
  if (!booking) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  booking.status = "arrived";
  booking.arrivedAt = new Date();

  await booking.save();

  return NextResponse.json({ success: true });
}
