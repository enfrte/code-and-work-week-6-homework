import React, { useState, useEffect } from 'react'

	const UseEffectExample = (props) => {
		// assignment 0
		const [data, setData] = useState({title: "", body: ""}); // How do you show this? See conditional rendering
		const [nextPost, setNextPost] = useState(1);
		// assignment 1
		const formatTime = timeUnit => timeUnit < 10 ? "0" + timeUnit : timeUnit;
		const getTheTime = () => {
			return `
			${formatTime(new Date().getHours())}: 
			${formatTime(new Date().getMinutes())}: 
			${formatTime(new Date().getSeconds())}`;
		};
		const [theTime, setTheTime] = useState(getTheTime());
		//const theTime = getTheTime();
		const [stopTime, setStopTime] = useState(false);
		const [timer, setTimer] = useState(); // timer will be set in useEffect
		//console.log("stopTime:", stopTime);

		// assignment 0
		useEffect(() => {
			try {
				fetch('https://jsonplaceholder.typicode.com/posts/' + nextPost)
				.then(response => response.json())
				.then(json => setData(json));				
			} catch (error) {
				console.log("Fetch error:", error);
			}
		}, [nextPost]); 

		// assignment 1
		useEffect(() => {
			if (stopTime === false) {
        const interval = setInterval(() => {
          setTheTime(getTheTime())
        }, 1000);
        return () => clearInterval(interval);
      }
		}, [stopTime, getTheTime]);
		
		return (
				<div>

					<h1>useEffect lecture assignment 0</h1>
					<button onClick={ () => setNextPost(nextPost + 1) }>Next post</button>
					<h3>{data.title.toUpperCase()}</h3>
					<p>{data.body}</p>

					<h1>useEffect lecture assignment 1</h1>
					{theTime} 
					<button onClick={() => setStopTime(!stopTime)}>
						{stopTime === true ? "Start time" : "Stop time"}
					</button>

				</div>
		);
}

export default UseEffectExample;