import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/home/hero'

import Hero4 from '../components/home/hero4'
import Stack from '../components/home/stack'

export default function Home() {
    return (
        <Layout>

            <Head>
                <title>창수의 홈페이지</title>
                <meta name="description" content="창수의 홈!!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <section
                className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">

                <div
                    className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    <Hero/>

                </div>


            </section>

            

        </Layout>
    )
}