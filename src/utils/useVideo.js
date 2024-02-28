import { useEffect, useState } from "react";
import { YOUTUBE_DATA_API, JSON } from "../constant";


const useVideo = () => {
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const accessToken = sessionStorage.getItem('accessToken')


    useEffect(() => {
        getVideo();
    }, []);

    async function getVideo() {
        const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20";
        const options = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
            },
            compress: true, // Enable compression similar to the curl option
        };

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                // Process the response data here
                console.log(data);
                setVideos(data?.items)
                setNextPageToken(data?.nextPageToken);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    const getMoreVideos = async () => {
        if (nextPageToken !== undefined) {
            const url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&pageToken="+nextPageToken;
            const options = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: "application/json",
                },
                compress: true, // Enable compression similar to the curl option
            };
    
            fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    // Process the response data here
                    console.log(data);
                    setVideos(videos.concat(data?.items));
                    setNextPageToken(data?.nextPageToken);
                    console.log(data?.nextPageToken)
                })
                .catch((error) => {
                    console.error("Error:", error);
                });



        } else {
            setHasMore(false);
        }
    }

    return [videos, getMoreVideos, hasMore];

}
export default useVideo;