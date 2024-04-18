export async function fetchAllPlayers () {
try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2401-ftb-et-web-pt/players')
    const result = await response.json();
    console.log(response);
    if (result.success){
        return result.data.players;
    }
    } catch (error) {
    console.log(error)
}
   
}