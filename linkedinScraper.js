// import { LinkedInProfileScraper } from "linkedin-profile-scraper";
const { LinkedInProfileScraper } = require("linkedin-profile-scraper");

const lkdCookie =
  "AQEDARXlqNUBJwYvAAABfGFn0sUAAAF9OaSSYU0AIAnp50qJ6Z2WEZMRpDHEeXaMnki8OFKkulioF5JEDuqR4kxxMP3wa3RVdpBhrin1TKbdmsEb7ymDYrGvcAdVJiCLNAif0Zv8JFrJMoTgjW-4spJR";
const profile = "https://www.linkedin.com/in/nicolas-cesar-b42626130/";

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
