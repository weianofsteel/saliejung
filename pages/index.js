import Link from 'next/link'

const Index = () => {
    return(
        <React.Fragment>
            <h1>
                Read <Link href="/Work/Work"><a>Work</a></Link>
            </h1>
            <h1>
                <Link href="/Writing/Writing"><a>Writing</a></Link>
            </h1>
        </React.Fragment>
    )
}

export default Index;