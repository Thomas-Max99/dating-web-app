import express from 'express';
import cardController from './../controllers/cardController.js';
const router=express.Router();

router.route('/dating/card')
      .post(cardController.createCard)
      .get(cardController.getAllCard)


export default router;