'use client';

import { useState } from 'react';
import styles from './page.module.css';



export default function Theme4Chan() {
    const timeString = "03/03/26(Tue)18:22:41";

    // State for the form
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    // State for user-added posts
    const [posts, setPosts] = useState([]);

    const handlePost = (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        // Generate a fake 4chan-style timestamp
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const pad = (n) => n.toString().padStart(2, '0');
        const timestamp = `${pad(now.getMonth() + 1)}/${pad(now.getDate())}/${now.getFullYear().toString().slice(-2)}(${days[now.getDay()]})${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

        // Generate a fake post number
        const newPostNum = 13370003 + posts.length + 1;

        const newPost = {
            id: newPostNum,
            name: name.trim() || 'Anonymous',
            time: timestamp,
            message: comment,
            replyTo: '>>13370001'
        };

        setPosts([...posts, newPost]);
        setComment('');
        setName('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.navLinks}>
                [ <a href="/" className={styles.link}>Return to Main Theme</a> ] [ <span className={styles.link}>Catalog</span> ] [ <span className={styles.link}>Archive</span> ]
            </div>

            <div className={styles.boardBanner}>
                <h1 className={styles.boardTitle}>/ww/</h1>
                <div className={styles.boardSubtitle}>Breaking, Building, and Modding</div>
            </div>
            <hr className={styles.hr} />

            <form className={styles.postForm} onSubmit={handlePost}>
                <div className={styles.formRow}>
                    <div className={styles.formLabel}>Name</div>
                    <div className={styles.formInput}>
                        <input
                            type="text"
                            placeholder="Anonymous"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formLabel}>Options</div>
                    <div className={styles.formInput}><input type="text" /></div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formLabel}>Comment</div>
                    <div className={styles.formInput}>
                        <textarea
                            placeholder="Write something..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button type="submit">Post</button>
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formLabel}>File</div>
                    <div className={styles.formInput}>
                        <input type="file" />
                    </div>
                </div>
            </form>
            <hr className={styles.hr} />

            <div className={styles.thread}>
                <div className={styles.opPost}>
                    <div className={styles.fileThumb}>
                        {/* Stand-in for an avatar or code block image */}
                        <div style={{ width: '250px', height: '250px', background: '#333', color: '#0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', textAlign: 'center' }}>
                            {`>_ SYSTEM ONLINE\n>_ CONTRACTS EXECUTING\n>_ NDAS ACTIVE`}
                        </div>
                    </div>

                    <div className={styles.postContent}>
                        <div className={styles.postInfo}>
                            <span className={styles.subject}>Welcome to /ww/</span>{' '}
                            <span className={styles.nameBlock}>
                                <span className={styles.name}>Anonymous</span>
                            </span>{' '}
                            <span className={styles.dateTime}>{timeString}</span>{' '}
                            <span className={styles.postNum}>
                                <a className={styles.link} title="Reply to this post">No.</a>
                                <a className={styles.link} title="Reply to this post">13370001</a>
                            </span>
                        </div>

                        <div className={styles.message}>
                            <span className={styles.greentext}>{'>'}be me</span>{'\n'}
                            <span className={styles.greentext}>{'>'}WhiteWarrior aka WW</span>{'\n'}
                            <span className={styles.greentext}>{'>'}spend years defending systems because downtime is expensive</span>{'\n'}
                            <span className={styles.greentext}>{'>'}learn to think like an attacker to stop attackers</span>{'\n'}
                            <span className={styles.greentext}>{'>'}build backend servers in PHP and Node that can actually handle traffic</span>{'\n'}
                            <span className={styles.greentext}>{'>'}manage cloud infrastructure across AWS, Azure, GCP</span>{'\n'}
                            <span className={styles.greentext}>{'>'}get bored</span>{'\n'}
                            <span className={styles.greentext}>{'>'}mod Bohemia games (DayZ/Arma) because rewriting engine mechanics in Enfusion/SQF is fun</span>{'\n\n'}
                            What are my stats, anons?
                            {'\n\n'}
                            <span style={{ fontWeight: 'bold' }}>CLASS:</span> Cyber Security & Server Engineer{'\n'}
                            <span style={{ fontWeight: 'bold' }}>SKILLS:</span> IDS/IPS, Firewalls, PKI, SIEM, APIs, Terraform, CI/CD{'\n'}
                            <span style={{ textDecoration: 'underline' }}>Note to feds:</span> most of my github repos are hidden under lock and key due to NDAs and contract work. You only see what I want you to see.
                        </div>
                    </div>
                </div>

                {/* Reply 1 */}
                <div className={styles.replyPost}>
                    <div className={styles.postInfo}>
                        <span className={styles.nameBlock}>
                            <span className={styles.name}>Anonymous</span>
                        </span>{' '}
                        <span className={styles.dateTime}>03/03/26(Tue)18:25:12</span>{' '}
                        <span className={styles.postNum}>
                            <a className={styles.link}>No.</a>
                            <a className={styles.link}>13370002</a>
                        </span>
                    </div>

                    <div className={styles.message}>
                        <span className={styles.quote}>{'>>13370001'}</span>{'\n'}
                        Based and redteam pilled. Do you even know how to center a div though?
                    </div>
                </div>
                <br />

                {/* Reply 2 (OP Response) */}
                <div className={styles.replyPost}>
                    <div className={styles.postInfo}>
                        <span className={styles.nameBlock}>
                            <span className={styles.name}>WhiteWarrior</span>
                            <span className={styles.tripcode}>!WWadmin##</span>
                        </span>{' '}
                        <span className={styles.dateTime}>03/03/26(Tue)18:28:44</span>{' '}
                        <span className={styles.postNum}>
                            <a className={styles.link}>No.</a>
                            <a className={styles.link}>13370003</a>
                        </span>
                    </div>
                    <div className={styles.file}>
                        <div className={styles.fileText}>
                            File: <a href="#" className={styles.link}>servers.jpg</a> (532 KB, 1200x800)
                        </div>
                    </div>
                    <div className={styles.message}>
                        <span className={styles.quote}>{'>>13370002'}</span>{'\n'}
                        No divs, only raw TCP packets and firewall rules.
                    </div>
                </div>
                <br />

                {/* Dynamically Render User Posts */}
                {posts.map((post) => (
                    <div key={post.id}>
                        <div className={styles.replyPost}>
                            <div className={styles.postInfo}>
                                <span className={styles.nameBlock}>
                                    <span className={styles.name}>{post.name}</span>
                                </span>{' '}
                                <span className={styles.dateTime}>{post.time}</span>{' '}
                                <span className={styles.postNum}>
                                    <a className={styles.link}>No.</a>
                                    <a className={styles.link}>{post.id}</a>
                                </span>
                            </div>
                            <div className={styles.message}>
                                <span className={styles.quote}>{post.replyTo}</span>{'\n'}
                                {post.message}
                            </div>
                        </div>
                        <br />
                    </div>
                ))}

            </div>

            <hr className={styles.hr} />
            <div className={styles.navLinks}>
                [ <span className={styles.link}>Top</span> ]
            </div>
        </div>
    );
}
