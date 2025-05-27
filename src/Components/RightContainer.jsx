import React, { useState } from "react";
import { faBarsStaggered, faBell, faDisplay, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RightContainer.css"

const RightContainer = () => {

    const [buttonAddTask, setButtonAddTask]   = useState(
        {display:"none",buttonText:"+ Add Task"});

    const handleButton = (e) => {
        // console.log(e);
        if(e.target.value === "+ Add Task") {
            setButtonAddTask({display:"initial",buttonText:"- Cancel"});
        }
        else {
            setButtonAddTask({display:"none",buttonText:"+ Add Task"});
        }
    }
    return (
        <div className="rightcontainer">
            <nav>
                <div className="navsearch">
                    <input type="search" name="search" id="search"
                        placeholder=" Search" />
                </div>
                <div className="rightnavicon">
                    <FontAwesomeIcon className="nav_icon" icon={faBell} />
                    <FontAwesomeIcon className="nav_icon profile_icon" icon={faUser} />
                </div>
            </nav>

            <button className="addtask" onClick={handleButton} value={buttonAddTask.buttonText}>{buttonAddTask.buttonText}</button>
            <div className="newtaskinput" style={{display:buttonAddTask.display}}>
                <input type="text" name="description" id="description" />
                <input type="date" />
                <input type="text" />
                <select>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>

            <div className="taskprogress">
                <div>
                    <span>Total Tasks </span>
                    <span>20</span>
                </div>
                <div>
                    <span>Pending</span>
                    <span>4</span>
                </div>
                <div>
                    <span>In Progress</span>
                    <span>2</span>
                </div>
                <div>
                    <span>Completed</span>
                    <span>12</span>
                </div>
            </div>

            <div className="options">
                <a href="#">All</a>
                <a href="#">Today</a>
                <a href="#">Upcoming</a>
                <a href="#">Completed</a>
            </div>
            <div className="optionbar">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th>
                                Task
                            </th>
                            <th>
                                Due Date
                            </th>
                            <th>
                                Tags
                            </th>
                            <th>
                                Priority
                            </th>
                            <th>
                                <FontAwesomeIcon icon={faBarsStaggered} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" name="" id="" />
                            </td>
                            <td>
                                Design Homepage
                            </td>
                            <td>
                                Today
                            </td>
                            <td>
                                Design
                            </td>
                            <td>
                                High
                            </td>
                            <td>
                                <img src="https://www.google.com/imgres?q=google%20images&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FGoogle_2015_logo.svg%2F800px-Google_2015_logo.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_logo&docid=YYcJ4Dx_qJL9iM&tbnid=ouvlTYelZsinyM&vet=12ahUKEwjE2YuzpMSNAxWynK8BHZcdMFwQM3oECBYQAA..i&w=800&h=271&hcb=2&itg=1&ved=2ahUKEwjE2YuzpMSNAxWynK8BHZcdMFwQM3oECBYQAA"
                                alt="no"/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RightContainer;