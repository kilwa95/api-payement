import React from 'react';
import './Article.css';
const Article = (props) => {
	let { title, description, name, date, prix } = props;
	return (
		<div className="article d-flex">
			<div className="article-image">
				<img alt="image" src="https://www.paris.fr/images/meta/parisfr.jpg" width="260" height="149" />
			</div>
			<div className="article-content">
				<div className="article-titre">{title}</div>
				<div className="article-decription">{description}</div>
				<div className="article-user">{name}</div>
				<div className="article-date">{date}</div>
			</div>
			<div className="article-prix">
				<div>{prix} €</div>
			</div>
		</div>
	);
};
export default Article;
