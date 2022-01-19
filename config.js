// const Constants = require('expo-constants');
import Constants from "expo-constants";

const isProd = Constants.appOwnership !== "expo";

const config = {
  collection_page: "https://ftx.us/api/nft/collections_page?",
  nfts: "https://ftx.us/api/nft/nfts_filtered?",
};

export default config;
