
const cache = JSON.parse( localStorage.getItem('cache') ) ?? {}; //er der noget i cache så dem dette ellers lav tom objekt

export async function fetchlatestNews(section) {
const apiKey = import.meta.env.VITE_NYT_apiKey;

//henriks:
const url = new URL(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json`);

url.searchParams.append("api-key", apiKey);

if (cache[url.href] !== undefined) {
    console.log('returning cached latest new');
    return cache[url.href].results;
}

console.log('fetching latest news from', url.href);

const response = await fetch(url);
const data = await response.json();
console.log(data);  

cache[url.href] = data;

localStorage.setItem('cache', JSON.stringify(cache));

return data.results; 
}