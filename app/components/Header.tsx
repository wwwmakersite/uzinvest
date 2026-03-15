'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Устанавливаем начальное значение только на клиенте
    setExchangeRate(13300);

    // Получение реального курса валют
    const fetchExchangeRate = async () => {
      try {
        // Используем API для получения реального курса UZS/USD
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates && data.rates.UZS) {
          setExchangeRate(Math.round(data.rates.UZS));
        }
      } catch (error) {
        console.error('Ошибка получения курса валют:', error);
        // Если API недоступен, используем примерный курс
        setExchangeRate(13300);
      }
    };

    fetchExchangeRate();
    // Обновление каждые 5 минут
    const interval = setInterval(fetchExchangeRate, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="UzInvest Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Навигация - десктоп */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Главная
            </a>
            <a href="/about" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              О нас
            </a>
            <a href="/projects" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Проекты
            </a>
            <a href="/licenses" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Лицензии
            </a>
            <a href="/staff" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Сотрудники
            </a>
            {/* <a href="/partners" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Партнеры
            </a> */}
            {/* <a href="/faq" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              FAQ
            </a> */}
          </nav>

          {/* Правая часть */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Курс валют */}
            <div className="flex items-center gap-1 md:gap-2 bg-gradient-to-r from-[#1A3A5C] to-[#2B4A6F] px-3 py-2 md:px-4 md:py-2 rounded-lg border border-[#1EB53A]/30">
              <span className="text-sm md:text-sm font-semibold text-white/90">UZS/USD:</span>
              <span className="text-[#FFC107] font-extrabold text-base md:text-base">
                13300
              </span>
            </div>

            {/* Бургер меню - мобильные */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-[#1A3A5C]/95 backdrop-blur-lg border-t border-white/10 shadow-2xl z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col p-4 space-y-3">
            <a 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            >
              Главная
            </a>
            <a 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            >
              О нас
            </a>
            <a 
              href="/projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            >
              Проекты
            </a>
            <a 
              href="/licenses" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            >
              Лицензии
            </a>
            <a 
              href="/staff" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            >
              Сотрудники
            </a>
            {/* <a 
              href="/partners" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            >
              Партнеры
            </a> */}
            {/* <a 
              href="#faq" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
            >
              FAQ
            </a> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
