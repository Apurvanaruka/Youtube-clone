import { useEffect, useState } from "react";
import { YOUTUBE_DATA_API } from "../constant";

const useVideo = () => {
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const accessToken = sessionStorage.getItem('accessToken');
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
        },
        compress: true, // Enable compression similar to the curl option
    };

    useEffect(() => {
        getVideo();
    }, [ accessToken ]);

    async function getVideo() {

        fetch( YOUTUBE_DATA_API , options)
            .then((response) => response.json())
            .then((data) => {
                setVideos(data?.items)
                setNextPageToken(data?.nextPageToken);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }

    const getMoreVideos = async () => {
        if (nextPageToken !== undefined) {
            fetch( YOUTUBE_DATA_API + "&pageToken="+nextPageToken , options)
                .then((response) => response.json())
                .then((data) => {
                    // Process the response data here
                    setVideos(videos.concat(data?.items));
                    setNextPageToken(data?.nextPageToken);
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