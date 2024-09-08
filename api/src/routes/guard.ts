import { Router } from "express";

const router = Router();

//this is for the /guard route

router.get("/", (req, res) => {
  res.json({ guard: "health" });
});

export default router;
