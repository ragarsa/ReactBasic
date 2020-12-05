//import CharacterDetail from "../CharacterDetail";

export default function MovieDetail({ movie }) {
    return (
        <div>
            <h1> {movie.title} </h1>
            <img src={movie.img} alt={movie.title} />
            <p> {movie.description} </p>
            
            {/* pelicula.characters.map(character => 
            <CharacterDetail character = { character } />
            ) */}


        </div>
    )

}