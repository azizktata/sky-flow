export default async function fetchDataFromWP() {
    try {
        if(!process.env.BASE_URL){
            throw new Error('BASE_URL not found in .env file');
        }
        const res = await fetch(`${process.env.BASE_URL}`)
        if(!res.ok){
            throw new Error('No data fetched');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        return { error: error.message };
    }
}