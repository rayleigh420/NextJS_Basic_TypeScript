import { Metadata } from "next";
import Link from "next/link"

interface BlogProp {
    params: { id: string }
}

export const metadata: Metadata = {
    title: '...',
    description: '...',
};

const Blog = ({ params }: BlogProp) => {
    return (
        <>
            Blog Page in {params.id}
            <Link href='/'>Back to Home</Link>
        </>
    )
}

export default Blog