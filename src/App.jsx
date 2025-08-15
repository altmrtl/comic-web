import {useState, useEffect} from "react";
import Card from './components/Card';
import Search from './components/Search';
import {getComics} from "./tools/appwrite.js";

const App = () => {

    const [hasLiked, setHasLiked] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!searchTerm.trim()) return;
        (async () => {
            const data = await getComics(searchTerm);
            setResults(data.results || []);
        })();
    }, [searchTerm]);


    return (

        <main>
            <div className="patter"/>
            <div className="wrapper">
                <header>
                    <h1>
                        Find <span className="text-gradient">comics</span> you'll enjoy
                    </h1>
                </header>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>

            <h2 className="text-center mb-35 ">All top comics at the moment!</h2>
            <div className="bookshelf-bg ">

            </div>
        </main>

    );


}

export default App;