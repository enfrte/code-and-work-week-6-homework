import React, { useState } from 'react';
import '../App.css';

function Card(props) {

  return (
		<div className="game-card-container">
			<div 
				onClick={props.cardHandler}
				id={props.id}
				className="game-card"
				data-pairid={props.pairId}
				data-word={props.word}>
					{/* Uncomment to debug !{props.word}! */}
			</div>{/* data-* must be lowercase */}
		</div>
  );
}

export default Card;
