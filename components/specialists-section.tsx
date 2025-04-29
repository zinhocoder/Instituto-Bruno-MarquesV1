"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SpecialistsSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeSpecialist, setActiveSpecialist] = useState<number | null>(null)

  const specialists = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design-sem-nome-1-JJsvhxzVKqZnICWvsarksy5eyHgkpR.png",
      name: "Dra. Jessica Dalago",
      description:
        "Especialista em Harmonização Facial e Procedimentos Estéticos Avançados com mais de 10 anos de experiência. Formada pela UFSC com especialização em Dermatologia Estética.",
      specialties: ["Harmonização Facial", "Preenchimento Labial", "Toxina Botulínica", "Bioestimuladores de Colágeno"],
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design-sem-nome-uVAP8mggeSLNSSoyThKGv5p9VGSd7y.png",
      name: "Dr. Bruno Marques",
      description:
        "Formado em Medicina e Fisioterapia, com especialização em Dermatofuncional e Fundador do Instituto e especialista em Medicina Estética Avançada. Referência em procedimentos estéticos minimamente invasivos e tratamentos personalizados.",
      specialties: [
        "Medicina Estética Avançada",
        "Protocolos Exclusivos",
        "Rejuvenescimento Facial",
        "Tratamentos Corporais",
      ],
    },
  ]

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar inicialmente
    checkIfMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const nextSpecialist = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % specialists.length)
    setActiveSpecialist(null)
  }

  const prevSpecialist = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + specialists.length) % specialists.length)
    setActiveSpecialist(null)
  }

  const toggleSpecialistInfo = (index: number) => {
    if (activeSpecialist === index) {
      setActiveSpecialist(null)
    } else {
      setActiveSpecialist(index)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Especialistas</h2>

        {isMobile ? (
          // Mobile Carousel
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {specialists.map((specialist, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="relative cursor-pointer" onClick={() => toggleSpecialistInfo(index)}>
                        <Image
                          src={specialist.image || "/placeholder.svg"}
                          alt={specialist.name}
                          width={500}
                          height={500}
                          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                          priority
                        />

                        {/* Nome do especialista sempre visível na parte inferior da imagem */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                          <h3 className="text-xl font-bold text-white text-center">{specialist.name}</h3>
                        </div>

                        {/* Overlay com informações completas - visível apenas quando ativo */}
                        {activeSpecialist === index && (
                          <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(55)-Z21nB3a4LEyAAUidpgAEFMW1pjyuN3.png"
                              alt="Decorative Element"
                              width={100}
                              height={50}
                              className="absolute top-4 left-4"
                              priority
                            />
                            <div className="text-white text-center p-6">
                              <h3 className="text-xl font-bold mb-2">{specialist.name}</h3>
                              <p className="text-sm mb-4">{specialist.description}</p>
                              <div className="mt-4 space-y-2">
                                {specialist.specialties.map((specialty, idx) => (
                                  <p key={idx} className="text-sm">
                                    • {specialty}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] rounded-full"
                onClick={prevSpecialist}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] rounded-full"
                onClick={nextSpecialist}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4">
              {specialists.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? "bg-[#C4A052]" : "bg-gray-300"}`}
                  onClick={() => {
                    setCurrentIndex(index)
                    setActiveSpecialist(null)
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialists.map((specialist, index) => (
              <div key={index} className="relative group">
                <Image
                  src={specialist.image || "/placeholder.svg"}
                  alt={`Especialista em Estética Avançada`}
                  width={500}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(55)-Z21nB3a4LEyAAUidpgAEFMW1pjyuN3.png"
                    alt="Decorative Element"
                    width={100}
                    height={50}
                    className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-2">{specialist.name}</h3>
                    <p className="text-sm">{specialist.description}</p>
                    <div className="mt-4 space-y-2">
                      {specialist.specialties.map((specialty, idx) => (
                        <p key={idx} className="text-sm">
                          • {specialty}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
