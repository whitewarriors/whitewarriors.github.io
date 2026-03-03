import './globals.css';

export const metadata = {
  title: 'WhiteWarriors',
  description:
    'Personal portfolio of WhiteWarriors. Ex Cyber Infrastructure & Security Specialist, Backend Server Engineer, and Bohemia Interactive modder for DayZ and Arma.',
  keywords: [
    'cybersecurity',
    'backend developer',
    'DayZ modding',
    'Arma 3 modding',
    'Bohemia Interactive',
    'portfolio',
  ],
  openGraph: {
    title: 'WhiteWarriors',
    description:
      'Ex Cyber Infrastructure & Security Specialist, Backend Engineer, and Bohemia Interactive Modder.',
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
