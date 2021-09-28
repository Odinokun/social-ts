import React from 'react';

function Aside() {
    return (
        <aside className="aside">
            <nav>
                <ul>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Messages</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Music</a></li>
                    <li><a href="/">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;