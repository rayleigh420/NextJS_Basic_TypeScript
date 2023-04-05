'use client'

import Link from "next/link"
import { ChangeEvent, useState } from "react"

const Form = () => {
    const [id, setID] = useState<string>("1");

    const handleChangeID = (e: ChangeEvent<HTMLInputElement>) => {
        setID(e.target.value)
    }

    return (
        <div>
            <input type="text" value={id} onChange={handleChangeID} />
            <Link href={`/blog/${id}`}>Go to Blog</Link>
        </div >
    )
}

export default Form