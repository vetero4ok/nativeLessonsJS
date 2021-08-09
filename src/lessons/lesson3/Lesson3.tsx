import React, {useState} from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<Array<any>>([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState<Array<any>>([]);

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(({data}) => {
                console.log(data);
                const {Response, Search, Error} = data;
                if (Response === 'True') {
                    //setSearchResult(JSON.stringify(Search));
                    setSearchResult(Search);

                } else
                    setSearchResult([Error]);
            })

    };
    // const searchFilm = async () => {
    //     try {
    //         const { data } = await API.searchFilmsByTitle(searchName);
    //         const { Response, Search, Error } = data;
    //         if (Response === 'True') {
    //             setSearchResult(JSON.stringify(Search));
    //         } else {
    //             setSearchResult(Error);
    //         }
    //     } catch (e) {
    //         console.log(`some error exist `, e);
    //     }
    // }
    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then(({data}) => {
                console.log(data);
                const {Search, Response, Error} = data;
                if (Response === 'True') {
                   // setSearchResultByType(JSON.stringify(Search))
                   setSearchResultByType(Search)
                } else setSearchResultByType(Error)
            })

    }


    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>

            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t="movie">Movie</button>
                <button onClick={searchByType} data-t="series">Series</button>
                <br/>
                <div>
                    {
                        searchResult.map((ser, index) => {
                            return (
                                <span key={index}>
                                <img src={ser?.Poster} alt={'poster'}/>
                                <h4>{ser?.Title}</h4>
                                <p>{ser?.Type}</p>
                                <p>{ser?.Year}</p>
                                <p>{ser?.imdbID}</p>
                                </span>);
                        })

                    }
                </div>
                <div>
                    {
                        searchResultByType.map((ser, index) => {
                            return (
                                <span key={index}>
                                <img src={ser?.Poster} alt={'poster'}/>
                                <h4>{ser?.Title}</h4>
                                <p>{ser?.Type}</p>
                                <p>{ser?.Year}</p>
                                <p>{ser?.imdbID}</p>
                                </span>);
                        })

                    }
                </div>
            </div>
        </div>
    );
}
export default Lesson3;