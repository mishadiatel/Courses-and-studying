import Link from 'next/link';
import React, { Fragment } from 'react';


const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><Link href='/news/nextjs-is-s-great-framevork'>Next JS is great framevork</Link></li>
                <li>Something else</li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;