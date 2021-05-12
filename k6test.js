import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "12s", target: 1000 },
    { duration: "36s", target: 1000 },
    { duration: "12s", target: 0 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
};

export default function main() {
  let response1, response2;

  response1 = http.get("http://localhost:8080/reviews?product_id=1");
  response2 = http.get('http://localhost:8080/reviews/meta?product_id=1');

  // Automatically added sleep
  sleep(1);
}
