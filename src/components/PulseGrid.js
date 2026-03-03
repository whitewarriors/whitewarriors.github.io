'use client';

import { useEffect, useRef } from 'react';

export default function PulseGrid() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let time = 0;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const SPACING = 50;
        const DOT_RADIUS = 1;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.008;

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            for (let x = 0; x < canvas.width; x += SPACING) {
                for (let y = 0; y < canvas.height; y += SPACING) {
                    const dx = x - cx;
                    const dy = y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    const wave = Math.sin(dist * 0.008 - time * 3) * 0.5 + 0.5;
                    const alpha = wave * 0.25 + 0.02;
                    const radius = DOT_RADIUS + wave * 1.2;

                    const hue = 230 + wave * 30;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${hue}, 70%, 65%, ${alpha})`;
                    ctx.fill();
                }
            }

            animId = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="grid-canvas" />;
}
