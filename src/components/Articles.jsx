import { useState, useEffect } from "react";
import { getNews } from "../service/api";

import InfiniteScroll from 'react-infinite-scroll-component';
import Article from "./Article";


const Articles = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);


    useEffect(() => {
        const dailyNews = async () => {
            let response = await getNews();
            console.log(response.data);
            setNews([...new Set([...news, ...response.data])]);
        }
        dailyNews();
    }, [page]);



    return (
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)} hasMore={true}>
            {
                news.map(data => {
                    return <Article data={data} />
                })
            }
        </InfiniteScroll>
    )
}
export default Articles;