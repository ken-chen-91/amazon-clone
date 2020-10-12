import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-53109.cloudfunctions.net/api"    //THE API (cloud function ) URL
});

export default instance;

// http://localhost:5001/clone-53109/us-central1/api



// https://us-central1-clone-53109.cloudfunctions.net/api
