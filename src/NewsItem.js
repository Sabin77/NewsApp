import React from 'react';

const NewsItem =(props)=>{
 
    const { title, description, imageUrl, newsUrl,author,date,source } = props;

    return (
      <div className="my-3">
        <div className="card" >
        <div style ={
          {display: 'flex',
           justifyContent:'flex-end',
           position:'absolute',
           right:'0'
        }
        }>
        <span className=" badge rounded-pill bg-danger" > {source} </span>
        </div>
          <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg"} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title?title:"No Title"}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
