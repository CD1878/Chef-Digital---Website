import { Check, X, ArrowRight, Smartphone, Zap, MonitorSmartphone, LineChart, Globe, Palette } from "lucide-react";
import { Navbar, Footer, CTASection, CustomerStories } from "../App";

const HorecaWebsite = () => {
    return (
        <div className="min-h-screen bg-chef-warm selection:bg-chef-accent selection:text-white flex flex-col pt-24">
            <Navbar />

            <main className="flex-grow flex flex-col">
                {/* Hero Section */}
                <section className="bg-chef-warm py-24 pb-12 overflow-hidden text-center relative z-10">
                    <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-chef-dark mb-6 leading-[1.1]">
                            Website voor restaurants en hospitality
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl text-balance">
                            Krijg meer reserveringen via een op maat gemaakte restaurantwebsite. Responsive, met reserveringssysteem en SEO-optimalisatie.
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

                    <div className="max-w-5xl mx-auto px-6 mt-20 relative flex justify-center">
                        <div className="relative w-full aspect-video md:w-4/5 flex justify-center perspective-[1000px]">
                            <img
                                src="/images/home_marketing/horeca-websites-collage.png"
                                alt="Horeca Website Voorbeeld"
                                className="w-full object-contain rounded-xl drop-shadow-2xl translate-y-4"
                            />
                        </div>
                    </div>
                </section>

                {/* Text Area with Mockup */}
                <section className="bg-white py-32 border-y border-black/5">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 relative w-full flex justify-center lg:justify-start">
                            <img
                                src="/images/home_marketing/horeca-website-devices.png"
                                alt="Horeca Website Voorbeeld"
                                className="w-full max-w-[600px] object-contain drop-shadow-2xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-chef-dark mb-6 leading-tight">
                                Speciaal ontwikkeld voor restaurants en horeca
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                                Wij zijn gespecialiseerd in de horeca en hospitality. Daardoor weten we precies waar het bij een restaurantwebsite om draait:
                            </p>

                            <ul className="space-y-6 mb-8 text-lg text-gray-600">
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

                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
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

                <CustomerStories />

                <CTASection
                    title="Klaar om jouw restaurant online te laten groeien?"
                    subtitle="Verhoog je inkomsten, verlaag je kosten en ontzorg jezelf volledig via de diensten van Chef Digital."
                    primaryButtonText="Start nu"
                    secondaryButtonText="Neem contact op met sales"
                />

            </main>
            <Footer />
        </div>
    );
};

export default HorecaWebsite;
