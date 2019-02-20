import React from 'react';
import './style.css';

const teamCard = (props) => {
	return (
		<div className='card'>
			<article className='message is-success'>
				<div className='message-body'>{props.devloperName}</div>
			</article>

			<div className='card-image level-item'>
				<figure className='image is-128x128'>
					<img className='is-rounded' src={props.photo} alt='Placeholder image' />
				</figure>
			</div>
			<div className='card-content'>
				<div className='columns'>
					<div className='column is-full'>{props.devloperDesciption}</div>
				</div>

				<div id='links' className='columns is-mobile'>
					<div className='column is-one-quarter'>
						<a href={props.linkIn}>
							<i className='fab fa-linkedin' />
						</a>
					</div>

					<div id='links' className='column is-one-quarter'>
						<a href={props.github}>
							<i className='fab fa-github' />
						</a>
					</div>

					<div id='links' className='column is-one-quarter'>
						<a href={props.website}>
							<i className='fas fa-globe-americas' />
						</a>
					</div>

					<div id='links' className='column is-one-quarter'>
						<a href={props.email}>
							<i className='fas fa-envelope' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default teamCard;
