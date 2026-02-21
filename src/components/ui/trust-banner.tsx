import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

export function TrustBanner() {
    return (
        <section className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                            <ShieldCheck className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="font-heading font-bold text-xl">Chirurgiens d&apos;Excellence</h3>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Inscrits au conseil de l&apos;ordre, diplômés des meilleures facultés françaises et tunisiennes.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                            <Star className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="font-heading font-bold text-xl">Cliniques Agréées</h3>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Infrastructures ultra-modernes, normes ISO, sécurité sanitaire européenne stricte.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="font-heading font-bold text-xl">Transparence Totale</h3>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Des devis clairs, fixes, sans aucun frais caché. Le prix annoncé est le prix payé.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-4">
                        {/* Using a generic SVG path for a bed/recovery icon substitute */}
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg>
                        </div>
                        <h3 className="font-heading font-bold text-xl">Séjour 5 Étoiles</h3>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Convalescence VIP, transferts privés, et assistance francophone dédiée 24/7.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
