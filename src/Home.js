import Article from "./Article";

// This is the homepage of an application
const Home =() => {
    const articles = [{title: "title", body:"body"}, {title:"title2", body:"body2"}];
    return (
        <div>
        <h1>Example Website</h1>
        <Article articles={articles}/>
        </div>
    );
}

export default Home;