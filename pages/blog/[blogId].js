import Head from 'next/head'

const Blog = ({title, description}) => {
    return ( 
      <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>
        <h1 className='content'>
            Env User {process.env.DB_USER } not display
            <br/>
            Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID }
           
        </h1>
       
      </>  
    );
}
 
export default Blog;


export async function getServerSideProps(){
    const user = process.env.DB_USER 
    const password = process.env.DB_PASSWORD

    console.log(
        `Connecting to database with username ${user} and password ${password}`
    )

    return {
        props: {
            title: 'Article Title',
            description: 'Article description',
        }
    }
}