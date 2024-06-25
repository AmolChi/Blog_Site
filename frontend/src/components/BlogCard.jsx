import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ data }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/${data._id}`);
  };
  return (
      <Card sx={{ width: 345, cursor:"pointer" }} onClick={handleNavigation}>
        <CardHeader
          title={data.title}
          subheader={
            <>
              {new Date(data.date).toDateString()}
              Author: {data.author}
            </>
          }
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              wordWrap: "break-word",
              whiteSpace: "pre-line",
            }}
          >
            {data.content}
          </Typography>
        </CardContent>
      </Card>
  );
}

export default BlogCard;
