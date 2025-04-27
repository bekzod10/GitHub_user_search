
let url = `https://api.github.com/users`

async function GithubUsers() {
    const respone = await fetch(url)
    const data = await respone.json()
    console.log(data)
}

GithubUsers()












































