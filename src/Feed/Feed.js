import React, { Component } from 'react';
import './Feed.scss';
import Post from './Post/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class Feed extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			loading: false
		};
	}

	componentDidMount() {
		this.setState({loading: true});
		fetch('https://my-json-server.typicode.com/evyros/fake-api/posts')
			.then(res => res.json())
			.then(posts => this.setState({posts, loading: false}));
	}

	render() {
		return (
			<div className="Feed d-flex flex-wrap">
				{this.state.loading ?
					<div className="loader">
						<FontAwesomeIcon icon={faSpinner} size="lg" spin />
						Loading...
					</div> :
					null
				}
				{this.state.posts.map(post => {
					return <Post key={post.id}
				                userId={post.userId}
				                title={post.title}
				                image={post.image}
				                created={post.created}
				                likes={post.likes}
				                tags={post.tags} />
				})}
			</div>
		);
	}
}

export default Feed;