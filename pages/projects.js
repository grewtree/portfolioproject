import Layout from "../components/layout"
import Head from "next/head"
import { TOKEN, DATABASE_ID } from "../config"
import Animation_people from "../components/home/animation3"
import Animation_circle from "../components/home/animation_circle"

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>창수의 홈페이지</title>
                <meta name="description" content="창수의 홈!!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

          <div className="">
            <Animation_people/>
          </div>
        </Layout>

    )

}

export async function getServerSideProps() {
    const options = {
        method:'POST',
        headers:{
        Accept : 'application/json',
        Authorization : `Bearer ${TOKEN}`,
        'Notion-Version' : '2022-02-22',
        'Content-Type' : 'text/plain'
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