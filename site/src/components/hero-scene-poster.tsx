import Image from "next/image";

export function HeroPoster() {
  return (
    <div className="relative h-full w-full bg-ivory overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <Image
          src="/images/hero-poster.webp"
          alt="Abstract bronze torus knot"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
