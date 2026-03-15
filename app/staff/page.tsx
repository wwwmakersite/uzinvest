'use client';

import Header from '../components/Header';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function TeamPage() {
  return (
    <div className="min-h-screen relative pt-22">
      {/* Общий фон */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/images/bg.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Header />
      <Team />
      <Footer />
    </div>
  );
}
