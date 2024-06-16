let url = "https://catfact.ninja/fact";
fetch(url)
  .then((res) => {
    console.log(res);
    console.log(res.json());
  })
  .catch((err) => {
    console.log(err);
  });
