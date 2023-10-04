import Article from "./Article";

// This is the homepage of an application
const Home =() => {
    const articles = [{title: "Article1", body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
    , {title:"Article2", body:"Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!"}];
    return (
        <div>
        <Article articles={articles}/>
        </div>
    );
}

export default Home;