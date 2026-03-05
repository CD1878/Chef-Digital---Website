import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, MapPin, Store, Smartphone, TrendingUp, Clock, MousePointerClick } from "lucide-react";
import { Navbar, Footer, CTASection, CustomerStories } from "../App";

const businessTypes = ["restaurant", "pizzeria", "broodjeszaak", "steakhouse", "tapasbar", "sushi-bar", "visrestaurant"];

const GoogleMapsAds = () => {
    const [wordIdx, setWordIdx] = useState(0);
    const [searchText, setSearchText] = useState("");
    const fullSearchText = "italiaanse delicatessen amsterdam";

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setWordIdx((prev) => (prev + 1) % businessTypes.length);
        }, 2200);

        // Typing effect loop
        let currentIndex = 0;
        let isDeleting = false;

        const typeLoop = () => {
            if (!isDeleting && currentIndex <= fullSearchText.length) {
                setSearchText(fullSearchText.slice(0, currentIndex));
                currentIndex++;
                setTimeout(typeLoop, Math.random() * 50 + 50);
            } else if (isDeleting && currentIndex >= 0) {
                setSearchText(fullSearchText.slice(0, currentIndex));
                currentIndex--;
                setTimeout(typeLoop, 30);
            } else {
                isDeleting = !isDeleting;
                setTimeout(typeLoop, isDeleting ? 3000 : 500); // Wait longer when fully typed
            }
        };

        const timeout = setTimeout(typeLoop, 1000);

        return () => {
            clearInterval(wordInterval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white selection:bg-chef-accent selection:text-white flex flex-col pt-24">
            <Navbar />

            <main className="flex-grow flex flex-col">
                {/* Hero Section */}
                <section className="bg-white pt-24 pb-0 overflow-hidden text-center relative z-10">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-chef-dark mb-6 leading-[1.1]">
                            Jouw{" "}
                            <span className="inline-grid align-bottom text-chef-accent text-left">
                                {businessTypes.map((word, idx) => (
                                    <span
                                        key={idx}
                                        className={`col-start-1 row-start-1 pb-1 transition-all duration-500 ease-in-out ${idx === wordIdx
                                            ? "opacity-100 translate-y-0"
                                            : idx < wordIdx || (wordIdx === 0 && idx === businessTypes.length - 1)
                                                ? "opacity-0 -translate-y-4 pointer-events-none"
                                                : "opacity-0 translate-y-4 pointer-events-none"
                                            }`}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </span>{" "}
                            <br className="hidden md:block" />
                            bovenaan in Google Maps
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-3xl text-balance">
                            Gasten zoeken vaak pas kort van tevoren een plek om te eten. Met Google Maps Ads verschijn je direct bovenaan bij lokale zoekopdrachten. Perfect om dagelijks tafels te vullen.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2">
                                Nu beginnen
                            </button>
                            <button className="w-full sm:w-auto bg-transparent border border-black/10 text-chef-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/5 transition-all">
                                Neem contact op
                            </button>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto px-6 mt-16 lg:mt-24 relative flex justify-center">
                        {/* Hero Image / Visual */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="w-full bg-white rounded-[32px] md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-black/5 overflow-hidden relative group"
                        >
                            <img
                                src="/images/products/google-maps-ads-hero.png"
                                alt="Google Maps Ads voor restaurants"
                                className="w-full h-auto object-cover relative z-10"
                            />

                            {/* 2. Typing animation covering the static search bar text */}
                            <div className="absolute top-[3.7%] md:top-[3.7%] left-[4.2%] w-[14%] h-[3.5%] bg-white z-20 flex items-center">
                                <span className={`text-[#3c4043] font-sans text-[0.7vw] md:text-[0.8vw] lg:text-[0.9vw] whitespace-nowrap overflow-hidden border-r pr-0.5 ${searchText.length === fullSearchText.length ? 'border-transparent animate-pulse' : 'border-black'}`}>
                                    {searchText}
                                </span>
                            </div>

                            {/* 3. Pulsing map pins over the main interest points on the map */}
                            {/* Pin on sponsored popup (Feduzzi) */}
                            <div className="absolute top-[67%] left-[63%] w-[2%] lg:w-[1.5%] aspect-square z-20 pointer-events-none">
                                <div className="w-full h-full bg-blue-500/60 rounded-full animate-ping"></div>
                            </div>
                            {/* Secondary red map pin */}
                            <div className="absolute top-[36%] left-[51%] w-[1%] aspect-square z-20 pointer-events-none">
                                <div className="w-full h-full bg-red-500/60 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            {/* Third red pin */}
                            <div className="absolute top-[44%] left-[45%] w-[1%] aspect-square z-20 pointer-events-none">
                                <div className="w-full h-full bg-red-500/60 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
                            </div>

                            {/* 4. Highlight overlay on the sponsored result in the left sidebar (appears on hover) */}
                            <div className="absolute top-[13.5%] left-0 w-[21%] h-[15%] rounded-r-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-blue-500/10 border-y border-r border-blue-400/30 backdrop-blur-[1px] shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]"></div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="bg-chef-warm py-24 md:py-32 border-t border-black/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-chef-dark mb-4 leading-tight text-center">
                            Waarom Google Maps Ads werkt voor horeca
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 font-medium text-center mb-16 max-w-2xl mx-auto">
                            In de restaurantwereld draait alles om timing en zichtbaarheid. Versla de concurrentie en wees zichtbaar wanneer gasten willen reserveren.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <h3 className="text-2xl font-bold text-chef-dark mb-4">Direct resultaat & bovenaan in Maps</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                    Binnen enkele dagen kun je al bovenaan in Google Maps staan, zonder dat je maanden hoeft te wachten zoals bij SEO. Direct zichtbaar voor duizenden lokale zoekers.
                                </p>
                            </div>

                            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <h3 className="text-2xl font-bold text-chef-dark mb-4">Lokaal & conversiegericht</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                    Mensen zoeken op "lunch in de buurt" of "Italiaans restaurant". Wij zorgen dat je zichtbaar bent bij de juiste mensen, in jouw stad of buurt. Betaal alleen voor relevante interacties.
                                </p>
                            </div>

                            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <h3 className="text-2xl font-bold text-chef-dark mb-4">Table seating & rustige momenten</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                    Ideaal om tafels snel gevuld te krijgen op de minder drukke dagen, of juist om extra spontane gasten, toeristen en voorbijgangers aan te trekken.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specifics Section */}
                <section className="bg-white py-24">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 relative w-full flex justify-center lg:justify-end pr-0 lg:pr-8">
                            <img
                                src="/images/home_marketing/google-maps-phone.png"
                                alt="Google Maps ads telefoon weergave"
                                className="w-full max-w-[400px] object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight text-chef-dark mb-10 leading-tight">
                                Ideaal voor het aantrekken<br className="hidden lg:block" /> van last-minute gasten
                            </h2>

                            <ul className="space-y-6 mb-10 text-base md:text-lg text-gray-600">
                                <li className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span className="leading-relaxed"><strong>Spontane gasten of groepen</strong> die nú op hun telefoon zoeken naar een plek in de buurt.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span className="leading-relaxed"><strong>Zakelijke lunches en diners</strong> van bedrijven die last-minute een geschikte horecazaak nodig hebben.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span className="leading-relaxed"><strong>Toeristen en dagjesmensen</strong> die onbekend zijn in de stad en via Maps de dichtstbijzijnde opties vergelijken.</span>
                                </li>
                            </ul>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                                Met één klik op de route-, website- of belknop in Maps wordt vaak direct een reservering gemaakt. Dit leidt tot een zeer hoge conversie.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="bg-chef-warm py-32">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-chef-dark mb-16 leading-tight max-w-2xl mx-auto">
                            Wat doet Chef Digital bij een Maps campagne?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {[
                                { title: "Intake & Strategie", desc: "We stellen doelen en de ideale doelgroep scherp. Op welke dagen of momenten wil je meer gasten of tafels vullen?", icon: <TrendingUp className="text-chef-dark" /> },
                                { title: "Zoekwoorden & Targeting", desc: "Lokaal en hyper-gericht adverteren op relevante zoektermen zoals restaurants, bistro of lunchrooms in jouw directe omgeving.", icon: <MapPin className="text-chef-dark" /> },
                                { title: "Bedrijfsprofiel inrichten", desc: "We optimaliseren je Google Bedrijfsprofiel, want een volledig en actueel profiel resulteert in hogere conversie in Maps.", icon: <Store className="text-chef-dark" /> },
                                { title: "Continue optimalisatie", desc: "We testen advertenties, optimaliseren je budget en verlagen de kosten per gemaakte reservering of klik wekelijks.", icon: <MousePointerClick className="text-chef-dark" /> },
                                { title: "Retargeting", desc: "Twijfelende gasten of bezoekers van je website kunnen we via advertenties op een later moment opnieuw herinneren om te reserveren.", icon: <Clock className="text-chef-dark" /> },
                                { title: "Transparante rapportage", desc: "In 'The Kitchen' (ons platform) zie je iedere maand overzichtelijk hoeveel interacties en reserveringen je campagne oplevert.", icon: <Smartphone className="text-chef-dark" /> },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-[32px] p-8 border border-black/5 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-chef-dark mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="bg-white py-32 border-y border-black/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
                            <div className="w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-left mb-16 md:mb-0">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-chef-dark mb-6 leading-tight">
                                    Eerlijke en transparante prijzen
                                </h2>
                                <p className="text-lg md:text-xl text-gray-500 max-w-lg mb-8">
                                    Bespaar het uurloon van dure traditionele marketingbureaus. Voor een klein vast, laag maandbedrag zet Chef Digital de perfecte Google Maps campagne op en neemt het beheer uit handen.
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 max-w-sm">
                                {/* Maps Ads Pricing Card */}
                                <div className="bg-white rounded-[32px] p-10 border border-blue-200 shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] flex flex-col relative w-full h-full transform lg:-translate-y-2">
                                    <h3 className="text-3xl font-bold text-chef-dark mb-2">Google Maps Ads</h3>
                                    <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-[85%]">
                                        Ideaal om table seating te verbeteren. Meer gasten en zichtbaarheid. Exclusief advertentiebudget.
                                    </p>

                                    <div className="mb-8">
                                        <span className="text-5xl font-bold tracking-tighter text-chef-dark">€59</span>
                                        <span className="text-gray-400 font-medium ml-2 text-lg">/mnd</span>
                                    </div>

                                    <ul className="space-y-4 mb-2 flex-grow">
                                        <li className="flex items-center gap-3 text-sm text-gray-700">
                                            <Check className="w-5 h-5 text-gray-400 shrink-0" />
                                            <span>Campagne opzetten en beheren</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-700">
                                            <Check className="w-5 h-5 text-gray-400 shrink-0" />
                                            <span>Continue optimalisatie</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-700">
                                            <Check className="w-5 h-5 text-gray-400 shrink-0" />
                                            <span>Rapportage in "The Kitchen"</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-700">
                                            <Check className="w-5 h-5 text-gray-400 shrink-0" />
                                            <span>Na 6 maanden maandelijks opzegbaar</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-20">
                            <a href="/pakketten" className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)]">
                                Bekijk al onze pakketten <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </section>

                <CustomerStories />

                <CTASection
                    title="Klaar om direct meer tafelreserveringen te ontvangen?"
                    subtitle="Adverteer gericht en verschijn direct bovenaan de lijst op Google Maps wanneer gasten een restaurant in je buurt zoeken."
                    primaryButtonText="Start nu met adverteren"
                    secondaryButtonText="Neem contact op met sales"
                />
            </main>
        </div>
    );
};

export default GoogleMapsAds;
