import { Router } from "express";

const router = Router();

//endpoints used by the admin

router.get("/", (req, res) => {
  res.json({ admin: "healthy" });
});

export default router;
