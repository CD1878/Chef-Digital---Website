import { useState, useEffect } from "react";
import { Check, X, ArrowRight, Smartphone, Zap, MonitorSmartphone, LineChart, Globe, Palette, ShoppingBag, ClipboardList, Plus, Star } from "lucide-react";
import { Navbar, Footer, CTASection, CustomerStories } from "../App";

const horecaCustomers = [
    { name: "Julie's", desktopImage: "/images/customers/desktop-julies.png", mobileImage: "/images/customers/mobile-julies.png" },
    { name: "Herberg Jan", desktopImage: "/images/customers/desktop-herberg-jan.jpg", mobileImage: "/images/customers/mobile-herberg-jan.png" },
    { name: "Onze Zaak", desktopImage: "/images/customers/desktop-onze-zaak.jpg", mobileImage: "/images/customers/mobile-onze-zaak.png" },
    { name: "Het Paardje", desktopImage: "/images/customers/desktop-het-paardje.jpg", mobileImage: "/images/customers/mobile-het-paardje.png" },
];

const HorecaWebsite = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % horecaCustomers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white selection:bg-chef-accent selection:text-white flex flex-col pt-24">
            <Navbar />

            <main className="flex-grow flex flex-col">
                {/* Hero Section */}
                <section className="bg-white pt-24 pb-0 overflow-hidden text-center relative z-10">
                    <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-chef-dark mb-6 leading-[1.1]">
                            Website voor restaurants en hospitality
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl text-balance">
                            Meer reserveringen via een professionele restaurantwebsite. Wij verzorgen de bouw en het volledige beheer, inclusief alle aanpassingen. Zo heb jij er geen omkijken naar en bespaar je tijd.
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

                    <div className="max-w-5xl mx-auto px-6 mt-4 lg:mt-6 relative flex justify-center perspective-[2000px] translate-y-[20%]">
                        {/* Desktop Browser Mockup */}
                        <div className="relative w-[85%] bg-white rounded-t-2xl shadow-[0_0_50px_rgba(0,0,0,0.15)] border-x border-t border-black/10 overflow-hidden z-10 transition-transform duration-700 ease-out origin-bottom">
                            {/* Browser Header macOS style */}
                            <div className="bg-[#f0f0f0] h-10 w-full flex items-center px-4 gap-2 border-b border-black/5">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                <div className="mx-auto bg-white/60 h-5 w-1/3 rounded-md border border-black/5 flex items-center justify-center"></div>
                            </div>
                            {/* Browser content placeholder */}
                            <div className="w-full aspect-[16/10] bg-gray-100 flex items-center justify-center relative overflow-hidden">
                                {horecaCustomers.map((customer, idx) => (
                                    <img
                                        key={idx}
                                        src={customer.desktopImage}
                                        alt={`Website ${customer.name}`}
                                        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${idx === currentIdx ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Mobile Device Mockup */}
                        <div className="absolute right-0 lg:-right-4 bottom-0 w-[28%] max-w-[220px] bg-white rounded-t-[32px] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.2)] border-x-[6px] border-t-[6px] border-[#1A1A1A] overflow-hidden transition-all duration-700 ease-out z-20 origin-bottom">
                            {/* Apple style Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[18px] bg-[#1A1A1A] rounded-b-xl z-20"></div>
                            <div className="w-full aspect-[9/18] bg-gray-100 relative overflow-hidden">
                                {horecaCustomers.map((customer, idx) => (
                                    <img
                                        key={idx}
                                        src={customer.mobileImage}
                                        alt={`Mobile Website ${customer.name}`}
                                        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${idx === currentIdx ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* Services Grid Section */}
                <section className="bg-chef-warm py-24 md:py-32 border-t border-black/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-chef-dark mb-4 leading-tight text-center">
                            Jij houdt tijd over, wij ontzorgen
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 font-medium text-center mb-16">
                            Voor slechts 129 euro per maand alles geregeld.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <h3 className="text-2xl font-bold text-chef-dark mb-4">Aanpassingen snel geregeld</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                    Wijzigingen voeren we meestal binnen 24 uur door. Denk aan nieuwe menu’s, actuele foto’s, openingstijden, vacatures of evenementen op je website.
                                </p>
                            </div>

                            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <h3 className="text-2xl font-bold text-chef-dark mb-4">Altijd up-to-date en veilig</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                    Je website blijft technisch up-to-date, veilig en goed werkend. Updates, controles en onderhoud zorgen dat alles soepel blijft draaien.
                                </p>
                            </div>

                            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <h3 className="text-2xl font-bold text-chef-dark mb-4">Geen omkijken naar je website</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                    Wij regelen het beheer en alle kleine aanpassingen. Zo blijft je website actueel terwijl jij je volledig kunt focussen op je zaak.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Text Area with Mockup */}
                <section className="bg-white py-32 border-y border-black/5">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 relative w-full flex justify-center lg:justify-end pr-0 lg:pr-8">
                            <img
                                src="/images/home_marketing/happy-restaurant-owner.png"
                                alt="Blije restauranthouder met smartphone"
                                className="w-full max-w-[450px] aspect-[4/5] object-cover rounded-[32px] md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-black/5"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-[2.75rem] font-bold tracking-tight text-chef-dark mb-10 leading-tight">
                                Speciaal ontwikkeld<br className="hidden lg:block" /> voor restaurants en horeca
                            </h2>

                            <ul className="space-y-6 mb-10 text-lg md:text-xl text-gray-600">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span className="leading-relaxed">Snel en eenvoudig reserveren via geïntegreerde koppelingen zoals Zenchef, Guestplan, Tebi of The Fork.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span className="leading-relaxed">Conversiegericht design dat gasten overtuigt en omzet oplevert.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                    <span className="leading-relaxed">Altijd SEO-geoptimaliseerd, zodat je goed gevonden wordt in Google en Maps.</span>
                                </li>
                            </ul>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                Of het nu gaat om tafels vullen tijdens rustige dagen of aanvragen binnenhalen voor feesten en zakelijke evenementen: onze websites zijn er helemaal op ingericht.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Needs Grid */}
                <section className="bg-chef-warm py-32">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-chef-dark mb-16 leading-tight max-w-2xl mx-auto">
                            Waar moet een goede horeca website aan voldoen?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {[
                                { title: "Eenvoudig reserveren", desc: "Gasten willen direct kunnen boeken, zonder gedoe. Een geïntegreerd reserveringssysteem (Zenchef, Guestplan) is essentieel.", icon: <MonitorSmartphone className="text-chef-dark" /> },
                                { title: "Mobiel vriendelijk", desc: "Meer dan 70% van de reserveringen gebeurt via de telefoon. Een goede website moet er op mobiel strak uitzien.", icon: <Smartphone className="text-chef-dark" /> },
                                { title: "Snelheid en techniek", desc: "Een trage website kost je gasten. Snel laden en technisch stabiel zijn cruciaal om bezoekers vast te houden.", icon: <Zap className="text-chef-dark" /> },
                                { title: "SEO en vindbaarheid", desc: "SEO-optimalisatie en structured data zijn onmisbaar. Een mooie website is niets waard als niemand hem vindt.", icon: <Globe className="text-chef-dark" /> },
                                { title: "Unieke uitstraling", desc: "Geen standaard template, maar een ontwerp dat past bij jouw unieke concept en direct jouw merkbeleving uitstraalt.", icon: <Palette className="text-chef-dark" /> },
                                { title: "Actuele informatie", desc: "Menu's, openingstijden en acties moeten kloppen. Wijzigingen aan de website leveren we altijd binnen 24 uur.", icon: <LineChart className="text-chef-dark" /> },
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

                {/* Comparison Table */}
                <section className="bg-white py-32 border-y border-black/5">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-4xl text-center md:text-5xl font-bold tracking-tight text-chef-dark mb-6 leading-tight">
                            Wij maken graag het verschil
                        </h2>
                        <p className="text-lg text-center text-gray-500 mb-16 max-w-2xl mx-auto">
                            Het grote voordeel van Chef Digital is dat je volledig ontzorgd wordt. Voor een vast maandbedrag krijg je een op maat gemaakte website die continu wordt beheerd.
                        </p>

                        <div className="overflow-x-auto pb-8 pt-4">
                            <div className="min-w-[700px] flex flex-col">
                                {/* Header */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] items-end border-b-2 border-black/5">
                                    <div className="py-6 px-6 font-bold text-lg text-gray-400">Kenmerk</div>
                                    <div className="py-6 px-4 font-bold text-lg text-gray-400 text-center">Traditionele bureaus</div>
                                    <div className="py-6 px-4 font-extrabold text-2xl text-chef-dark text-center bg-gray-50 rounded-t-[32px] border-x border-t border-black/5 translate-y-[2px]">Chef Digital</div>
                                </div>

                                {/* Row 1 */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] border-b border-black/5 group hover:bg-gray-50/50 transition-colors">
                                    <div className="py-6 px-6 font-medium text-gray-800 flex items-center">Volledig maatwerk (geen templates)</div>
                                    <div className="py-6 px-4 text-gray-500 flex items-center justify-center text-center">€7,5k - €15k</div>
                                    <div className="py-6 px-4 font-bold text-lg text-chef-dark bg-gray-50 border-x border-black/5 flex items-center justify-center group-hover:bg-gray-100 transition-colors">€0,-</div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] border-b border-black/5 group hover:bg-gray-50/50 transition-colors">
                                    <div className="py-6 px-6 font-medium text-gray-800 flex items-center">Alles-in-een: beheer & onderhoud inbegrepen</div>
                                    <div className="py-6 px-4 text-gray-500 flex items-center justify-center text-center">€70 - €120 p/uur</div>
                                    <div className="py-6 px-4 text-green-500 bg-gray-50 border-x border-black/5 flex items-center justify-center group-hover:bg-gray-100 transition-colors"><Check size={28} strokeWidth={2.5} /></div>
                                </div>

                                {/* Row 3 */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] border-b border-black/5 group hover:bg-gray-50/50 transition-colors">
                                    <div className="py-6 px-6 font-medium text-gray-800 flex items-center">Vast maandelijks tarief zonder onverwachte kosten</div>
                                    <div className="py-6 px-4 text-gray-300 flex items-center justify-center"><X size={24} strokeWidth={3} /></div>
                                    <div className="py-6 px-4 font-bold text-lg text-chef-dark bg-gray-50 border-x border-black/5 flex items-center justify-center group-hover:bg-gray-100 transition-colors">129,- p/maand</div>
                                </div>

                                {/* Row 4 */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] border-b border-black/5 group hover:bg-gray-50/50 transition-colors">
                                    <div className="py-6 px-6 font-medium text-gray-800 flex items-center">24/7 bereikbaar; wijzigingen binnen 24 uur live</div>
                                    <div className="py-6 px-4 text-gray-300 flex items-center justify-center"><X size={24} strokeWidth={3} /></div>
                                    <div className="py-6 px-4 text-green-500 bg-gray-50 border-x border-black/5 flex items-center justify-center group-hover:bg-gray-100 transition-colors"><Check size={28} strokeWidth={2.5} /></div>
                                </div>

                                {/* Row 5 */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] border-b border-black/5 group hover:bg-gray-50/50 transition-colors">
                                    <div className="py-6 px-6 font-medium text-gray-800 flex items-center">Snel live zonder opstartkosten</div>
                                    <div className="py-6 px-4 text-gray-500 flex items-center justify-center text-center">€5k - €10k</div>
                                    <div className="py-6 px-4 font-bold text-lg text-chef-dark bg-gray-50 border-x border-black/5 flex items-center justify-center group-hover:bg-gray-100 transition-colors">€0,-</div>
                                </div>

                                {/* Row 6 */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] border-b border-black/5 group hover:bg-gray-50/50 transition-colors">
                                    <div className="py-6 px-6 font-medium text-gray-800 flex items-center">Transparante maandelijkse resultaten</div>
                                    <div className="py-6 px-4 text-gray-300 flex items-center justify-center"><X size={24} strokeWidth={3} /></div>
                                    <div className="py-6 px-4 text-green-500 bg-gray-50 border-x border-black/5 flex items-center justify-center group-hover:bg-gray-100 transition-colors"><Check size={28} strokeWidth={2.5} /></div>
                                </div>

                                {/* Row 7 */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] border-b border-black/5 group hover:bg-gray-50/50 transition-colors">
                                    <div className="py-6 px-6 font-medium text-gray-800 flex items-center">Persoonlijke en directe Whatsapp-communicatie</div>
                                    <div className="py-6 px-4 text-gray-300 flex items-center justify-center"><X size={24} strokeWidth={3} /></div>
                                    <div className="py-6 px-4 text-green-500 bg-gray-50 border-x border-black/5 flex items-center justify-center group-hover:bg-gray-100 transition-colors"><Check size={28} strokeWidth={2.5} /></div>
                                </div>

                                {/* Row 8 */}
                                <div className="grid grid-cols-[2fr_1.2fr_1.2fr] border-b-0 group hover:bg-gray-50/50 transition-colors">
                                    <div className="py-6 px-6 font-medium text-gray-800 flex items-center border-b border-black/5">Gespecialiseerd in horeca</div>
                                    <div className="py-6 px-4 text-gray-300 flex items-center justify-center border-b border-black/5"><X size={24} strokeWidth={3} /></div>
                                    <div className="py-6 px-4 text-green-500 bg-gray-50 border-b border-x border-black/5 rounded-b-[32px] flex items-center justify-center group-hover:bg-gray-100 transition-colors"><Check size={28} strokeWidth={2.5} /></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)]">
                                Plan een call in <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="bg-chef-warm py-32 border-t border-black/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-chef-dark mb-4 leading-tight">
                                Eerlijke en transparante prijzen
                            </h2>
                            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                                Geen verborgen kosten, geen vaste contracten, geen verrassingen.<br className="hidden md:block" /> Gewoon duidelijke prijzen die zich aanpassen aan je bedrijf.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Website Card */}
                            <div className="bg-white rounded-[32px] p-10 border border-black/5 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-3xl font-bold text-chef-dark mb-2">Website</h3>
                                <p className="text-gray-500 mb-6 text-sm leading-relaxed max-w-[85%]">
                                    Perfect voor elk restaurant. Je betaalt alleen een vast, laag bedrag voor het actueel houden en onderhouden van een professionele website.
                                </p>
                                <div className="mb-8 font-extrabold text-chef-dark flex items-baseline gap-1">
                                    <span className="text-4xl tracking-tight">€129</span><span className="text-lg text-gray-400 font-medium">/mnd</span>
                                </div>

                                <ul className="space-y-4 mb-2 mt-auto">
                                    {[
                                        { title: "Géén opstartkosten en commissies" },
                                        { title: "Onbeperkt aanpassingen" },
                                        { title: "Onbeperkt pagina's" },
                                        { title: "Alle integraties en koppelingen inbegrepen" },
                                        { title: "Zoekmachine en AI geoptimaliseerd" },
                                        { title: "Na 6 maanden maandelijks opzegbaar" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-black/10 shrink-0">
                                                <Check size={12} className="text-chef-dark" strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-800 font-medium">{item.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Add-ons Card */}
                            <div className="bg-white rounded-[32px] p-10 border border-black/5 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-3xl font-bold text-chef-dark mb-2">Upgrade je website</h3>
                                <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-[85%]">
                                    Breid je website eenvoudig uit met specifieke add-ons. Perfect afgestemd op organisaties die nóg meer uit hun online aanwezigheid willen halen.
                                </p>

                                <ul className="space-y-6 mt-auto">
                                    <li className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 shrink-0 border border-black/5">
                                            <Globe size={16} className="text-gray-600" />
                                        </div>
                                        <span className="text-gray-800 font-medium flex-grow">Meertalig</span>
                                        <span className="font-bold text-chef-dark whitespace-nowrap">+ €15/mnd</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 shrink-0 border border-black/5">
                                            <ClipboardList size={16} className="text-gray-600" />
                                        </div>
                                        <span className="text-gray-800 font-medium flex-grow">Online bestelformulier</span>
                                        <span className="font-bold text-chef-dark whitespace-nowrap">+ €15/mnd</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 shrink-0 border border-black/5">
                                            <ShoppingBag size={16} className="text-gray-600" />
                                        </div>
                                        <span className="text-gray-800 font-medium flex-grow">Webshop upgrade</span>
                                        <span className="font-bold text-chef-dark whitespace-nowrap">+ €200/mnd</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)]">
                                Bekijk onze tarieven <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                <CustomerStories />

                <CTASection
                    title="Klaar om jouw restaurant online te laten groeien?"
                    subtitle="Verhoog je inkomsten, verlaag je kosten en ontzorg jezelf volledig via de diensten van Chef Digital."
                    primaryButtonText="Start nu"
                    secondaryButtonText="Neem contact op met sales"
                />

            </main>
            <Footer />
        </div >
    );
};

export default HorecaWebsite;
