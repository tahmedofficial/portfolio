import Head from "next/head";

const SEO = () => {

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Tanvir Ahmed",
                        "url": "https://tahmedofficial.vercel.app",
                        "sameAs": [
                            "https://github.com/tahmedofficial",
                            "https://linkedin.com/in/tahmedofficial",
                        ],
                        "jobTitle": "MERN Stack Developer",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Freelance"
                        }
                    }),
                }}
            />
            <title>Tanvir Ahmed | MERN Stack Developer & Next.js Expert</title>
            <meta name="description" content="Hi, I'm Tanvir Ahmed, a MERN stack developer proficient in MongoDB, Express.js, React, and Node.js. Explore my projects, blogs, and open-source contributions." />
        </Head>
    );
};

export default SEO;