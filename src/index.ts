import express from "express";
const app = express();
const port = 8080; // default port to listen
import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
// import { input } from "input"; // npm i input

const apiId = 22773759;
const apiHash = "7f5a30346e6efb973273f48d4a8b84da";
const stringSession = new StringSession(""); // fill this later with the value from session.save()
console.log("Loading interactive example...");
const client = new TelegramClient(stringSession, apiId, apiHash, {
  connectionRetries: 5,
});
(async () => {
  await client.connect();
  // we should only use this when we are not already authorized.
  // This function is very similar to `client.start`
  // The minor difference that start checks if already authorized and supports bots as well.
  if (!(await client.checkAuthorization())) {
    console.log("not login");
    
    // await client.start({
    //   phoneNumber: "0347779264",
    //   password: "",
    //   phoneCode: async () => await input.text("Code ?"),
    //   onError: (err) => console.log(err),
    // });
    // console.log("You should now be connected.");
    // console.log(client.session.save()); // Save this string to avoid logging in again
    // await client.sendMessage("me", { message: "Hello!" });
  }
})();
// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
