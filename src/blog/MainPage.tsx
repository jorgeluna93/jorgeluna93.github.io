//Icons
import NightsStayIcon from '@mui/icons-material/NightsStay';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//Navbar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Filler Pics
import fillerPic from '../assets/filler.jpg';
//stuff
import ArticlePreview from './ArticlePreview';

const theme = createTheme({
  palette: {
    primary:{ main: '#171421'},
  },
});
//
function MainPage(){
    return(
        <>
        <ThemeProvider theme={theme}>

            {/* NAV BAR */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NightsStayIcon/> Jorge Luna's Dev Site
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Content */}
            <div className='container'>
                 {/* Name and links */}
                <div className="row">
                    <div className="col-12">
                        <div className="container main-page-box">
                            <div className="row main-page-row">
                                <div className="col-12">
                                    <p>
                                        <h1><NightsStayIcon sx={{ fontSize: 45 }}/> Jorge Luna's Dev Site</h1>
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <GitHubIcon /> <a href="https://github.com/jorgeluna93"> My Github </a> 
                                            </div>
                                            <div className='col-3'>
                                                <LinkedInIcon /> <a href="https://linkedin.com/in/jluna93mty"> My Linkedin </a> 
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article List and Latest Content */}
                <div className="row">
                    {/* Latest Articles Content */}
                    <div className="col-8">
                        <div className="container main-page-box">
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
                        </div>
                    </div>
                    {/* Article List */}
                    <div className="col-4">
                        <div className="container main-page-box">
                            <div className="row main-page-row-article-list">
                                <div className="col-12">
                                    <h2>Latest Articles:</h2>
                                    <p>
                                        <ArticlePreview/>
                                    </p>
                                    <p>
                                        <ArticlePreview/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="row">
                    <div className="col-12">
                        <div className="container main-page-box">
                            <div className='row main-page-row'>
                                <div className="col 4">
                                    <h3>About this site</h3>
                                    <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim varius magna. Integer id blandit diam. Pellentesque porta leo est, vel auctor velit pulvinar eget.  </p>
                                </div>
                                <div className="col 4">
                                    <h3>Quick Links</h3>
                                </div>
                                <div className="col 4">
                                    <h3>My Stuff</h3>
                                    <p><GitHubIcon /> <a href="https://github.com/jorgeluna93"> Github </a> </p>
                                    <p><LinkedInIcon /> <a href="https://linkedin.com/in/jluna93mty"> Linkedin Profile </a> </p>
                                </div>
                            </div>
 
                        </div>

                    </div>
                </div>
            </div>
            

        </ThemeProvider>
        </>
    );
}

export default MainPage