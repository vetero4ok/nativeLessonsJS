import React from 'react';

type PosterComponentsPropsType= {
    error:string
    result:Array<any>
}

export const PosterComponents:React.FC<PosterComponentsPropsType> = (props) => {

    let resultSearch
    if (props.result.length !== 0) {
        resultSearch = props.result.map((ser, index) => {
            return (
                <li key={index} className={'figure'}>
                    <img src={ser?.Poster}/>
                    <h4>{ser?.Title}</h4>
                    <p> Type: {ser?.Type}. Year: {ser?.Year}. ID:{ser?.imdbID}</p>
                </li>);
        })
    } else resultSearch =
        <div className={'error'}>
            <h3>{props.error}</h3>
        </div>

    return(
        <ul>
            {resultSearch}
        </ul>
    );

}