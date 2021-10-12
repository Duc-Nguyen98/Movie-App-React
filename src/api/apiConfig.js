const apiConfig ={
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey:"984506269378e3d8a784f54c767d87e5",
    originalImage:((imagePath)=>`https://image.tmdb.org/t/p/original/${imagePath}`),
    w500Image:((imagePath)=>`https://image.tmdb.org/t/p/w500/${imagePath}`)
}

export default apiConfig;