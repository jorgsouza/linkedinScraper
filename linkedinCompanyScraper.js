const Lnkdn = require("linkedin-profile-company-scraper");

const lkdCookie =
  "<Cookie>";
const perfilProfissional = "https://www.linkedin.com/company/pipelinecapital/";

(async () => {
  const client = new Lnkdn(`${lkdCookie}`);
  const data = await client.fetch(`${perfilProfissional}`);
  console.log(data);
})();
