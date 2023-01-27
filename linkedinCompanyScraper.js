const Lnkdn = require("linkedin-profile-company-scraper");

const lkdCookie =
  "AQEDARXlqNUBJwYvAAABfGFn0sUAAAF9OaSSYU0AIAnp50qJ6Z2WEZMRpDHEeXaMnki8OFKkulioF5JEDuqR4kxxMP3wa3RVdpBhrin1TKbdmsEb7ymDYrGvcAdVJiCLNAif0Zv8JFrJMoTgjW-4spJR";
const perfilProfissional = "https://www.linkedin.com/company/pipelinecapital/";

(async () => {
  const client = new Lnkdn(`${lkdCookie}`);
  const data = await client.fetch(`${perfilProfissional}`);
  console.log(data);
})();
