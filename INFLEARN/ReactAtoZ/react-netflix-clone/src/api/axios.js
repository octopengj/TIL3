import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3f68d7f029f7614177a91b8f02e17938",
    language: "ko-KR",
  },
});

export default instance;
