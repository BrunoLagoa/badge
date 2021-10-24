const user = {
  name: 'Bruno Castro',
  socialNetwork: {
    github: 'brunolagoa',
    youtube: 'channel/UCago66O-wvo5uCuwMtN4LmQ',
    facebook: 'bruno.castro.br',
    instagram: 'brunovcastro',
    twitter: 'BrunoCa75097209',
  },
};

function changeSocialNetwork() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://www.${social}.com/${user.socialNetwork[social]}`;
  }
}
changeSocialNetwork();

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${user.socialNetwork.github}`;

  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}
getGithubProfileInfos();
