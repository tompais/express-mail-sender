import { Router } from "express";
const router = Router();
import mailRequestValidator from "../validations/mail-request.js";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import * as mailService from "../services/mail.js";

router.post("/send", mailRequestValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
  } else {
    let body = req.body;
    mailService
      .send(body.receiver, body.subject, body.message)
      .catch((reason) => {
        console.error("Couldn't send mail. Reason: " + reason);
      });
      res.sendStatus(StatusCodes.NO_CONTENT);
    }
});

export default router;
