//Components
import Article from './Article';
import ArticlePreview from './ArticlePreview';
import Billboard from './Billboard';
import Footer from './Footer';
import Navbar from './Navbar';

//
function MainPage(){
    return(
       <>
        {/* NAV BAR */}
        <Navbar/>

        {/* Content */}
        <div className='container'>
            {/* Name and links */}
            <Billboard/>

            {/* Article List and Latest Content */}
            <div className="row">

                {/* Latest Articles Content */}
                <div className="col-8">
                    <div className="container main-page-box">
                        <Article/>
                        <Article/>
                    </div>
                </div>
                
                {/* Article List */}
                <div className="col-4">
                    <div className="container main-page-box">
                        <div className="row main-page-row-article-list">
                            <div className="col-12">
                                <h2>Latest Articles:</h2>
                                    <ArticlePreview/>
                                    <ArticlePreview/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <Footer/>
        </div>
    </>
    );
}

export default MainPage