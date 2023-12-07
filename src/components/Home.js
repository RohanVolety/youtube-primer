import React from "react";
import {
     Box,
    Heading,
    Text,
    Button,
    
    
} from "@primer/react";
import yt from "../assests/yt.jpg";
import Buttons from "./ButtonGroup";
import LeftMenu from "./LeftMenu";
import ProfileBox from "./profileBox";
import SearchBar from "./SearchBar";

const videoData = [
    {
        id: 1,
        thumbnail: require("../assests/typescript.JPG"),
        title: "Complete Typescript",
        channel: "Awesome Channel",
        views: "1M views",
        timestamp: "1 day ago",
    },
    {
        id: 2,
        thumbnail: require("../assests/activation.JPG"),
        title: "Activation Function",
        channel: "CodeBasics",
        views: "500K views",
        timestamp: "2 days ago",
    },
    {
        id: 3,
        thumbnail: require("../assests/fallout.jpg"),
        title: "Fallout Trailer",
        channel: "Amazon Prime",
        views: "500K views",
        timestamp: "2 days ago",
    },
    {
        id: 4,
        thumbnail: require("../assests/fireship.JPG"),
        title: "Typescript Uses",
        channel: "Fireship",
        views: "500K views",
        timestamp: "2 days ago",
    },
    {
        id: 5,
        thumbnail: require("../assests/hooks.JPG"),
        title: "React Hooks",
        channel: "Web Dev Simplified",
        views: "500K views",
        timestamp: "2 days ago",
    },
    {
        id: 6,
        thumbnail: require("../assests/ML.JPG"),
        title: "Machine Learning Deployment",
        channel: "Jovian",
        views: "500K views",
        timestamp: "2 days ago",
    },
    {
        id: 7,
        thumbnail: require("../assests/flash.jpg"),
        title: "Special Episodes",
        channel: "CNN TV",
        views: "500K views",
        timestamp: "2 days ago",
    },
    {
        id: 8,
        thumbnail: require("../assests/gta.jpg"),
        title: "GTA VI Trailer",
        channel: "RockStar Games",
        views: "500K views",
        timestamp: "2 days ago",
    },
    {
        id: 9,
        thumbnail: require("../assests/typescript.JPG"),
        title: "Complete Typescript Course",
        channel: "Hilarious Hub",
        views: "500K views",
        timestamp: "2 days ago",
    },
];

const YoutubeHeading = () => (
    <Box display="flex" alignItems="center" mr={2}>
        <img src={yt} alt="YouTube Logo" width={80} height={80} />
        <Heading as="h1" fontSize={5} color="white" ml={2}>
            YouTube
        </Heading>
    </Box>
);



const Navbar = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <YoutubeHeading />       
        <SearchBar />
        </div>

);


const VideoCard = ({ video }) => (
    <Box width={["100%", "48%", "30%"]} mb={4}>
        <img
            src={video.thumbnail}
            alt={`Video Thumbnail - ${video.title}`}
            width="100%"
            height={200}
        />
        <Box p={2} display="flex" flexDirection="column" justifyContent="space-between">
            <Box>
                <Heading as="h5" fontSize={4}>
                    {video.title}
                </Heading>
                <Text>{video.channel}</Text>
            </Box>
            <Text fontSize={2} color="gray.6">
                {`${video.views} - ${video.timestamp}`}
            </Text>
        </Box>
    </Box>
);



const YoutubeLayout = () => (
    <Box sx={{ bg: '#0d1117', color: 'white', minHeight: '100vh' }}>
        <ProfileBox />
        <Navbar />        
        <Buttons />        
        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>            
            <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-around"
                p={4}
                width="100%"
            >
                {videoData.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </Box>
        </Box>
        <Box p={4} display="flex" justifyContent="center">
            <Button
                size="medium"
                style={{
                    backgroundColor: "green",
                    color: "white", 
                    fontWeight: "bold",
                    borderRadius: "4px",
                }}
            >
                Show More Videos
            </Button>
        </Box>
        <LeftMenu />
    </Box>
);

export default YoutubeLayout;
