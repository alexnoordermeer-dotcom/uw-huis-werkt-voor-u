import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Wat u krijgt", href: "#wat-u-krijgt" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop + Mobile Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between h-[72px] px-4 sm:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src="/400dpiLogo.png" alt="Consumentenzaken Logo" style={{ height: '75px', width: 'auto' }} />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-[#4D4D4D] hover:text-[#99248F] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/REKENT1.HTM"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white rounded-lg transition-colors duration-200"
              style={{ backgroundColor: "#99248F" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7A1B72")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#99248F")}
            >
              Doe de gratis berekening
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#4D4D4D]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile slide-down menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] text-[#4D4D4D] hover:text-[#99248F] transition-colors font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/REKENT1.HTM"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white rounded-lg transition-colors duration-200 mt-1"
                style={{ backgroundColor: "#99248F" }}
              >
                Doe de gratis berekening
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile sticky bottom CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href="/REKENT1.HTM"
          className="flex items-center justify-center w-full px-6 py-3 text-base font-bold text-white rounded-lg transition-colors duration-200"
          style={{ backgroundColor: "#99248F" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7A1B72")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#99248F")}
        >
          Doe de gratis berekening
        </a>
      </div>
    </>
  );
};

export default Navbar;
