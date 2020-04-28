import React, { useState, useEffect } from 'react'

	const Child = (props) => {

		const [count, setCount] = useState(0);
		const [show, setShow] = useState('');
		const [showMessage, setShowMessage] = useState(false);
		const [yearArray, setYearArray] = useState([]);
		
		const addOne = (number) => {
			setCount(count + number);
			console.log(count);
		};

		const setMessage = () => {
			setShowMessage(true);
			millennialCheck(props.yearOfBirth);
		};

		const calculateAge = (yearOfBirth) => {
			const thisYear = 2020;
			return thisYear - yearOfBirth;
		};

		const millennialCheck = (year) => {
			console.log(year);
			if (year >= 1985 && year <= 1996) {
				setShow(true);
			}
		}

  return (      
      <div>
					<p><button onClick={ () => addOne(1) }>Add one</button>{count}</p>
          <p>
						Hello, I'm {props.name}. I'm {calculateAge(props.yearOfBirth)}! 
						<button onClick={ setMessage }>Millennial Check</button> 
						{showMessage ? 
							show ? <span>I'm a millennial</span> : <span>I'm not a millennial</span>
							: ''						
						}
					</p>
				<p>{yearArray}</p>
      </div>
  );
}

export default Child;