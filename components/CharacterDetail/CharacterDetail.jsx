export default function CharacterDetail({ character }) {
    return (
        <>
            {character.characters.map(character => {
                return (
                    <>
                        <h3> {character.name} </h3>
                        <img src={character.img}
                            alt={character.name} />
                        <p> {character.biography} </p>
                    </>
                )
            }
            )}

        </>
    )

}
/*
<>
                <h3> {character.name} </h3>
                <img src={character.img}
                    alt={character.name} />
                <p> {character.biography} </p>
                </>
*/