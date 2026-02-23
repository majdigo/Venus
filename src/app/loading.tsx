export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-6">
                {/* Animated Venus logo placeholder */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-brand-blue/20" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-blue animate-spin" />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-brand-navy font-heading font-bold text-lg">
                        Venus Estetika
                    </p>
                    <p className="text-gray-400 text-sm">
                        Chargement en cours...
                    </p>
                </div>
            </div>
        </div>
    );
}
