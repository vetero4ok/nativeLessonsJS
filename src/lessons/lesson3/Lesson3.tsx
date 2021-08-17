import React, {useState, MouseEvent} from 'react';
import API from './API';
import './lesson_3';
import './les3.css';
import {PosterComponents} from './PosterComponents';


const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<Array<any>>([]);
    // const [searchNameByType, setSearchNameByType] = useState('');
    //const [searchResultByType, setSearchResultByType] = useState<Array<any>>([]);
    const [year, setYear] = useState<string>('')
    const [error, setError] = useState<string>('Start to search files!')
    const [totalResults, setTotalResults] = useState<string>('')

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(({data}) => {
                //console.log(data);
                const {Response, Search, Error, totalResults} = data;
                setTotalResults(totalResults)
                if (Response === 'True') {
                    setSearchResult(Search);
                } else {
                    setError(Error)
                }
            })
    };

    // const searchFilm = async () => {
    //     try {
    //         const {data} = await API.searchFilmsByTitle(searchName);
    //         const {Response, Search, Error} = data;
    //         if (Response === 'True') {
    //             // setSearchResult(JSON.stringify(Search));
    //             setSearchResult(Search);
    //             console.log(data)
    //         } else {
    //             setSearchResult([Error]);
    //             console.log(data,'error')
    //         }
    //     } catch (e) {
    //         console.log(`some error exist `, e);
    //     }
    // }
    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchName, type)
            .then(({data}) => {
                console.log(data);
                const {Response, Search, Error, totalResults} = data;
                setTotalResults(totalResults)
                if (Response === 'True') {
                    setSearchResult(Search)
                } else setError(Error)
            })
    }
    const searchByYear = () => {
        API.searchFilmByYear(searchName, year)
            .then(({data}) => {
                console.log(data);
                const {Response, Search, Error, totalResults} = data;
                setTotalResults(totalResults)
                if (Response === 'True') {
                    setSearchResult(Search);
                } else {
                    setSearchResult([]);
                    setError(Error)
                }
            })
    }
    const onPageChanged = (page: number) => {
        let pageToString = String(page)
        API.searchFilmsPage(searchName, pageToString)
            .then(({data}) => {
                const {Response, Search, Error, totalResults} = data;
                setTotalResults(totalResults)
                if (Response === 'True') {
                    setSearchResult(Search);
                } else {
                    setError(Error)
                }
            })
    }
    let pagesCount = Math.ceil((+totalResults) / 10)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={'mainContainer'}>
            <div className={'searchContainer'}>
                <h2>Promises</h2>
                <div>
                    <input type="text"
                           placeholder={'Title'}
                           value={searchName} onChange={(e) =>
                        setSearchName(e.currentTarget.value)}/>
                    <input
                        type="text"
                        placeholder={'Year'}
                        style={{width: '60px', marginLeft: '10px'}} value={year}
                        onChange={(e) =>
                            setYear(e.currentTarget.value)}/>
                </div>
                <div>
                    <p>Search by name:</p>
                    <button onClick={searchFilm}>Search</button>
                    <button onClick={searchByYear}>Search + Year</button>
                    <p>Search by type:</p>
                    <button onClick={searchByType} data-t="movie">Movie</button>
                    <button onClick={searchByType} data-t="series">Series</button>

                </div>
                <br/>
                <div>
                    {
                        pages.map((p, index) => {
                            return <span
                                key={index}
                                onClick={(e: MouseEvent<HTMLInputElement>) => {
                                    onPageChanged(p)
                                }}
                            >{p}</span>

                        })
                    }
                </div>

            </div>
            <div className={'posterContainer'}>
                <PosterComponents
                    error={error}
                    result={searchResult}
                />
            </div>
        </div>
    );
}
export default Lesson3;