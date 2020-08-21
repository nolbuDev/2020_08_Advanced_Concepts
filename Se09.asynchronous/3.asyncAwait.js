// Async Await
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)
    .finally(console.log('End of Service'))

async function getData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataJson = await data.json();
    console.log(dataJson);
}
getData();

//Sample
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

async function getUrlData(){
    try{
        const[users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(result => result.json())))
        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch(err){
        console.log('Error', err);
    } finally {
        console.log('End of Service');
    }
}

getUrlData();

async function getUrlData2(){
    try{
        const arrResult = await Promise.all(urls.map(url => fetch(url)));
        for await (let request of arrResult){
            const data = await request.json();
            console.log('getUrlData2 : ' + data);
        }
    } catch(err){
        console.log('Error', err);
    } finally {
        console.log('End of Service');
    }
}
getUrlData2();
