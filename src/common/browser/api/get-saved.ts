import {GetSaved} from "src/common/interfaces";

const getSaved: GetSaved = async function getSaved(username) {
  return this.getPage(`/${username}/saved/all-posts`, async (page) => {
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
