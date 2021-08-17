import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import './les3.css';
import {PosterComponents} from './PosterComponents';
import {Pagination} from './Pagination';


const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<Array<any>>([]);
    const [year, setYear] = useState<string>('')
    const [error, setError] = useState<string>('Start to search files!')
    const [totalResults, setTotalResults] = useState<string>('')

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(({data}) => {
              //  console.log(data, 'searchFilm');
                const {Response, Search, Error, totalResults} = data;
                setTotalResults(totalResults)
                if (Response === 'True') {
                    setSearchResult(Search);
                } else {
                    setError(Error)
                }
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchName, type)
            .then(({data}) => {
               // console.log(data, 'searchFilmsByType');
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
            //    console.log(data, 'searchFilmByYear');
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
             //   console.log(data, 'searchFilmsPage');
                const {Response, Search, Error, totalResults} = data;
                setTotalResults(totalResults)
                if (Response === 'True') {
                    setSearchResult(Search);
                } else {
                    setError(Error)
                }
            })
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
                    <Pagination
                        totalResults={totalResults}
                        onPageChanged={onPageChanged}
                    />
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