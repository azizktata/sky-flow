
export async function GET(req){
    const { searchParams } = new URL(req.url);
    console.log(searchParams.get('id'))
    try {
       
        const res = await fetch(`${process.env.BASE_URL}/skyflow`)
        if (!res.ok){
            return new Response('failed to fetch data', { status: res.status })
        }
        const data = await res.json()
        return new Response(JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    } catch  {
        return new Response('failed to fetch data', { status: 500 })
        
    }
}