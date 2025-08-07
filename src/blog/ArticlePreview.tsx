
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//Filler Pics
import fillerPic from '../assets/filler.jpg';
export default function ArticlePreview() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="pic"
        height="140"
        image={fillerPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Aliquam efficitur at magna sed pulvinar
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies nisi id congue porttitor. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read more</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
