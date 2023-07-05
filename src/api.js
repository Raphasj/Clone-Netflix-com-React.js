const API_KEY="ba16645b2bbe196a715ae0424160990b";

const categories=[
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge:true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge:false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge:false,
    },
    {
        name: "comedy",
        title: "Comédia",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge:false,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        isLarge:false,
    },
    {
        name: "documentaries",
        title: "Documentário",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge:false,
    },
];

export const getMovies = async (path) => {
    try {
        let url =`https://api.themoviedb.org/3${path}`;
        const response = await fetch (url)
        return await response.json();

    } catch (error) {
        console.log("error getMovie: ", error);
    }
    
} ;


export default categories;