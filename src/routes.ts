import  express from "express";


const router = express.Router();

router.get("/", (req: any, res: any): any => {
	res.status(200).json({ message: "hello" });
});
export default router;
// module.exports = router;
