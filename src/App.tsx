import { motion } from "motion/react";
import { ChevronDown, ChevronRight, ArrowRight, Globe, Github, Instagram, Linkedin, Twitter, Lock, Check, MessageCircle, LineChart, ChefHat } from "lucide-react";
import HorecaWebsite from "./pages/HorecaWebsite";
import { useState, useEffect } from "react";

// --- Components ---

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center">
            <img
              src="/images/logos/chef-digital-logo.png"
              alt="Chef Digital"
              className="h-20 md:h-24 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-6 text-chef-dark/70 font-medium text-sm">
            <a href="/about" className="hover:text-chef-dark transition-colors">Over ons</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-chef-dark transition-colors py-4">
                Producten <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 lg:-translate-x-[35%] w-[85vw] md:w-[80vw] lg:w-max min-w-max bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-6 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 z-50 overflow-y-auto max-h-[85vh] lg:overflow-visible lg:max-h-none">
                {/* Per sector column */}
                <div className="flex flex-col w-full lg:w-80 pr-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-black/5 pb-6 lg:pb-0">
                  <h4 className="font-bold text-lg text-chef-dark mb-4 lg:mb-6 border-b border-black/10 pb-4">Per sector</h4>
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <a href="/restaurants" className="group/item flex flex-col">
                      <span className="font-bold text-chef-dark group-hover/item:text-chef-accent transition-colors text-base">Restaurants</span>
                      <span className="text-sm text-gray-500 mt-1 font-normal">Geef je restaurant een boost</span>
                    </a>
                    <a href="/cafes-bars" className="group/item flex flex-col">
                      <span className="font-bold text-chef-dark group-hover/item:text-chef-accent transition-colors text-base">Cafés & Bars</span>
                      <span className="text-sm text-gray-500 mt-1 font-normal">Direct bovenaan in Google</span>
                    </a>
                    <a href="/beachclubs" className="group/item flex flex-col">
                      <span className="font-bold text-chef-dark group-hover/item:text-chef-accent transition-colors text-base">Beachclubs</span>
                      <span className="text-sm text-gray-500 mt-1 font-normal">Bereik alle badgasten & toeristen</span>
                    </a>
                  </div>
                </div>

                {/* Services columns */}
                <div className="flex flex-col flex-grow">
                  <h4 className="font-bold text-lg text-chef-dark mb-4 lg:mb-6 border-b border-black/10 pb-4">Producten</h4>
                  <div className="flex flex-col md:flex-row gap-8 lg:gap-12 flex-wrap lg:flex-nowrap">
                    <div className="flex flex-col gap-4 lg:gap-6 w-full md:w-60">
                      <a href="/horeca-website" className="group/item flex flex-col">
                        <span className="font-bold text-chef-dark group-hover/item:text-chef-accent transition-colors text-base">Horeca Website</span>
                        <span className="text-sm text-gray-500 mt-1 font-normal">Geen omkijken meer naar</span>
                      </a>
                      <a href="/google-search-ads" className="group/item flex flex-col">
                        <span className="font-bold text-chef-dark group-hover/item:text-chef-accent transition-colors text-base">Google Search Ads</span>
                        <span className="text-sm text-gray-500 mt-1 font-normal">Direct méér offerte aanvragen & groepen</span>
                      </a>
                      <a href="/google-maps-ads" className="group/item flex flex-col">
                        <span className="font-bold text-chef-dark group-hover/item:text-chef-accent transition-colors text-base">Google Maps Ads</span>
                        <span className="text-sm text-gray-500 mt-1 font-normal">Lokaal beter vindbaar en zichtbaar</span>
                      </a>
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-6 w-full md:w-56">
                      <a href="/email-campagnes" className="group/item flex flex-col">
                        <span className="font-bold text-chef-dark group-hover/item:text-chef-accent transition-colors text-base">Email campagnes</span>
                        <span className="text-sm text-gray-500 mt-1 font-normal">Haal meer uit je bestaande gasten</span>
                      </a>
                      <a href="/review-management" className="group/item flex flex-col">
                        <span className="font-bold text-chef-dark group-hover/item:text-chef-accent transition-colors text-base">Review management</span>
                        <span className="text-sm text-gray-500 mt-1 font-normal">Meer reviews via Rankmaster</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/how-it-works" className="hover:text-chef-dark transition-colors">Hoe het werkt</a>
            <a href="/customers" className="hover:text-chef-dark transition-colors">Klanten</a>
            <a href="/pricing" className="hover:text-chef-dark transition-colors">Pakketten</a>
            <a href="/contact" className="hover:text-chef-dark transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-chef-dark text-sm font-medium hover:text-chef-dark/80 transition-colors">Inloggen</a>
          <a href="/demo" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-900 transition-all shadow-md">Demo aanvragen</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'restaurant' | 'kitchen'>('restaurant');

  return (
    <section className="bg-white pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-chef-dark max-w-5xl mx-auto leading-[1.1]"
        >
          Meer gasten door een betere online zichtbaarheid van jouw horecazaak
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-lg md:text-xl text-chef-dark/80 max-w-4xl mx-auto leading-relaxed"
        >
          Ruim <span className="text-black font-semibold">210 restaurants</span> maken gebruik van Chef Digital. Van lokale pizzeria's tot ketens met meerdere locaties. Wij zetten jouw zaak digitaal op de kaart al <span className="text-black font-semibold">vanaf €129 per maand</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-[240px] bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-900 transition-all shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)]">
            Afspraak maken
          </button>
          <a href="/pakketten" className="w-full sm:w-[240px]">
            <button className="w-full bg-transparent border border-black/10 text-chef-dark px-8 py-4 rounded-full font-semibold text-base hover:bg-black/5 transition-all">
              Pakketten
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 relative max-w-5xl mx-auto flex flex-col items-center"
        >
          <div className="w-full rounded-[40px] overflow-hidden shadow-2xl relative aspect-[16/10] sm:aspect-video transition-all duration-500">
            <img
              key={activeTab}
              src={activeTab === 'restaurant' ? "/images/hero.png" : "/images/dashboard.png"}
              alt={activeTab === 'restaurant' ? "Restaurant" : "The Kitchen platform"}
              className="w-full h-full object-cover animate-in fade-in duration-500 bg-gray-100"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 bg-white px-8 py-3 rounded-full border border-gray-200 shadow-sm z-10 w-auto">
            <span
              onClick={() => setActiveTab('restaurant')}
              className={`text-sm font-semibold cursor-pointer transition-colors ${activeTab === 'restaurant' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Restaurant
            </span>
            <button
              onClick={() => setActiveTab(activeTab === 'restaurant' ? 'kitchen' : 'restaurant')}
              className={`w-14 h-8 rounded-full relative p-1 transition-colors duration-300 focus:outline-none ${activeTab === 'kitchen' ? 'bg-black' : 'bg-gray-300'}`}
              aria-label="Toggle image"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${activeTab === 'kitchen' ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </button>
            <span
              onClick={() => setActiveTab('kitchen')}
              className={`text-sm font-semibold cursor-pointer transition-colors ${activeTab === 'kitchen' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
            >
              The Kitchen platform
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LogoImage = ({ name, src }: { key?: string; name: string; src: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-40 md:w-56 h-16 md:h-20 flex items-center justify-center shrink-0">
        <span className="text-2xl font-bold text-gray-300 hover:text-gray-400 transition-colors cursor-default whitespace-nowrap">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="w-40 md:w-56 h-16 md:h-20 flex items-center justify-center shrink-0">
      <img
        src={src}
        alt={name}
        className="max-h-full max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
        onError={() => setError(true)}
      />
    </div>
  );
};

const LogoTicker = () => {
  // Dit is de gereserveerde lijst met logo's.
  // Zolang het bestand (bijv. gymshark.png, gisou.png) niet bestaat, 
  // wordt op de website automatisch de gewone tekst (zoals voorheen) getoond.
  const logos = [
    { name: "Belly of the Beast", src: "/images/logos/Belly of the Beast - Chef Digital.png" },
    { name: "Cafe Molenpad", src: "/images/logos/Cafe Molenpad - Chef Digital.png" },
    { name: "Café Kramer", src: "/images/logos/Café Kramer.png" },
    { name: "Café Luxembourg", src: "/images/logos/Café Luxembourg.png" },
    { name: "Café Mojo", src: "/images/logos/Café Mojo - Chef Digital.png" },
    { name: "Dutch Courage", src: "/images/logos/Dutch Courage.png" },
    { name: "Good Food Group", src: "/images/logos/Good Food Group.png" },
    { name: "Het Paardje", src: "/images/logos/Het Paardje - Chef Digital.png" },
    { name: "Kim's So Korean Food", src: "/images/logos/Kim's So Korean Food - Chef Digital.png" },
    { name: "Lola's Diemen", src: "/images/logos/Lola's Diemen - Chef Digital.png" },
    { name: "Onze Zaak", src: "/images/logos/Onze Zaak - Chef Digital.png" },
    { name: "Pompstation", src: "/images/logos/Pompstation - Chef Digital.png" },
    { name: "Spaghetteria", src: "/images/logos/Spaghetteria - Chef Digital.png" },
    { name: "Venster33", src: "/images/logos/Venster33- Chef Digital.png" },
    { name: "Auberge", src: "/images/logos/auberge.png" },
    { name: "Dr Wines", src: "/images/logos/dr wines.png" },
    { name: "Happy Tosti", src: "/images/logos/happy tosti.png" }
  ];

  return (
    <div className="bg-white py-10 border-b border-gray-100 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-5">
            {logos.map((logo, index) => (
              <LogoImage key={`${logo.name}-${index}`} name={logo.name} src={logo.src} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const MarketingSection = () => {
  return (
    <section className="bg-chef-warm py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Één plek voor alle marketing van jouw horecazaak
          </h2>
          <p className="mt-6 text-lg md:text-xl text-chef-dark/90 font-medium leading-relaxed max-w-2xl">
            Resultaatgerichte online marketing voor horecazaken tegen eerlijke tarieven. Geen logge marketingbureaus met hoge facturen, maar een slimme en efficiënt georganiseerde aanpak die echt werkt. Snel schakelen, betrouwbaar en bereikbaar op horecatijden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Top Card */}
          <div className="lg:col-span-3 bg-black rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col min-h-[500px] relative">
            <div className="max-w-xl z-10 relative flex flex-col h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Horeca websites
              </h3>
              <p className="text-gray-400 font-semibold mb-4 text-lg">Geen opstartkosten, geen commissies</p>
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-sm">
                Wij doen alles qua bouw, beheer en updates. Jij bespaart kostbare tijd en hebt nergens omkijken naar.
              </p>
              <p className="text-white font-bold text-xl mb-10">
                €129 per maand
              </p>
              <div className="mt-auto">
                <button className="bg-transparent text-white border border-white/20 px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-all w-max inline-block">
                  Bekijk meer
                </button>
              </div>
            </div>

            {/* Absolute positioning for user image */}
            <div className="absolute right-0 bottom-0 top-0 w-full md:w-[60%] z-0 flex items-center justify-end pointer-events-none p-8">
              <img src="/images/home_marketing/horeca-websites-collage.png" alt="Horeca websites" className="w-full max-h-full object-contain object-right drop-shadow-2xl" />
            </div>
          </div>

          {/* Small Left Card */}
          <div className="lg:col-span-2 bg-white rounded-[32px] p-8 md:p-12 border border-blue-200 shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] flex flex-col relative overflow-hidden min-h-[450px]">
            <div className="z-10 w-full flex flex-col flex-grow max-w-sm">
              <h3 className="text-2xl font-bold text-chef-dark mb-2">Google Maps ads</h3>
              <p className="text-gray-400 font-semibold mb-6">Direct boven je concurrenten</p>

              <p className="text-chef-dark/80 mb-8 leading-relaxed text-sm md:text-base max-w-xs">
                Meer tafelreserveringen doordat je direct bovenaan staat in Google Maps en Local Search bij gasten die nú op zoek zijn naar een plek om te eten of drinken.
              </p>

              <div className="mt-auto">
                <p className="font-bold text-lg">€59 per maand</p>
                <p className="text-xs text-gray-500 mb-8">*Excl. advertentie budget</p>

                <button className="flex items-center gap-2 font-bold text-chef-dark hover:text-chef-accent transition-colors w-max relative z-20 mt-2">
                  Lees meer <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 translate-x-4 translate-y-12 w-[75%] max-w-[480px] flex justify-end pointer-events-none">
              <img src="/images/home_marketing/google-maps-phone.png" alt="Google Maps ads" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>

          {/* Small Right Card */}
          <div className="lg:col-span-1 bg-white rounded-[32px] p-8 md:p-12 pb-48 lg:pb-60 shadow-sm border border-black/5 flex flex-col relative overflow-hidden min-h-[450px]">
            <div className="z-10 flex flex-col h-full flex-grow">
              <h3 className="text-2xl font-bold text-chef-dark mb-2">Google Search ads</h3>
              <p className="text-gray-400 font-semibold mb-6">Meer eventaanvragen</p>
              <p className="text-chef-dark/80 leading-relaxed text-sm lg:text-base mb-8 max-w-sm">
                Meer formulieraanvragen voor borrels, groepen, feestjes en evenementen door direct zichtbaar te zijn op de juiste zoekintentie.
              </p>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[35%] w-[85%] max-w-[280px] flex justify-center pointer-events-none z-0">
              <img src="/images/home_marketing/google-search-mockup-new.png" alt="Google Search ads" className="w-full h-auto object-contain rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5" />
            </div>
          </div>

          {/* Bottom Left Card (Email Marketing) */}
          <div className="lg:col-span-1 bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col relative overflow-hidden min-h-[450px]">
            <div className="z-10 flex flex-col h-full flex-grow">
              <h3 className="text-2xl font-bold text-chef-dark mb-2">Email marketing</h3>
              <p className="text-gray-400 font-semibold mb-6">Nodig bestaande gasten opnieuw uit.</p>
              <p className="text-chef-dark/80 leading-relaxed text-sm lg:text-base mb-8 max-w-sm">
                Volledig AI gestuurde emails waarbij gekeken wordt wat voor jouw zaak belangrijk is. Gemiddeld reserveert 3,5% van de ontvangers opnieuw een tafel.
              </p>

              <div className="mt-auto">
                <p className="font-bold text-lg">€99 per maand</p>
                <button className="mt-6 flex items-center gap-2 font-bold text-chef-dark hover:text-chef-accent transition-colors w-max relative z-20">
                  Lees meer <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 translate-x-[40%] translate-y-[20%] w-[60%] max-w-[240px] flex justify-end pointer-events-none z-0">
              <img src="/images/home_marketing/email-marketing.png" alt="Email Marketing" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>

          {/* Bottom Right Card (Rankmaster) */}
          <div className="lg:col-span-2 bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col relative overflow-hidden min-h-[450px]">
            <div className="z-10 w-full flex flex-col flex-grow max-w-sm">
              <h3 className="text-2xl font-bold text-chef-dark mb-2">Rankmaster</h3>
              <p className="text-gray-400 font-semibold mb-6">Volledig geautomatiseerd reviewmanagement</p>

              <p className="text-chef-dark/80 mb-8 leading-relaxed text-sm md:text-base max-w-xs">
                Genereer meer 5 sterrenreviews en voorkom dat slechte reviews op Google belanden. Daarnaast maken we een maandelijkse sentiment analyse en is het mogelijk om reviews automatisch te beantwoorden.
              </p>

              <div className="mt-auto">
                <button className="flex items-center gap-2 font-bold text-chef-dark hover:text-chef-accent transition-colors w-max relative z-20 mt-2">
                  Lees meer <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Note content placeholder */}
            <div className="absolute right-0 bottom-0 translate-x-4 translate-y-12 w-[75%] max-w-[480px] flex justify-end pointer-events-none">
              {/* Image goes here once uploaded */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <svg width="80" height="24" viewBox="0 0 54 16" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M40.7085 3.35548C41.6337 3.35548 42.3838 2.60433 42.3838 1.67774C42.3838 0.751151 41.6337 0 40.7085 0C39.7833 0 39.0332 0.751151 39.0332 1.67774C39.0332 2.60433 39.7833 3.35548 40.7085 3.35548ZM22.8399 5.21793C19.8747 5.21793 17.4678 7.63388 17.4678 10.5979C17.4678 13.5619 19.8803 15.9779 22.8399 15.9779C25.7996 15.9779 28.212 13.5619 28.212 10.5979C28.212 7.63388 25.8052 5.21793 22.8399 5.21793ZM22.8399 13.4332C21.2819 13.4332 20.0143 12.1638 20.0143 10.6035C20.0143 9.04322 21.2819 7.77369 22.8399 7.77369C24.3979 7.77369 25.6656 9.04322 25.6656 10.6035C25.6656 12.1638 24.3979 13.4332 22.8399 13.4332ZM11.4589 5.20637C11.5985 5.20637 11.7326 5.21196 11.8722 5.22315C13.0449 5.32381 14.123 5.86628 14.9101 6.7499C15.6974 7.62791 16.133 8.76322 16.133 9.94317V15.7594H13.5642V9.87047C13.5586 8.71281 12.6037 7.76772 11.4422 7.76772C11.3752 7.76772 11.3026 7.77331 11.23 7.77891C10.1913 7.88517 9.32014 8.86947 9.32014 9.93199V15.7594H6.7514V9.88725C6.74581 8.724 5.79648 7.77331 4.63495 7.77331C4.56795 7.77331 4.49534 7.77891 4.42275 7.7845C3.38966 7.89076 2.51293 8.87506 2.51293 9.94317V15.7594H0V9.87047C0 7.29795 2.09411 5.20637 4.66287 5.20637C5.94726 5.20637 7.17022 5.74324 8.05254 6.67719C8.93489 5.73765 10.1634 5.20637 11.4589 5.20637ZM32.1664 0.251824H29.5976V15.7709H32.1664V0.251824ZM34.5114 0.251824H37.0802V15.7709H34.5114V0.251824ZM41.994 5.47478H39.4253V15.7649H41.994V5.47478ZM52.508 6.72752C53.4685 7.7062 53.999 8.9925 53.999 10.357V11.537H46.1866C46.5328 12.7786 47.6609 13.651 48.9676 13.651C49.9896 13.651 50.9109 13.1309 51.4414 12.2529L51.5475 12.0796L53.6695 13.1253L53.5467 13.3322C52.5806 14.9596 50.8104 15.9719 48.923 15.9719H48.9174C47.4766 15.9719 46.1252 15.4015 45.1033 14.3668C44.0814 13.3322 43.5285 11.9676 43.5453 10.5248C43.562 9.10994 44.1205 7.7845 45.1145 6.78345C46.1084 5.78239 47.4375 5.22315 48.8447 5.20637H48.9118C50.2687 5.20637 51.5419 5.74884 52.508 6.72752ZM51.4023 9.41192C51.0337 8.31577 49.984 7.54402 48.8112 7.54402C47.6385 7.54402 46.5887 8.31577 46.2257 9.41192H51.4023Z" fill="white" />
            </svg>
          </div>
          <div>
            <h5 className="font-bold mb-6">Producten</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Online betalingen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">In-person betalingen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terugkerende betalingen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Checkout</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acceptance & Risk</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Partners</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Betalingen voor SaaS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marktplaatsen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Franchises</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agencies</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Developers</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Libraries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integraties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentatie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Bedrijf</h5>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Over ons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tarieven</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nieuws</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-50 text-xs">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span>© 2025 Chef Digital B.V.</span>
            <a href="#" className="hover:text-white transition-colors">Gebruikersovereenkomst</a>
            <a href="#" className="hover:text-white transition-colors">Privacyverklaring</a>
            <a href="#" className="hover:text-white transition-colors">Responsible Disclosure</a>
            <a href="#" className="hover:text-white transition-colors">Klokkenluidersbeleid</a>
          </div>
          <div className="flex items-center gap-4">
            <Instagram size={18} className="hover:text-white cursor-pointer" />
            <Twitter size={18} className="hover:text-white cursor-pointer" />
            <Github size={18} className="hover:text-white cursor-pointer" />
            <Linkedin size={18} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const DashboardSection = () => {
  return (
    <section className="bg-chef-warm py-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-[40px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[500px]">
          <div className="z-10 w-full md:w-1/2 flex flex-col items-start pr-0 md:pr-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Alle resultaten op één plek in The Kitchen
            </h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-12 max-w-sm">
              Zie in één oogopslag wat je marketing echt oplevert.<br />
              Van reserveringen en telefoontjes tot websitebezoekers en nieuwe reviews. Alle resultaten overzichtelijk bij elkaar, zodat je direct weet waar je groei vandaan komt.
            </p>
            <button className="bg-transparent text-white border border-white/20 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all w-max mt-auto">
              Bekijk meer
            </button>
          </div>

          <div className="relative w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end z-10 translate-y-8 md:translate-y-16 lg:translate-y-24">
            <img
              src="/images/the-kitchen-laptop.png"
              alt="The Kitchen Performance Platform"
              className="w-full max-w-[650px] h-auto object-contain drop-shadow-2xl translate-x-4 md:translate-x-12"
              onError={(e) => { e.currentTarget.src = "/images/dashboard.png"; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const USPsSection = () => {
  return (
    <section className="bg-chef-warm py-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            Wij zijn ontstaan vanuit de horeca wereld en begrijpen de business
          </h2>
          <p className="text-lg text-chef-dark font-medium leading-relaxed">
            Resultaatgerichte online marketing voor horecazaken tegen eerlijke tarieven. Geen logge marketingbureaus met hoge facturen, maar een slimme en efficiënt georganiseerde aanpak die echt werkt. Snel schakelen, betrouwbaar en bereikbaar op horecatijden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* USP 1 */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col h-full min-h-[380px]">
            <h3 className="text-2xl font-bold text-chef-dark mb-4">Bespaar tijd</h3>
            <p className="text-chef-dark/80 leading-relaxed text-sm lg:text-base mb-8">
              Laat ons jouw online marketing volledig verzorgen, zodat jij je kunt focussen op je onderneming. Dankzij onze korte communicatielijnen voelen wij daarbij echt als een verlengstuk van jouw zaak.
            </p>
            <div className="mt-auto">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all w-max inline-block shadow-md">
                Learn more
              </button>
            </div>
          </div>

          {/* USP 2 */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col h-full min-h-[380px]">
            <h3 className="text-2xl font-bold text-chef-dark mb-4">Transparant</h3>
            <p className="text-chef-dark/80 leading-relaxed text-sm lg:text-base">
              Dankzij onze extreme transparantie hebben wij alle verborgen kosten geëlimineerd. Je weet altijd precies waar je voor betaalt en profiteert zo van eerlijke prijzen en maximale waarde voor jouw horecazaak.
            </p>
          </div>

          {/* USP 3 */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5 flex flex-col h-full min-h-[380px]">
            <h3 className="text-2xl font-bold text-chef-dark mb-4">Altijd up-to-date</h3>
            <p className="text-chef-dark/80 leading-relaxed text-sm lg:text-base">
              Hosting, onderhoud en aanpassingen zijn inbegrepen in je abonnement. Je website blijft veilig, snel en actueel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CustomerStories = () => {
  return (
    <section className="bg-chef-warm py-24 border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Het digital marketing platform voor de horeca
          </h2>
          <p className="mt-6 text-lg md:text-xl text-chef-dark/80 font-medium leading-relaxed">
            Meer dan 200 horecazaken maken inmiddels gebruik van het Chef Digital platform. Van kleine cafés en lokale restaurants tot grotere horecagroepen en beachclubs. Allemaal met hetzelfde doel: hun marketing slimmer organiseren, efficiënter werken en beter inzicht krijgen in wat online echt resultaat oplevert.
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex animate-marquee-fast gap-6">
          {[
            "/images/customers/dutch-courage.png",
            "/images/customers/in-de-wildeman.png",
            "/images/customers/cafe-kramer.png",
            "/images/customers/het-paardje.jpg"
          ].map((src, i) => (
            <div key={i} className="w-[400px] h-[520px] rounded-[32px] overflow-hidden flex-shrink-0 relative group cursor-pointer">
              <img src={src} alt="Customer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-8 w-24 bg-white/20 backdrop-blur-md rounded mb-4"></div>
                <p className="text-white font-medium text-lg">"Chef Digital maakt dingen zo makkelijk mogelijk."</p>
              </div>
            </div>
          ))}
          {/* Duplicate for marquee */}
          {[
            "/images/customers/dutch-courage.png",
            "/images/customers/in-de-wildeman.png",
            "/images/customers/cafe-kramer.png",
            "/images/customers/het-paardje.jpg"
          ].map((src, i) => (
            <div key={`dup-${i}`} className="w-[400px] h-[520px] rounded-[32px] overflow-hidden flex-shrink-0 relative group cursor-pointer">
              <img src={src} alt="Customer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-8 w-24 bg-white/20 backdrop-blur-md rounded mb-4"></div>
                <p className="text-white font-medium text-lg">"Chef Digital maakt dingen zo makkelijk mogelijk."</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTASection = ({ title, subtitle, primaryButtonText, secondaryButtonText }: { title: string, subtitle: string, primaryButtonText: string, secondaryButtonText: string }) => {
  return (
    <section className="bg-black py-24 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-start text-left">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl">
          {title}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-medium">
          {subtitle}
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-start gap-3 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#F07B2D] text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2">
            {primaryButtonText} <ChevronRight size={16} strokeWidth={3} className="ml-[-4px]" />
          </button>
          <button className="w-full sm:w-auto bg-[#2A2A2A] text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#3A3A3A] transition-all">
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="bg-white flex flex-col flex-grow">
      <div className="pt-40 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold tracking-tight text-chef-dark mb-6">
              Kies het pakket wat bij je onderneming past en groei door.
            </h1>
            <p className="text-lg text-gray-500 mb-10">
              Designed for every stage of your journey.<br />
              Start today, no credit card required.
            </p>

            <div className="flex items-center justify-center p-1 rounded-full mx-auto w-max mb-12">
              <div className="bg-gray-100 p-1 rounded-full flex gap-1">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isAnnual ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  Maandelijks
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${isAnnual ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                >
                  Jaarlijks
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Basic */}
            <div className="border border-gray-200 rounded-3xl p-8 bg-white flex flex-col hover:border-gray-300 transition-colors h-full">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">€129</span>
                <span className="text-gray-500 text-sm block mt-2">Per maand, gefactureerd per jaar</span>
              </div>
              <p className="font-semibold text-sm mb-6 pb-6 border-b border-gray-100">Ideaal als basis van de online zichtbaarheid.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span><strong>Mobiel vriendelijke website</strong><br />Géén opstartkosten en commissies</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <strong>Zoekmachine geoptimaliseerd</strong>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <strong>Google Maps vermelding</strong>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <strong>Koppeling met bestelplatformen</strong>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <strong>Koppeling met reserveersysteem</strong>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span><strong>Website beheer</strong><br />Chef Digital vult de website</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button className="w-full py-3 rounded-full border border-gray-200 font-semibold text-chef-dark hover:bg-gray-50 transition-colors">
                  Start met Basic
                </button>
              </div>
            </div>

            {/* Groei */}
            <div className="border border-gray-200 rounded-3xl p-8 bg-white flex flex-col hover:border-gray-300 transition-colors h-full relative">
              <h3 className="text-xl font-bold mb-4">Groei</h3>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-5xl font-bold">€289</span>
                <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Save 20%</span>
              </div>
              <span className="text-gray-500 text-sm block mb-6 -mt-4">Per maand, gefactureerd per jaar</span>
              <p className="font-semibold text-sm mb-6 text-black border-b border-gray-100 pb-6">Alles uit het Basic pakket +</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span><strong>Google Advertising</strong><br />Opzetten van Google Ads applicatie</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <strong>Flexibel advertentiebudget iedere maand</strong>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <strong>Overzichtelijke rapportage</strong>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span><strong>Toegang tot 'The Kitchen'</strong><br />24/7 inzicht in alle resultaten</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button className="w-full py-3 rounded-full border border-gray-200 font-semibold text-chef-dark hover:bg-gray-50 transition-colors">
                  Continue met Groei
                </button>
              </div>
            </div>

            {/* Full Support (Highlighted) */}
            <div className="border border-blue-200 shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] rounded-3xl p-8 bg-white flex flex-col relative transform lg:-translate-y-2 h-[calc(100%+16px)]">
              <h3 className="text-xl font-bold mb-4">Full support</h3>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-5xl font-bold">€389</span>
                <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Save 20%</span>
              </div>
              <span className="text-gray-500 text-sm block mb-6 -mt-4">Per maand, gefactureerd per jaar</span>
              <p className="font-semibold text-sm mb-6 text-black border-b border-gray-100 pb-6">Alles uit het Groei pakket +</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span><strong>E-mail marketing</strong><br />1 email campagne per maand<br />Verzending en rapportage</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-transparent select-none p-4">
                  Spacer text
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <button className="w-full py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                  Continue met Full support
                </button>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-10 mb-24">*Minimaal 6 maanden looptijd voor alle abonnementen.</p>

          {/* Add ons section */}
          <div className="max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-10 text-chef-dark tracking-tight">Add ons</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Google Maps Ads */}
              <div className="border border-gray-200 rounded-3xl p-8 bg-white flex flex-col hover:border-gray-300 transition-colors h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold">Google Maps Ads</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold">€59</span>
                    <span className="block text-[10px] text-gray-500 mt-1">Prijs per maand*</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  83% van de mensen zoekt een restaurant of horeca gelegenheid via Google Maps. Wij zorgen ervoor dat je bovenaan staat en beter zichtbaar bent op zoekwoorden zoals restaurant, café en bar
                </p>
              </div>

              {/* Extra Campagne */}
              <div className="border border-gray-200 rounded-3xl p-8 bg-white flex flex-col hover:border-gray-300 transition-colors h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold">Extra Campagne</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold">€59</span>
                    <span className="block text-[10px] text-gray-500 mt-1">Prijs per maand*</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  In het Groei pakket zit standaard een Google campagne. Voor €59 extra per stuk voeg je een extra campagne toe, bijvoorbeeld gericht op table seating of specifieke leadgeneratie.
                </p>
              </div>

              {/* Rankmaster */}
              <div className="border border-gray-200 rounded-3xl p-8 bg-white flex flex-col hover:border-gray-300 transition-colors h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold border-b-2 border-chef-dark pb-1 inline-block">Rankmaster</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold">€69</span>
                    <span className="block text-[10px] text-gray-500 mt-1">Prijs per maand*</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Beter vindbaar in Google Maps door je bedrijfsprofiel met relevante keywords te optimaliseren, meer reviews te genereren, automatisch te beantwoorden en krachtige post management door middel van AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Maak jouw zaak vandaag nog beter zichtbaar."
        subtitle="Klaar voor meer tafelreserveringen en eventaanvragen? Start vandaag met Chef Digital en zie direct het verschil."
        primaryButtonText="Nu beginnen"
        secondaryButtonText="Neem contact op met sales"
      />
    </div>
  );
};

// --- Main App ---

export default function App() {
  const currentPath = window.location.pathname;
  const isPricingPage = currentPath === '/pakketten' || currentPath === '/pricing';
  const isHorecaWebsitePage = currentPath === '/horeca-website';

  const LandingContent = () => (
    <>
      <Hero />
      <LogoTicker />
      <MarketingSection />
      <CustomerStories />
      <USPsSection />
      <DashboardSection />

      <CTASection
        title="Vereenvoudig betalingen en geldzaken"
        subtitle="Verhoog je inkomsten, verlaag je kosten en beheer al je geldzaken via Chef Digital."
        primaryButtonText="Start nu"
        secondaryButtonText="Neem contact op met sales"
      />
    </>
  );

  return (
    <div className="min-h-screen bg-white selection:bg-chef-accent selection:text-white flex flex-col">
      {isHorecaWebsitePage ? (
        <HorecaWebsite />
      ) : isPricingPage ? (
        <>
          <Navbar />
          <main className="flex-grow flex flex-col">
            <Pricing />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow flex flex-col">
            <LandingContent />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
