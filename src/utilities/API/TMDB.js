
const PuxarDados = () => {

    const BasicFetch = async () => {
        const req = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7ac072d7b0b3b497202fa87a9bcf3a1f&language=pt-BR');
        const json = await req.json();
        console.log(json)
        return json;
    }

}
export default PuxarDados;