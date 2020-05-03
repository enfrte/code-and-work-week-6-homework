import React, { useState } from 'react';
import '../App.css';

function Card(props) {

	const showCard = () => {
		return props.show === true ? props.word : '';
	};

  return (
		<div className="game-card-container">
			<div 
				onClick={props.cardHandler}
				id={props.id}
				className={"game-card"}
				data-pairid={props.pairId}
				data-word={props.word}>
					{props.show === true ? props.word : ''}
			</div>{/* data-* must be lowercase */}
		</div>
  );
}

export default Card;
