import React, { useEffect, useState } from "react";
import { Container, Box, Avatar, Typography } from "@mui/material";
import Comment from "./Comment";
import './Comment.css'


const CommentSection = () => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://calm-dawn-94337.herokuapp.com/user/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data);
            })
    }, [])

    return (
        <>
            <Container className="" style={{}}>
                <h1>Customer Reviews {reviews.length}</h1>
                <hr className="w-25" />
                <Box
                    style={{
                        maxHeight: "50vh",
                        overflow: "hidden",
                        overflowY: "scroll",
                    }}
                    className="scrolling"
                >
                    {reviews.map((review) => (
                        <Comment
                            review={review}
                            key={review._id}
                        ></Comment>
                    ))}
                </Box>
            </Container>
        </>
    );
};

export default CommentSection;