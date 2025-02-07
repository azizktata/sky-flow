export  const fetchDataFromWP = async () => {
    try {
        if(!process.env.BASE_URL){
            throw new Error('BASE_URL not found in .env file');
        }
        // const res = await fetch(`${process.env.BASE_URL}`);
        const res = await fetch(`${process.env.BASE_URL}/skyflow`);
        if(res.status !== 200){
            throw new Error("Failed to fetch proxy data");
        }
        const data = await res.json();
        return data;
    } catch {
        // console.error("Error fetching data:", error);
        return "Internal Server Error 500";
    }
}