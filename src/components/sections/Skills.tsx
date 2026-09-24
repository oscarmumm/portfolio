import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaGitAlt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaBootstrap } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiReactrouter } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';

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
                    <span>
                        <BiLogoJavascript />
                    </span>
                    <span>JavaScript</span>
                </li>
                <li>
                    <span>
                        <BiLogoTypescript />
                    </span>
                    <span>TypeScript</span>
                </li>
                <li>
                    <span>
                        <FaGitAlt />
                    </span>
                    <span>Git</span>
                </li>
                <li>
                    <span>
                        <FaReact />
                    </span>
                    <span>React</span>
                </li>
                <li>
                    <span>
                        <RiTailwindCssFill />
                    </span>
                    <span>Talwind</span>
                </li>
                <li>
                    <span>
                        <FaBootstrap />
                    </span>
                    <span>Bootstrap</span>
                </li>
                <li>
                    <span>
                        <BiLogoPostgresql />
                    </span>
                    <span>PostgreSQL</span>
                </li>
                <li>
                    <span>
                        <SiReactrouter />
                    </span>
                    <span>React Router</span>
                </li>
                <li>
                    <span>
                        <FaNodeJs />
                    </span>
                    <span>Node JS</span>
                </li>
                <li>
                    <span>
                        <SiFramer />
                    </span>
                    <span>Motion</span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                </li>
            </ul>
        </div>
    );
};
