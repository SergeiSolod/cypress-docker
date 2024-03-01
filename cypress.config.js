const { defineConfig } = require("cypress");
const dotenv = require("dotenv").config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  env: {
    url_widget: dotenv.parsed.URL_WIDGET,
    name_sender: dotenv.parsed.NAME_SENDER,
    phone_sender: dotenv.parsed.PHONE_SENDER,
    email_sender: dotenv.parsed.EMAIL_SENDER,
    name_recipient: dotenv.parsed.NAME_RECIPIENT,
    phone_recipient: dotenv.parsed.PHONE_RECIPIENT,
    email_recipient: dotenv.parsed.EMAIL_RECIPIENT,
    message: dotenv.parsed.MESSAGE,
    bank_card_number: dotenv.parsed.BANK_CARD_NUMBER,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
