import { Grid, IconButton, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <Grid
      className="hide-scrollbar"
      height={"70vh"}
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
          sx={{ borderBottom: 1, borderColor: "purple", padding: 1 }}
          key={comment.id}
          className="comment"
          alignItems={"center"}
        >
          <Grid alignItems={"center"} item xs={10}>
            <Typography color={"purple"} className="comment-author">
              {comment.author}: &nbsp;
            </Typography>
            <Typography
              fontWeight={"300 !important"}
              fontSize={12}
              className="comment-content"
            >
              {comment.content}
            </Typography>
          </Grid>
          <IconButton>
            <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
};
