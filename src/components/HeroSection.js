'use client';

import { useEffect, useState } from 'react';

function StatusLed({ color, delay, label }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`led-row ${active ? 'on' : ''}`} style={{ animationDelay: `${delay}ms` }}>
            <span className={`led led-${color}`} />
            <span className="led-label">{label}</span>
        </div>
    );
}

function CableLine({ side, delay, color }) {
    return (
        <div
            className={`cable cable-${side}`}
            style={{
                '--cable-delay': `${delay}s`,
                '--cable-color': color,
            }}
        >
            <div className="cable-flow" />
        </div>
    );
}

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="server-display">
                <div className="cable-bundle cable-bundle-left">
                    <CableLine side="left" delay={0} color="var(--teal)" />
                    <CableLine side="left" delay={0.4} color="var(--accent-glow)" />
                    <CableLine side="left" delay={0.8} color="var(--teal)" />
                </div>

                <div className="rack-frame">
                    <div className="rack-top-bar">
                        <div className="rack-leds">
                            <StatusLed color="green" delay={800} label="PWR" />
                            <StatusLed color="green" delay={1000} label="NET" />
                            <StatusLed color="amber" delay={1200} label="SSD" />
                            <StatusLed color="green" delay={1400} label="CPU" />
                        </div>
                        <span className="rack-id">RACK-01 // ACTIVE</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="hero-title-main">HELLO WORLD</span>
                        <span className="hero-title-glow" aria-hidden="true">HELLO WORLD</span>
                    </h1>

                    <div className="rack-bottom-bar">
                        <span className="rack-stat">UPTIME 99.97%</span>
                        <span className="rack-stat">LATENCY 2ms</span>
                        <span className="rack-stat">NODES 12</span>
                    </div>
                </div>

                <div className="cable-bundle cable-bundle-right">
                    <CableLine side="right" delay={0.2} color="var(--accent-glow)" />
                    <CableLine side="right" delay={0.6} color="var(--teal)" />
                    <CableLine side="right" delay={1.0} color="var(--accent-glow)" />
                </div>
            </div>

            <p className="hero-tag">Portfolio</p>
            <p className="hero-identity">
                <span className="typewriter-text">
                    I&apos;m <span className="hero-name">WhiteWarrior</span> aka{' '}
                    <span className="hero-alias-wrapper">
                        <span className="hero-alias" data-text="WW">WW</span>
                    </span>
                </span>
                <span className="identity-cursor" />
            </p>
            <p className="hero-bio">
                I break things, build things, and mod things.
                Security by trade, servers by habit, game modding because it&apos;s fun.
            </p>
            <div className="hero-warning">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>Most repos are private due to contract work and non-disclosure agreements.</span>
            </div>
        </section>
    );
}
