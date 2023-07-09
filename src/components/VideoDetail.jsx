import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [channelDetail,setChannelDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

      
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

      // if (!videoDetail?.snippet) return <Loader />;
      // let { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" sx={{ backgroundColor: 'rgb(241, 207, 252)' }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} className="videoDetail" >
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography backgroundColor="white" color="black" variant="h5" fontWeight="bold" p={2} >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ color: "#black" ,backgroundColor: 'white' , boxShadow:' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                {/* <img src={channelDetail?.snippet?.thumbnails?.high?.url} alt="channel" style={{width:'5px', height: '5px'}} /> */}
                <Typography variant={{ sm: "subtitle1", md: 'h5' }} fontWeight="bold" color="blue" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "15px", color: "green", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;