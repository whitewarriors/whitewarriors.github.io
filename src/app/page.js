import styles from './page.module.css';

export default function Theme4Chan() {
    const timeString = "03/03/26(Tue)18:22:41";

    return (
        <div className={styles.container}>
            <div className={styles.navLinks}>
                [ <span className={styles.link}>Catalog</span> ] [ <span className={styles.link}>Archive</span> ]
            </div>

            <div className={styles.boardBanner}>
                <h1 className={styles.boardTitle}>/ww/</h1>
                <div className={styles.boardSubtitle}>Breaking, Building, and Modding</div>
            </div>
            <hr className={styles.hr} />

            <div className={styles.thread}>
                <div className={styles.opPost}>
                    <div className={styles.fileThumb}>
                        <img
                            src="https://github.com/whitewarriors.png"
                            alt="WhiteWarrior"
                            className={styles.fakeImage}
                        />
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
                            <span className={styles.greentext}>{'>'}start modding Bohemia games (DayZ/Arma) because rewriting engine mechanics in Enfusion/SQF is fun</span>{'\n\n'}
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

            </div>

            <hr className={styles.hr} />
            <div className={styles.navLinks}>
                [ <span className={styles.link}>Top</span> ]
            </div>
        </div>
    );
}
