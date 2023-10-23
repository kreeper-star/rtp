

function DataPlayers({players}){
    return(
        <div>
            {players.map((el, index)=>{
                const lastname = el.last_name;
                const firstname = el.first_name;
                const team = el.position;
                return(<div className="players">
                    {index + 1}. {firstname} {lastname}, position: {team}
                </div>)
            })}
        </div>
    )
}
export default DataPlayers