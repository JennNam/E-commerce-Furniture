const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');
const requireAdmin = require('../middleware/requireAdmin')



router.get('/verify-admin', requireAuth, requireAdmin, async (req, res) => {
    try {
        // 요청한 사용자가 관리자라면 isAdmin을 true로 응답
        res.status(200).json({ isAdmin: req.user.isAdmin });
    } catch (error) {
        res.status(500).json({ error: "Failed to verify admin" });
    }
});


module.exports = router;
