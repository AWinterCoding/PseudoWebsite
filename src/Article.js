// basic article that has a header and a body
const Article =({articles}) => {
    return (
        <div className="ArticleList">
            {articles.map(article => (
                <section>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                </section>
            ))}
        </div>
    );
}

export default Article;