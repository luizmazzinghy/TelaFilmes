import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?api_key=90075193c6c32813471235f51da7e765&with",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDA3NTE5M2M2YzMyODEzNDcxMjM1ZjUxZGE3ZTc2NSIsInN1YiI6IjY0ZWNlMzhlNDU4MTk5MDBjNmY5OTgxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vWI6W-np2Kyw5kg-AtoNtmfTvaqaPOvfszflEb84mCQ",
  },
});

export default api;
