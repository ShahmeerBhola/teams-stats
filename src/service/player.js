import axios from "axios";

function generateTeam(body) {
  return new Promise((resolve, reject) => {
    axios
      .post("/player/teamStats", body)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (err && err.response) {
          reject(err.response?.data);
        }
      });
  });
}

function opponentAnalysis(body) {
  return new Promise((resolve, reject) => {
    axios
      .post("/player/opponent", body)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (err && err.response) {
          reject(err.response?.data);
        }
      });
  });
}

export { generateTeam , opponentAnalysis };
