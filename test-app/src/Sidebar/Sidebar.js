import './Sidebar.css';
import articals from '../data/articles.json';


function Sidebar() {
    return (
        <div className="Sidebar">
            <nav>
                <ul>{articals.map(item =>
                    <li>
                        <a href={item.href}>{ item.title}</a>
                    </li>
                )}
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar;