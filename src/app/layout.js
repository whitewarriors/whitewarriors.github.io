import './globals.css';

export const metadata = {
  title: '/ww/',
  description: 'WhiteWarrior - Cyber Infrastructure & Security Specialist, Backend Server Engineer, and Modder.',
  keywords: [
    'cybersecurity',
    'backend developer',
    'DayZ modding',
    'Arma 3 modding',
    'Bohemia Interactive',
    'portfolio',
  ],
  openGraph: {
    title: '/ww/ - WhiteWarrior Portfolio',
    description: 'Breaking, Building, and Modding',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
