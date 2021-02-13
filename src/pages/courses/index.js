import Head from 'next/head'
import Link from 'next/link'
import courses from 'src/constants/api/courses'
function DetailCourse ({ data }) {
    
    return (
        
        <>
            <Head>
                <title>Micro | Random</title>
            </Head>

            <main className="container mt-12 mx-auto">
                <h1 className="text-3xl">
                    Fetching random words
                </h1>
                <ul>
                    {data.map((todo) => {
                        return (
                            <li key={todo.id} className="border border-indigo-700 p-4">
                                {todo?.title ?? "-"}{" "}
                                <Link href ={`/random/${todo.id}`}>
                                    <a>Lauch</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    )
}

DetailCourse.getInitialProps = async () => {
    try {
        const data = await courses.details(id)
        return { data: data }
    } catch (error) {
        
    }
}


export default DetailCourse