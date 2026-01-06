// Новости прямо в JS, JSON не нужен
const newsData = [
    {
        title: "AI Technology Breakthrough",
        date: "2026-01-07",
        content: "A new AI model has been released that can write code, articles, and even poetry."
    },
    {
        title: "SpaceX Launch Successful",
        date: "2026-01-05",
        content: "SpaceX successfully launched its Starship rocket into orbit, marking a new era in space exploration."
    },
    {
        title: "New Study on Climate Change",
        date: "2026-01-04",
        content: "Recent research highlights how rapidly ice sheets are melting and affecting global sea levels."
    }
];

const container = document.getElementById('news-container');
newsData.forEach(news => {
    const div = document.createElement('div');
    div.className = 'news-item';
    div.innerHTML = `
        <h3>${news.title}</h3>
        <small>${news.date}</small>
        <p>${news.content}</p>
    `;
    container.appendChild(div);
});
