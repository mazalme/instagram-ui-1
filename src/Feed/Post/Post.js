import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Post.scss';
import TagList from './TagList/TagList';

class Post extends Component {

	formatDate(timestamp) {
		const date = new Date(timestamp * 1000);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

		return months[date.getMonth()] + ' ' + date.getDate();
	}

	render() {
		return (
			<div className="col-sm-12 col-md-4">
				<article className="Post">
					<header>
						<div className="Post-date">
							{this.formatDate(this.props.created)}
						</div>
						<div className="Post-user">
							<FontAwesomeIcon icon={faUser} />
						</div>
					</header>
					<div className="Post-image">
						<img src={this.props.image} title={this.props.title} />
					</div>
					<div className="Post-actions">
						<div>{this.props.likes} <FontAwesomeIcon icon={faHeart} /></div>
					</div>
					<div className="Post-content">
						<h1 className="Post-title">{this.props.title}</h1>
						<TagList tags={this.props.tags} />
					</div>
				</article>
			</div>
		);
	}
}

export default Post;