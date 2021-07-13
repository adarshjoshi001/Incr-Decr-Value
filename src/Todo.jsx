import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

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
                        <Button onClick={IncrNum} className="btn_green">  < AddCircleOutlineIcon />  </Button>
                        <Button onClick={DecrNum} className="btn_red"> <DeleteForeverIcon /> </Button>
                    </div>
                </div>

            </div>
            <h2  style={{textAlign: "center"}}>Made By Adarsh Joshi on July 13, 2021</h2>
        </>

    )
}

export default Todo;
