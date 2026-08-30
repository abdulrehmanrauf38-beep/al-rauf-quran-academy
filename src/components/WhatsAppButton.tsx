"use client";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/923712215078?text=Assalamu%20Alaikum%2C%20I'm%20interested%20in%20learning%20more%20about%20Al%20Rauf%20International%20Quran%20Academy";

  return (
    <aside
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group pointer-events-auto"
    >
      {/* Tooltip on hover (desktop only) */}
      <span
        role="tooltip"
        className="hidden md:inline-flex items-center gap-2 mr-3 px-3.5 py-1.5 bg-stone-900/90 text-white text-xs font-semibold rounded-full shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-stone-700/50 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        Chat with us on WhatsApp
      </span>

      {/* Floating Button Anchor */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Al Rauf International Quran Academy on WhatsApp"
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/40 hover:shadow-2xl hover:shadow-[#25D366]/60 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      >
        {/* Subtle Pulse Animation Ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"
        />

        {/* WhatsApp Vector Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.84.5 3.565 1.37 5.06L2 22l5.085-1.335A9.96 9.96 0 0012.004 22c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm5.83 14.28c-.24.68-1.22 1.25-1.99 1.34-.52.06-1.2.1-3.48-.85-2.92-1.21-4.81-4.18-4.96-4.38-.14-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.03.9 2.18.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.28.1 1.77.83 2.08.98.31.15.51.23.59.36.08.13.08.76-.16 1.44z" />
        </svg>
      </a>
    </aside>
  );
}
