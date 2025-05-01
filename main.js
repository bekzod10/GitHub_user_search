const search = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-user-btn');
const container = document.querySelector('.dev-full__datas');


const url = `https://api.github.com/users`;

async function searchGithubUser(username) {
    try {
        const response = await fetch(`${url}/${username}`);
        if (!response.ok) {
            throw new Error('Foydalanuvchi topilmadi');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Ma\'lumot olib kelishda xatolik:', error);
    }
}

searchBtn.addEventListener('click', async function () {
    const username = search.value.trim();

    if (username === "") {
        alert('Foydalanuvchi nomini kiriting!!!');
    }

    const userData = await searchGithubUser(username);

    if (!userData) {
        alert('Foydalanuvchi topilmadi!!!');
    }

    container.innerHTML = `
        <div class="dev-full__datas">
            <img src="${userData.avatar_url}">
            <div class="dev-info">
                <h1 class="dev-name">${userData.name || userData.login}</h1>
                <a href="${userData.html_url}" class="dev-username">@${userData.login}</a>
                <p class="dev-bio">${userData.bio || ''}</p>
            </div>
            <p class="dev-joined-date">Joined ${new Date(userData.created_at).toDateString()}</p>
        </div>
    `;

});











