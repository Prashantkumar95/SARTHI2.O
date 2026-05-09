// import { NextResponse } from "next/server"
// import razorpay from "@/lib/razorpay"
// import connectDb from "@/lib/db"
// import Booking from "@/models/booking.model"



// export async function POST(req: Request) {

//   await connectDb()

//   const { bookingId } = await req.json()

//   const booking = await Booking.findById(bookingId)

//   if (!booking) {
//     return NextResponse.json({ error: "Booking not found" })
//   }

//   const order = await razorpay.orders.create({
//     amount: booking.fare * 100,
//     currency: "INR",
//     receipt: booking._id.toString(),
//   })

//   booking.status = "awaiting_payment"
//   await booking.save()

//   return NextResponse.json({
//     orderId: order.id,
//     amount: order.amount
//   })
// }

import { NextResponse } from "next/server";
import razorpay from "@/lib/razorpay";
import connectDb from "@/lib/db";
import Booking from "@/models/booking.model";

export async function POST(req: Request) {
  try {
    await connectDb();

    const body = await req.json();
    const { bookingId } = body;

    if (!bookingId) {
      return NextResponse.json(
        {
          success: false,
          error: "Booking ID is required",
        },
        { status: 400 }
      );
    }

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return NextResponse.json(
        {
          success: false,
          error: "Booking not found",
        },
        { status: 404 }
      );
    }

    const amount = Number(booking.fare) * 100;

    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: booking._id.toString(),
    });

    booking.status = "awaiting_payment";
    await booking.save();

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
    });

  } catch (error: any) {
    console.error("Payment Create Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}