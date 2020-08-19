import Link from 'next/link'

const FirstPost = () => {
    return (
        <React.Fragment>
        <h1>First Post</h1>
        <Link href="/"><a>Back to Home</a></Link>
        </React.Fragment>
    )
}

export default FirstPost;