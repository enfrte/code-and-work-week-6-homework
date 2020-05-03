    import React from 'react';

    function Button(props) {
      console.log("props.counter", props.counter);
      return (
        <div>
          <button onClick={props.buttonHandler}>
              Number of clicks: {props.counter}
          </button>
        </div>
      );
    }

    export default Button;
