import { AutomaticWebsiteData } from "../entities/AutomaticWebsiteData.interface";

export interface AppState {
  automaticWebsiteData: AutomaticWebsiteData;
}

export const APP_INITIAL_STATE: AppState = {
  automaticWebsiteData: {
    websiteName: "Bleach",
    allPagesData: [
      {
        id: "1",
        name: "Ichigo",
        imageSrcs: ["https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/IchigoKurosakiBleach.jpg/220px-IchigoKurosakiBleach.jpg"],
        paragraphTexts: ["Ichigo Text"]
      },
      {
        id: "2",
        name: "Rukia",
        imageSrcs: ["https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/RukiaKuchikiKubo.jpg/220px-RukiaKuchikiKubo.jpg"],
        paragraphTexts: ["Rukia Text"]
      },
      {
        id: "3",
        name: "Uryu",
        imageSrcs: ["https://upload.wikimedia.org/wikipedia/en/4/49/UryuAnime.jpg"],
        paragraphTexts: ["Uryu Text"]
      },
      {
        id: "4",
        name: "Orihime",
        imageSrcs: ["https://upload.wikimedia.org/wikipedia/en/thumb/9/93/OrihimeAnimeEp139.jpg/230px-OrihimeAnimeEp139.jpg"],
        paragraphTexts: ["Orihime Text"]
      },
      {
        id: "5",
        name: "Chad",
        imageSrcs: ["https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Yasutora_sado.jpg/230px-Yasutora_sado.jpg"],
        paragraphTexts: ["Chad Text"]
      }
    ]
  }
};