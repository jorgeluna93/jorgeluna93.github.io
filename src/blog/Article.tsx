import fillerPic from '../assets/filler.jpg';
import Divider from '@mui/material/Divider';
import { Chip } from '@mui/material';

function Article(){
    return(
        <>
            <div className="row main-page-row-article-box">
                <div className="col-12">
                    <div className="article-title">
                        <h2>Aliquam efficitur at magna sed pulvinar. </h2>
                        <p>January 1st 1970</p>
                    </div>
                    <div className="article-content">
                        <img src={fillerPic} alt="A filler pic" />
                        
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies nisi id congue porttitor. Mauris egestas, massa nec malesuada feugiat, metus elit eleifend nibh, blandit cursus ante neque nec nibh. Phasellus sem lectus, fermentum et arcu et, tempor faucibus ipsum. Proin sit amet semper est, eget pretium augue. Nam dapibus non dui quis volutpat. Vivamus ut tellus sed risus dignissim vestibulum. Praesent blandit est id est dapibus posuere at nec diam. Duis vel nunc euismod, sagittis lectus pretium, feugiat dolor. Quisque nec faucibus arcu, ac mollis lectus. 
                        </p>
                        <p>
                            Quisque vitae velit neque. Nullam vulputate lacus posuere mauris efficitur finibus. Ut scelerisque neque quis neque tempor, vel posuere mi sollicitudin. Cras sodales blandit tortor vitae vestibulum. Mauris neque urna, tincidunt tristique nulla vel, posuere auctor erat. Donec ultricies tincidunt ipsum eget maximus. Nullam at metus ante. Integer bibendum consectetur commodo. Morbi suscipit finibus tellus, sit amet dapibus ex dictum id. Donec feugiat libero eu pulvinar scelerisque. Proin quis nunc semper quam blandit rhoncus. Nam eu malesuada augue. Proin ligula ante, porttitor sit amet efficitur ac, tristique quis tortor. Maecenas hendrerit nisi in dolor aliquet lacinia. Etiam aliquet augue sit amet auctor sollicitudin. 
                        </p>
                    </div>
                </div>
            </div>
            <Divider>
                <Chip label="End of the article" size="small" />
            </Divider>
        </>
    );
}

export default Article