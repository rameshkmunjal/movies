let urlDetails = {};
const baseUrl = "http://www.omdbapi.com";
const authToken = "499e294";

const termsArr = [
    "girl", "boy", "man", "woman", "king", "queen", "slave", "day", "night",
    "rain", "mountain", "river", "road", "moon", "sun", "earth", "jungle",
    "game", "play", "mad", "thief", "dog", "bitch", "match", "gun", "family"
]

urlDetails.baseUrl = baseUrl;
urlDetails.authToken = authToken;
urlDetails.randomTerm = termsArr[Math.floor(Math.random() * termsArr.length)];

export default urlDetails;