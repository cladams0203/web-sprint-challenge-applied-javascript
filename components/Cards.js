// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from "axios";

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    const articles = res.data.articles;
    for (let obj in articles) {
      articles[obj].forEach((item) => {
        Cards(item);
      });
    }
  })
  .catch((err) => console.log(err));

const cardContainer = document.querySelector(".cards-container");

function Cards(obj) {
  const container = document.createElement("div");
  const headline = document.createElement("div");
  const authorContainer = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const author = document.createElement("span");
  container.classList.add("card");
  headline.classList.add("headline");
  authorContainer.classList.add("author");
  imageContainer.classList.add("img-container");
  headline.textContent = `${obj.headline}`;
  image.src = `${obj.authorPhoto}`;
  author.textContent = `By ${obj.authorName}`;
  container.append(headline);
  container.append(authorContainer);
  authorContainer.append(imageContainer);
  imageContainer.append(image);
  authorContainer.append(author);
  cardContainer.append(container);
}
