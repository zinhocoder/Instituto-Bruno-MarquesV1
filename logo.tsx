import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="max-w-lg w-full text-center space-y-2">
        <Image
          src="/instituto-11.png"
          alt="Instituto Bruno Marques Logo"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
        <div className="space-y-4">
          <div className="text-[#C4A052] text-sm tracking-[0.2em] font-light">INSTITUTO</div>
          <div className="text-white text-4xl md:text-5xl font-bold tracking-wider">BRUNO MARQUES</div>
          <div className="text-[#C4A052] text-sm tracking-wider font-light">REJUVENESCIMENTO FACIAL E CORPORAL</div>
        </div>
      </div>
    </div>
  )
}
