const app = "I don't do much.";

const token = 'e26ebb0f26582930c9d38ed53b7956278cf4fc11'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
