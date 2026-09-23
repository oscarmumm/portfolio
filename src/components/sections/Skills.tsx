import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

export const Skills = () => {
    return (
        <div className="p-4">
            <h2>Skills</h2>
            <ul>
                <li>
                    <span>
                        <FaHtml5 />
                    </span>
                    <span>HTML</span>
                </li>
                <li>
                    <span>
                        <FaCss3Alt />
                    </span>
                    <span>CSS</span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                </li>
            </ul>
        </div>
    );
};
