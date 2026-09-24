import Image from "next/image";
import { Badge } from "./ui/Badge";
import { CLUB_URL } from "@/lib/links";


export function Hero() {
  return (
    <header className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Premium beef cuts on a wooden board"
          src="/gambar header.png"
          fill
          className="object-cover opacity-90 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6 uppercase tracking-wider">
            Crafted by Farmers
          </Badge>
          <h1 className="font-display-xl text-display-xl md:text-[64px] md:leading-[72px] text-on-background mb-6">
            Setiap Potongan Daging Memiliki Cerita
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Bukan hanya tentang rasa yang lezat, tetapi tentang peternak yang
            merawat ternaknya dengan sepenuh hati, memastikan kualitas terbaik
            sampai ke meja makan Anda.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={CLUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-club text-on-club rounded-full px-8 py-4 font-title-md text-base hover:bg-club-hover transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              ORDER
            </a>
            <a
              href={CLUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-on-background border-2 border-outline rounded-full px-8 py-4 font-title-md text-base hover:bg-surface-container-high transition-all duration-300 inline-flex items-center justify-center"
            >
              Menjadi Mitra
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
