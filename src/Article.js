// basic article that has a header and a body
const Article =(articletitle, articlebody) => {
    return (
        <section>
            <h2>{articletitle}</h2>
            <p>{articlebody}</p>
        </section>
    );
}

export default Article;