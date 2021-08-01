import { checkSchema } from "express-validator";

export default checkSchema({
  receiver: {
    in: ["body"],
    isEmail: {
      bail: true,
      errorMessage: "The receiver param should be an email.",
    },
    exists: {
      options: {
        checkNull: true,
      },
    },
    notEmpty: {
      bail: true,
    },
    errorMessage: "The receiver mail is not valid.",
    toLowerCase: true,
  },
  subject: {
    in: ["body"],
    exists: {
      options: {
        checkNull: true,
      },
    },
    notEmpty: {
      bail: true,
    },
    isLength: {
      errorMessage: "The subject should have between 15 and 40 characters.",
      options: { min: 15, max: 40 },
    },
  },
  message: {
    in: ["body"],
    exists: {
      options: {
        checkNull: true,
      },
    },
    notEmpty: {
      bail: true,
      errorMessage: "The message should be present.",
    },
  },
});
