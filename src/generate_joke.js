import axios from 'axios';

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await axios.get('https://icanhazdadjoke.com', config);
    document.getElementById('joke').innerHTML = res.data.joke;
  } catch (err) {
    console.log(err);
  }
}

export default generateJoke;
