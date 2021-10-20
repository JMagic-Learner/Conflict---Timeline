// Importing neccessary elements from Material UI and React
import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import moment from 'moment'
import loading from './loading.gif'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// Starting NY times API function
const News = () => {
    const [articles, setArticles] = useState([])
    const [term, setTerm] = useState('Your Search')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(
                    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
                )
                const articles = await response.json()
                console.log(articles.response.docs)
                setArticles(articles.response.docs)
                setIsLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        fetchArticles()
    }, [term])

    return (
        <>
            <div className="showcase">
                <div className="overlay">
                    <h1 className="text-white font-bold text-4xl mb-4 lg:text-6xl">
                        Viewing articles about {term}
                    </h1>
                    <SearchForm searchText={(text) => setTerm(text)} />
                </div>
            </div>

            {isLoading ? (
                <img src={loading} alt="Loading..." />
            ) : (
                <section className="grid grid-cols-1 gap-10 px-5 py-10 pb-20 lg:w-1/2 lg:mx-auto 2xl:w-2/3">
                    {articles.map((article, index) => {
                        const {
                            abstract,
                            web_url,
                            lead_paragraph,
                            pub_date,
                            news_desk,
                            section_name,
                            byline: { original },
                            word_count,
                        } = article

                        return (
                            <article key={index} className="bg-white py-5 px-5 rounded-lg">
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {original}, {moment(`${pub_date}`).format('Do MMM YYYY')}                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {abstract}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Desk: {news_desk} , Section: {section_name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {lead_paragraph}
                                        </Typography>
                                
                                <small className="block mt-4">Word Count: {word_count}</small>
                                    </CardContent>
                                    <CardActions>
                                        <Button href={web_url} size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                                {/* You add the br to have spacing between card and if you use HR it creates lines */}
                                <br>
                                </br>
                            </article>
                          
                        )
                    })}
                </section>
            )}
        </>
    )
}

export default News
