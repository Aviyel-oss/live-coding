const SlackBots = require("slackbots");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const movieBot = new SlackBots({
  token: `${process.env.BOT_TOKEN_AUTHENTICATION}`,
  name: "moviebot",
});

// start hanlder
movieBot.on("start", () => {
  const params = {
    icon_emoji: ":film_frames:",
  };
  movieBot.postMessageToChannel("bot-stuffs", "hello there", params);
});

// error handler
movieBot.on("error", (err) => {
  console.error(err);
});

// Message
movieBot.on("message", (data) => {
  if (data.type !== "message") {
    return;
  }
  handleMessages(data.text);
});

// response handler
function handleMessages(messages) {
  if (messages.includes(" gimme movie")) {
    giveMeMovie();
  } else if (messages.includes(" gimme product")) {
    giveMeProduct();
  }
}

function giveMeMovie() {
  axios
    .get(
      "https://raw.githubusercontent.com/pramit-marattha/moviedata/main/movies.json"
    )
    .then((res) => {
      const movies = res.data;
      const random = Math.floor(Math.random() * movies.length);
      const movieTitle = movies[random].title;
      const movieDescription = movies[random].overview;
      const poster = movies[random].poster;

      const params = {
        icon_emoji: ":film_projector:",
      };
      movieBot.postMessageToChannel(
        "bot-stuffs",
        `${movieTitle} - ${movieDescription} - ${poster}`,
        params
      );
    });
}

function giveMeProduct() {
  axios.get("https://fakestoreapi.com/products").then((res) => {
    const products = res.data;
    const random = Math.floor(Math.random() * products.length);
    const productTitle = products[random].title;
    const productDescription = products[random].description;
    const productImage = products[random].image;

    const params = {
      icon_emoji: ":tophat:",
    };
    movieBot.postMessageToChannel(
      "bot-stuffs",
      `${productTitle} - ${productDescription} - ${productImage}`,
      params
    );
  });
}
