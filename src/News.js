import React from 'react';
import './News.css';
import Button from '@material-ui/core/Button';
function Headlines({news}) {
    
    return(
        <div className="NewsBox">
            <div className="parentHeading"><h1>LATEST NEWS</h1></div>
            {news.map(({ImageUrl,Title,Author,Content,ReadMore}) => (
            
                
            <div className="headline">
                <div className="NewsImgBox"><img src={ImageUrl} /></div>
                <div className="NewsDescBox">
                    <h3>{Title}</h3>
                    
                    <p>{Content}</p>
                    <Button variant="outlined" color="primary"><a target="_blank" href={ReadMore}>Read More</a></Button>
                </div>
            </div>
            ))}
        </div>
    )
   
}

export default Headlines;
