import NightsStayIcon from '@mui/icons-material/NightsStay';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){
    return(
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
    );
}
export default Footer