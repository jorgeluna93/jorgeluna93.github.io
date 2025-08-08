import NightsStayIcon from '@mui/icons-material/NightsStay';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Billboard(){
    return(
        <div className="row">
            <div className="col-12">
                <div className="container main-page-box">
                    <div className="row main-page-row">
                        <div className="col-12">
                            <h1><NightsStayIcon sx={{ fontSize: 45 }}/> Jorge Luna's Dev Site </h1>
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
    );
}

export default Billboard