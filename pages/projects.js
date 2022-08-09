import Layout from "../components/layout"
import Head from "next/head"
import { TOKEN, DATABASE_ID } from "../config";
import Animation_circle from "../components/home/animation_circle";


export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>창수의 홈페이지</title>
                <meta name="description" content="창수의 홈!!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <section
                className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font"
                section="section">
                <div
                    className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Animation_circle/>
                </div>
            </section>

        </Layout>

    )

}

export async function getServerSideProps() {
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-02-22',
          'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({page_size: 100})
      };
      
      const res = await fetch(`https://api.notion.com/v1/databases/0b563ed62b4743c7a62994abb7d4c0e2/query`, options)

      const result = await res.json()

      console.log(result)

    return {
      props: {}, // will be passed to the page component as props
    }
  }