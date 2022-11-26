import fetch from "node-fetch";

async function main() {
  // send request to service-1 test endpoint
  console.log("sending request to service-1 test endpoint");
  const response = await fetch("http://localhost:4000/express/test", {
    method: "POST",
  });
  const body = await response.text();

  console.log(`received response from service-1 test endpoint \n ${body}`);
}

main();
