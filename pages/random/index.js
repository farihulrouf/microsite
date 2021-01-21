import Head from 'next/head'
import Link from 'next/link'

function Random(props) {
    console.log(props)
    return (
        <>
            <Head>
                <title>Micro | Random</title>
            </Head>

            <main className="container mt-12">
                <h1 className="text-6xl">
                    Fetching random words
                </h1>
            </main>
        </>
    )
}

Random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json)
        return { data }
    } catch (error) {
        
    }
}


export default Random