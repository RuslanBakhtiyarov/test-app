import './Main.css'
import articles from '../data/articles.json';




function Main() {
    return (
        <div className="Main">
            {articles.map(item =>
                <section><h2>{item.title}</h2>
                    <div>{item.bodi}</div>
                    </section>
                )}
        </div>
    );
}

export default Main;