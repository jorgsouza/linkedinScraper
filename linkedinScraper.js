// import { LinkedInProfileScraper } from "linkedin-profile-scraper";
const { LinkedInProfileScraper } = require("linkedin-profile-scraper");

const lkdCookie =
  "<cookie>";
const profile = "https://www.linkedin.com/in/<perfil>/";

(async () => {
  const scraper = new LinkedInProfileScraper({
    sessionCookieValue: `${lkdCookie}`,
    keepAlive: false,
  });

  // Prepare the scraper
  // Loading it in memory
  await scraper.setup();

  const result = await scraper.run(`${profile}`);

  console.log(result);
})();
