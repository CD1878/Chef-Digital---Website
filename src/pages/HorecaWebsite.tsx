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
                            <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2">
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

                {/* Text Area */}
                <section className="bg-white py-32 border-y border-black/5">
                    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-chef-dark mb-6 leading-tight">
                                Jij houdt tijd over, wij ontzorgen
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Met Chef Digital heb je nergens omkijken naar. Wij doen al het beheer en onderhoud, zorgen dat je site technisch optimaal blijft draaien en voeren wijzigingen altijd binnen 24 uur live door. Zo hoef jij nooit meer te wachten of zelf te prutsen in een systeem: wij regelen alles.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                                En het mooiste? Je betaalt één vast bedrag per maand. Geen hoge opstartkosten, geen onverwachte facturen en geen verborgen kosten achteraf. Transparant, helder en voorspelbaar.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-chef-warm to-gray-200 rounded-[40px] aspect-square flex items-center justify-center p-12 overflow-hidden relative shadow-inner border border-black/5">
                            <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-3xl"></div>
                            <div className="relative z-10 w-full rounded-2xl bg-white shadow-xl border border-black/5 p-8">
                                <div className="flex items-center gap-4 mb-6 border-b border-black/10 pb-4">
                                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-100 rounded-full w-2/3"></div>
                                    <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                                    <div className="h-4 bg-gray-100 rounded-full w-4/5"></div>
                                    <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                                </div>
                            </div>
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

                        <div className="overflow-x-auto pb-8">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-6 px-4 font-bold text-lg text-chef-dark/60 w-1/2">Kenmerk</th>
                                        <th className="py-6 px-4 font-bold text-lg text-chef-dark/60">Traditionele bureaus</th>
                                        <th className="py-6 px-4 font-bold text-2xl text-chef-dark text-center bg-gray-50 rounded-t-3xl border-x border-t border-black/5">Chef Digital</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm md:text-base text-gray-700">
                                    <tr className="border-b border-black/5 group hover:bg-gray-50/50">
                                        <td className="py-6 px-4 font-medium">Volledig maatwerk (geen templates)</td>
                                        <td className="py-6 px-4 text-gray-500">€7,5k - €15k</td>
                                        <td className="py-6 px-4 text-center font-bold text-chef-dark bg-gray-50 border-x border-black/5">€0,-</td>
                                    </tr>
                                    <tr className="border-b border-black/5 group hover:bg-gray-50/50">
                                        <td className="py-6 px-4 font-medium">Alles-in-een: beheer & onderhoud inbegrepen</td>
                                        <td className="py-6 px-4 text-gray-500">€70 - €120 p/uur</td>
                                        <td className="py-6 px-4 text-center text-green-500 bg-gray-50 border-x border-black/5 flex justify-center"><Check size={24} strokeWidth={2.5} /></td>
                                    </tr>
                                    <tr className="border-b border-black/5 group hover:bg-gray-50/50">
                                        <td className="py-6 px-4 font-medium">Vast maandelijks tarief zonder onverwachte kosten</td>
                                        <td className="py-6 px-4 text-gray-400 flex justify-start"><X size={20} /></td>
                                        <td className="py-6 px-4 text-center font-bold text-chef-dark bg-gray-50 border-x border-black/5">129,- p/maand</td>
                                    </tr>
                                    <tr className="border-b border-black/5 group hover:bg-gray-50/50">
                                        <td className="py-6 px-4 font-medium">24/7 bereikbaar; wijzigingen binnen 24 uur live</td>
                                        <td className="py-6 px-4 text-gray-400 flex justify-start"><X size={20} /></td>
                                        <td className="py-6 px-4 text-center text-green-500 bg-gray-50 border-x border-black/5 flex justify-center"><Check size={24} strokeWidth={2.5} /></td>
                                    </tr>
                                    <tr className="border-b border-black/5 group hover:bg-gray-50/50">
                                        <td className="py-6 px-4 font-medium">Snel live zonder opstartkosten</td>
                                        <td className="py-6 px-4 text-gray-500">€5k - €10k</td>
                                        <td className="py-6 px-4 text-center font-bold text-chef-dark bg-gray-50 border-x border-black/5">€0,-</td>
                                    </tr>
                                    <tr className="border-b border-black/5 group hover:bg-gray-50/50">
                                        <td className="py-6 px-4 font-medium">Transparante maandelijkse resultaten</td>
                                        <td className="py-6 px-4 text-gray-400 flex justify-start"><X size={20} /></td>
                                        <td className="py-6 px-4 text-center text-green-500 bg-gray-50 border-x border-black/5 flex justify-center"><Check size={24} strokeWidth={2.5} /></td>
                                    </tr>
                                    <tr className="border-b border-black/5 group hover:bg-gray-50/50">
                                        <td className="py-6 px-4 font-medium">Persoonlijke en directe Whatsapp-communicatie</td>
                                        <td className="py-6 px-4 text-gray-400 flex justify-start"><X size={20} /></td>
                                        <td className="py-6 px-4 text-center text-green-500 bg-gray-50 border-x border-black/5 flex justify-center"><Check size={24} strokeWidth={2.5} /></td>
                                    </tr>
                                    <tr className="group hover:bg-gray-50/50">
                                        <td className="py-6 px-4 font-medium">Gespecialiseerd in horeca</td>
                                        <td className="py-6 px-4 text-gray-400 flex justify-start"><X size={20} /></td>
                                        <td className="py-6 px-4 text-center text-green-500 bg-gray-50 border-x border-black/5 rounded-b-3xl border-b flex justify-center"><Check size={24} strokeWidth={2.5} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-center mt-12">
                            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2">
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
