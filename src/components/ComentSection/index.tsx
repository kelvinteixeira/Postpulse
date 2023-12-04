import { Grid, IconButton, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
  const [likedComments, setLikedComments] = useState<number[]>([]);

  function handleLikedComment(commentId: number) {
    if (likedComments.includes(commentId)) {
      setLikedComments(likedComments.filter((id) => id !== commentId));
    } else {
      setLikedComments([...likedComments, commentId]);
    }
  }

  return (
    <Grid
      className="deep-purple-scrollbar"
      height={500}
      sx={{
        border: 2,
        borderColor: "white",
        borderRadius: 2,
        padding: 2,
        overflowY: "auto",
      }}
    >
      {comments.map((comment) => (
        <Grid
          container
          sx={{ borderBottom: 1, borderColor: "#673AB7", padding: 1 }}
          key={comment.id}
          className="comment"
          alignItems={"center"}
        >
          <Grid alignItems={"center"} item xs={10}>
            <Typography color={"#673AB7"} className="comment-author">
              {comment.author}: &nbsp;
            </Typography>
            <Typography
              fontWeight={"300 !important"}
              fontSize={12}
            >
              {comment.content}
            </Typography>
          </Grid>
          <IconButton onClick={() => handleLikedComment(comment.id)}>
            {likedComments.includes(comment.id) ? (
              <FavoriteRoundedIcon color="primary" />
            ) : (
              <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
};
