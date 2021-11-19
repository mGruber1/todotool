import React from 'react';
import FAIcons from "./../../../../../globals/font-awesome-4.7.0/css/font-awesome.min.css"

const Filter = (props) => {
    return (
        <div>
            <i onClick={props.clickHandler}class="fa fa-filter" aria-hidden="true"></i>
        </div>
    );
};

export default Filter;