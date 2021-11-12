import React from 'react';
import Styles from './TaskBoard.module.scss';
const TaskBoard = () => {
    return (
        <div className={Styles.taskboard}>
            <div className={Styles.taskboard__header}>
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Menu</a></li>
                </ul>
            </div>
            <div className={Styles.taskboard__content}>
                Content
            </div>
        </div>
    );
};

export default TaskBoard;