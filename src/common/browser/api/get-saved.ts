import {GetSaved} from "src/common/interfaces";

const getSaved: GetSaved = async function getSaved(username) {
  return this.getPage(`/${username}/saved/all-posts`, async (page) => {
    // let allPostsLinks = await page.$x(`//h3[text()='All Posts']`);

    // Wait for the saved posts collection to load.
    await page.waitFor(1000);
    if (allPostsLinks && allPostsLinks.length >= 1) {
      console.log("All Posts link found");
      await allPostsLinks[0].click();
    } else console.log("All Posts link not found");
    // if (!buttonOfSavedList) {
    //   const buttonOfSavedListSelector = await page.evaluate(() => {
    //     const {scraper} = window as any;
    //     const el = scraper.findOne({
    //       selector: "a",
    //       where: (el) => el.text().includes("following"),
    //     });

    //     if (!el) {
    //       return "";
    //     }

    //     return el
    //       .setscraperAttr("buttonOfSavedList", "buttonOfSavedList")
    //       .getSelectorByscraperAttr("buttonOfSavedList");
    //   });

    //   if (buttonOfSavedListSelector) {
    //     buttonOfSavedList = await page.$(buttonOfSavedListSelector);
    //   }
    // }

    // await buttonOfSavedList.click();
    await page.waitFor(1000);

    const saved = await page.evaluate(async () => {
      const {scraper} = window as any;

      return scraper
        .find({
          selector: "a[href^='/p/']",
        })
        .map((el) => el.getAttr("href"));
    });

    return saved;
  });
};

export {getSaved};
