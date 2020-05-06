import React from 'react';

function Card(props) {	
  return (
		<div className="game-card-container">
			<div 
				onClick={props.cardHandler}
				id={props.id}
				className={"game-card"}
				data-pairid={props.pairId}
				data-word={props.word}>
					{props.show === true ? props.word : ''}{/*"!" + props.word + "!"*/}
			</div>{/* data-* must be lowercase */}
		</div>
  );
}

export default Card;
