import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({match}) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tinder"/>
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>Programador.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button>
                            <img src={like} alt="Like"/>
                        </button>                    
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>Programador.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button>
                            <img src={like} alt="Like"/>
                        </button>                    
                    </div>
                </li>                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>Programador.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button>
                            <img src={like} alt="Like"/>
                        </button>                    
                    </div>
                </li>                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>Programador.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button>
                            <img src={like} alt="Like"/>
                        </button>                    
                    </div>
                </li>                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt=""/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>Programador.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button>
                            <img src={like} alt="Like"/>
                        </button>                    
                    </div>
                </li>
            </ul>
        </div>
    )
}