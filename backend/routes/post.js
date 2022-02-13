import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Esto esta trabajando!');
});

export default router;