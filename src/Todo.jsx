import React, { useState } from 'react';

const Todo = () => {

    const [num, setNum] = useState(0);

    const IncrNum = () => {
        setNum(num + 1)
    }

    const DecrNum = () => {
        if(num>0){
            setNum(num - 1)
    }
    else{
        alert('Sorry. Zero Limit Reaches..')
        setNum(0);
    }
}
    return (
        <>

        
            <div className="main_div">
                <div className="center_div">
                    <h1> {num}</h1>
                    <div className="btn_div">
                        <button onClick={IncrNum}>  Increase  </button>
                        <button onClick={DecrNum}> Decrease </button>
                    </div>
                </div>

            </div>
            <h2  style={{textAlign: "center"}}>Made By Adarsh Joshi on July 13, 2021</h2>
        </>

    )
}

export default Todo;