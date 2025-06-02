import React, { useState } from "react";
import { faBarsStaggered, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RightContainer.css"
import { prettyDOM } from "@testing-library/dom";

const RightContainer = () => {

    const [tasks , setTasks] = useState([]);
    const [checkboxStatus, setCheckboxStatus] = useState(false);

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

    const handleNewTask = () => {
        let des = document.getElementById("description").value;
        let date = document.getElementById("date").value;
        let tag = document.getElementById("tag").value;
        let priority = document.getElementById("selected").value;

        const task = {
            id: tasks.length,
            destext:des, 
            taskdate:date, 
            tagtext: tag, 
            prioritychoice:priority, 
            checkbox:false
        };
        setTasks(pretasks => [...pretasks, task]);
    }

    const handleTableCheckbox = (e) => {
        if(e.target.id == "topcheck") {
            if(checkboxStatus) checkboxStatus=false;
            else checkboxStatus= true;

            for(let i =0 ; i< tasks.length; i++) {
                tasks[i].checkbox = checkboxStatus;
            }
            setTasks((prevtask) => [...prevtask]);
        }
        else {
            let index = e.target.id;
            if(tasks[index].checkbox == true) {
                tasks[index].checkbox = false;
            }
            else {
                tasks[index].checkbox = true;
            }
            setTasks( (pretask) =>
                [...pretask]);
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
                <input type="text" name="description" id="description" placeholder="Description"/>
                <input type="date" placeholder="Date" name="date" id="date"/>
                <input type="text" placeholder="Tags" name="tag" id="tag"/>
                <select name="selected" id="selected">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                <button className="addtask" onClick={handleNewTask}>Add</button>
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
                                <input type="checkbox" name="tocheck" id="topcheck" onChange={handleTableCheckbox}/>
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
                        {tasks.map((data,i=0) => 
                            <tr key={data.id}>
                            <td>
                                <input type="checkbox" name="" id={i} checked={data.checkbox} onChange={handleTableCheckbox}/>
                            </td>
                            <td>
                                {data.destext}
                            </td>
                            <td>
                                {data.taskdate}
                            </td>
                            <td>
                                {data.tagtext}
                            </td>
                            <td>
                                {data.prioritychoice}
                                {i++}
                            </td>
                            <td>
                                <img src="https://www.google.com/imgres?q=google%20images&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FGoogle_2015_logo.svg%2F800px-Google_2015_logo.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_logo&docid=YYcJ4Dx_qJL9iM&tbnid=ouvlTYelZsinyM&vet=12ahUKEwjE2YuzpMSNAxWynK8BHZcdMFwQM3oECBYQAA..i&w=800&h=271&hcb=2&itg=1&ved=2ahUKEwjE2YuzpMSNAxWynK8BHZcdMFwQM3oECBYQAA"
                                alt="no"/>
                            </td>
                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RightContainer;