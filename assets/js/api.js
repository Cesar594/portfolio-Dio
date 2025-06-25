
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Cesar594/Js-Developer-portfolio-Dio/refs/heads/main/portf%C3%B3lio%20atualizado%20Dio/js-developer-portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
