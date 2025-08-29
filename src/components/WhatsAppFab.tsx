import React from 'react';

const PHONE = '+254101125353'; // Replace with your phone number in international format
const DEFAULT_TEXT = 'Hi, I have a question about a product.';

const WhatsAppFab: React.FC = () => {
  const openChat = () => {
    const encoded = encodeURIComponent(DEFAULT_TEXT);
    const url = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <button
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      onClick={openChat}
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-xl flex items-center justify-center text-white"
    >
      {/* WhatsApp SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.6 5.86L0 24l6.48-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.7 0-3.36-.45-4.8-1.31l-.34-.2-3.85.95.95-3.76-.22-.38A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5c5.25 0 9.5 4.25 9.5 9.5S17.25 21.5 12 21.5z" />
        <path d="M17.3 14.1c-.3-.15-1.8-.9-2.05-1-.25-.1-.43-.15-.62.15s-.71 1-.86 1.2c-.16.25-.32.3-.6.1-.28-.16-1.17-.43-2.22-1.36-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.58.12-.12.28-.32.43-.48.15-.16.2-.28.3-.46.1-.18 0-.34-.05-.48-.05-.12-.62-1.5-.85-2.06-.22-.54-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.33c-.25.25-.95.93-.95 2.28 0 1.34.97 2.64 1.1 2.82.12.18 1.9 2.9 4.6 3.96 2.7 1.07 2.7.72 3.18.67.48-.05 1.56-.63 1.78-1.24.22-.6.22-1.12.15-1.24-.07-.12-.25-.18-.55-.33z" />
      </svg>
    </button>
  );
};

export default WhatsAppFab;
