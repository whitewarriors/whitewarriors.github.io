'use client';

const ROLES = [
    {
        variant: 'security',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        label: 'Security',
        title: 'Cyber Infrastructure & Security',
        text: 'I spent years building and defending systems that couldn\'t afford to go down. Firewalls, threat hunting, incident response. The kind of work where you learn to think like an attacker to stay one step ahead.',
        tags: ['IDS/IPS', 'Firewalls', 'PKI', 'SIEM'],
    },
    {
        variant: 'backend',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        label: 'Backend',
        title: 'Server Engineering',
        text: 'Servers are my comfort zone. I design backend systems that handle real traffic without breaking a sweat. Clean APIs, solid databases, and deployment pipelines that just work.',
        tags: ['PHP', 'Node.js', 'APIs', 'SQL', 'Linux', 'Docker'],
    },
    {
        variant: 'cloud',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
            </svg>
        ),
        label: 'Cloud',
        title: 'Cloud Infrastructure',
        text: 'Designing and managing cloud environments that scale without drama. From provisioning to monitoring, keeping everything running smooth and secure.',
        tags: ['AWS', 'Azure', 'GCP'],
    },
    {
        variant: 'modding',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
        ),
        label: 'Modding',
        title: 'Bohemia Interactive Modder',
        text: 'I make mods for DayZ and Arma. Custom gameplay mechanics, scripted systems, full addons. If the engine supports it, I\'ve probably tried pushing it further.',
        tags: ['DayZ', 'Arma Reforger', 'Enfusion', 'SQF', 'EnScript'],
    },
];

export default function RoleCards() {
    return (
        <div className="cards-grid">
            {ROLES.map((role) => (
                <div key={role.variant} className={`card ${role.variant}`}>
                    <div className="card-inner">
                        <div className="card-icon">{role.icon}</div>
                        <p className="card-label">{role.label}</p>
                        <h2 className="card-title">{role.title}</h2>
                        <p className="card-text">{role.text}</p>
                        <div className="card-tags">
                            {role.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
