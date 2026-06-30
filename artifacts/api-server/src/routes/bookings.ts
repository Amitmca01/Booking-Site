import { Router } from "express";
import { db, bookingsTable, insertBookingSchema } from "@workspace/db";

const router = Router();

router.post("/bookings", async (req, res) => {
  const parsed = insertBookingSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid booking data", details: parsed.error.issues });
    return;
  }

  const booking = await db.insert(bookingsTable).values(parsed.data).returning();
  req.log.info({ bookingId: booking[0].id }, "New booking created");

  res.status(201).json({ success: true, booking: booking[0] });
});

router.get("/bookings", async (req, res) => {
  const bookings = await db.select().from(bookingsTable).orderBy(bookingsTable.createdAt);
  res.json(bookings);
});

export default router;
