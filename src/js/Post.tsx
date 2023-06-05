import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faAngleDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

export default function Post(): JSX.Element {
    return (
        <Card sx={{ marginBottom: "1rem" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    MR
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FontAwesomeIcon icon={faHeart} />
                </IconButton>
                <IconButton aria-label="share">
                  <FontAwesomeIcon icon={faShareNodes} />
                </IconButton>
              </CardActions>
            </Card>
    );
}
