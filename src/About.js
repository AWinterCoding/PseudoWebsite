import Article from "./Article";

// About page to store information about the buisiness
const About = () => {

    const article = [{title: "About Us", body: "Lorem ipsum"}]
    const missionStatement = "Mission Statement";
    return(<div>
        <h3>{missionStatement}</h3>
        <Article articles={article}/>
    </div>);
}
export default About;