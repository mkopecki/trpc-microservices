import fetch from "node-fetch";

async function main() {
  const response = await fetch("http://localhost:4000/express/test", {
    method: "POST",
  });
  const body = await response.text();

  console.log(body);
}

main();
