
const cache = JSON.parse( localStorage.getItem('cache') ) ?? {}; //er der noget i cache så dem dette ellers lav tom objekt

export async function fetchPopularData(endpoint, days) {
const apiKey = import.meta.env.VITE_NYT_apiKey;

//henriks:
const url = new URL(`${endpoint}.json`,`https://api.nytimes.com/svc/topstories/v2/`);

url.searchParams.append("api-key", apiKey);

if (cache[url.href] !== undefined) {
    console.log('returning cache data');
    return cache[url.href].results;
}

console.log('fetching new data', url.href);

const response = await fetch(url);
const data = await response.json();
console.log(data);  

cache[url.href] = data;

localStorage.setItem('cache', JSON.stringify(cache));

return data.results; 
}
   
