import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCheck, faGear, faImage, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import "./LeftContainer.css";

const LeftContainer = () => {
    return (
        <div className="leftcontainer">
            <h3 className="headerstyle">
                <FontAwesomeIcon className="icon icon_main" icon={faCheck} />
                <span>TaskTrackr</span>
            </h3>
            <ul>
                <li>
                    <FontAwesomeIcon className="icon" icon={faImage} />
                    <span>Tasks</span>
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faCalendar} />
                    <span>Calendar</span>
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faSquarePollVertical} />
                    <span>Reports</span>
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={faGear} />
                    <span>Settings</span>
                </li>
            </ul>
        </div>
    )
}

export default LeftContainer;