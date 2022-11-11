import {GetSaved} from "src/common/interfaces";

const getSaved: GetSaved = async function getSaved(username) {
  return this.getPage(`/${username}/saved/all-posts`, async (page) => {
    // page.on('response', response => {
    //     response.continue()
    // });

    const response = await page.waitForResponse(
      (response) => {
        console.log(response.url());
        return (
          response.url() ==
            "https://www.instagram.com/api/v1/feed/saved/posts/" &&
          response.status() == 200
        );
      },
      {
        timeout: 10000,
      }
    );

    let result = await response.json();

    // page.on("response", async (response) => {
    //   if (response.url().endsWith("")) {
    //     console.log(response.url());
    //     let result = await response.json();
    //     console.log(result);
    //   }
    // });

    // let result = await page.evaluate(async () => {
    //   console.log("Evaluating api call");
    //   const response = await window.fetch("https://www.instagram.com/api/v1/feed/saved/posts/");
    //   const json = await response.json();
    //   console.log(json);
    //   return [json];
    // });

    return result;

    // await page.waitFor(5000);

    // let saved: string[] = [];

    // const scrapedSaved = await scrapeSavedPosts();

    // // if (page.)

    // return saved;

    // async function scrapeSavedPosts() {
    //   return await page.evaluate(async () => {
    //     const {scraper} = window as any;

    //     return scraper
    //       .find({
    //         selector: "a[href^='/p/']",
    //       })
    //       .map((el) => el.getAttr("href"));
    //   });
    // }
  });
};

export {getSaved};
