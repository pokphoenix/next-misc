import Head from 'next/head'
import Footer from '../components/Footer'

const About = () => {
    return ( 
    <>
    <Head>
        <title>About Codevolution</title>
        <meta name='description' content='Free tutorial' />
    </Head>
    <h1 className='content'>About</h1>  
    </>
    );
}
 
export default About;


About.getLayout = function PageLayout(page){
    return (
        <>
            {page}
            <Footer />
        </>
    )
}