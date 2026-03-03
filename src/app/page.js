'use client';

import PulseGrid from '@/components/PulseGrid';
import HeroSection from '@/components/HeroSection';
import RoleCards from '@/components/RoleCards';

export default function Home() {
  return (
    <>
      <PulseGrid />
      <main className="scene">
        <HeroSection />
        <RoleCards />
        <footer className="footer">
          <div className="footer-line" />
          <p className="footer-text">
            whitewarriors · {new Date().getFullYear()} ·{' '}
            <a
              href="https://github.com/whitewarriors"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              github
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
