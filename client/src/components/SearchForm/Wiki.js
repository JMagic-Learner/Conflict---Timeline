import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import "./search.css";


export default function Wiki() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [searchInfo, setSearchInfo] = useState({});


    const handleSearch = async e => {
        e.preventDefault();
        console.log(e.search)
        if (search === '') return;

        // try {
            const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

            const response = await fetch(endpoint);
            console.log(response);
            console.log(response.ok);
            if (!response.ok) {
                console.log('There is no response');
                throw Error(response.statusText);
            }

            const json = await response.json();
            // console.log(json);
            console.log("We have a response");
            setResults(json.query.search);
            setSearchInfo(json.query.searchInfo);

        // } catch (err) {
        //     console.error(err);
        // }
    }

    return (
        <div className="search-wiki">
            <header>
                {/* <Link className="btn btn-lg btn-light m-2" to="/search">
                    Search WIKI
                </Link> */}
                <h1>Wiki Search</h1>
                <form className="search-box" onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="What are you looking for?"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
                {(searchInfo) ? <p> Search Results : {searchInfo.totalhits}</p> : ''}
            </header>
            <div className="results">
                {results.map((result, i) => {
                    const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

                    return (
                        <div className="result" key={i}>
                            <h3>{result.title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                            <a href={url} target="_blank"
                                rel="noreferrer">Read More</a>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

