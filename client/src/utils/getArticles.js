const getArticles = async (length) => {
    const promise = await fetch(`http://localhost:8080/api/article/all?length=${length}`);
    const articles = await promise.json();
    return articles;
}

export default getArticles;