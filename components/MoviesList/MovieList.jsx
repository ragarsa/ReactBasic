import React from 'react'
//import CharacterDetail from '../CharacterDetail';
import { Component } from 'react';
import CharacterDetail from '../CharacterDetail';
import MovieDetail from '../MovieDetail';

class MovieList extends Component {

    constructor() {
        super()
        this.state = {
            movies: [
                {
                    title: 'Cars',
                    img: 'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic1.abc.es%2Fmedia%2Fpeliculas%2F000%2F019%2F042%2Fcars-2.jpg&nuevoancho=620&medio=abc',
                    description: 'Es una película de carros que hablan para niños',
                    characters: [
                        {
                            name: 'Rayo Macuin',
                            img: 'https://www.chedraui.com.mx/medias/887961437218-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MTExNDY5fGltYWdlL2pwZWd8aDA3L2gzNy85OTM5MDg2NDc1Mjk0LmpwZ3w2MTM5ZjcwYTE0YTYwMTU5NWMwNGY5ZGY5ZWQzNDE2ODJhYzAyODJmMTE1NDQxNDliYjZmNGJhMWFmMDY1NTMz',
                            biography: 'Medio mamón pero bueno'
                        },
                        {
                            name: 'Mate',
                            img: 'https://http2.mlstatic.com/D_NQ_NP_943920-MLM31409800792_072019-O.webp',
                            biography: 'Medio wey pero leal'
                        }
                    ]
                },
                {
                    title: 'Toy Story',
                    img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/13AA0A27E3DB7AC2012BD9678FBAC921C7BD09CD827D1E4F1F1CA6ACE3C054AD',
                    description: 'Juguetes que hablan cuando no los ves',
                    characters: [
                        {
                            name: 'Gudi',
                            img: 'https://vignette.wikia.nocookie.net/toystory/images/0/05/Profile_-_Woody.jpg/revision/latest?cb=20200928032134&path-prefix=es',
                            biography: 'Vaquero que tiene una serpiente en su bota'
                        },
                        {
                            name: 'Buzz Laityir',
                            img: 'https://resources.claroshop.com/medios-plazavip/s2/10252/1174866/5d43c93399561-figura-de-accion-disney-toy-story-4-buzz-lightyear-camina-1600x1600.jpg',
                            biography: 'Juguete que se cree humano'
                        }
                    ]
                }
            ]






        }
    }

    render() {
        const { movies } = this.state
        return (
            <>
                { movies.map(( movie ) => {
                    return ( 
                    <>                
                    <MovieDetail movie = { movie }  />
                    <CharacterDetail character = { movie } />

                    </>
                )}
                
                )}
                {/* movies.map(movie =>  {
                    return (
                    movie.characters.map(character =>{
                        return (
                            console.log(character.name)
                            )})
                        )})*/}
            </>
        )
    }

}

export default MovieList