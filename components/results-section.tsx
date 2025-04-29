"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const results = [
  {
    id: 1,
    title: "Harmonização Facial",
    description: "Procedimento realizado com preenchimento e toxina botulínica para harmonizar o rosto.",
    before: "/IMG_9576.png",
    after: "/IMG_4598.png",
  },
  {
    id: 2,
    title: "Rejuvenescimento Facial",
    description: "Combinação de bioestimuladores e skinbooster para melhorar a qualidade da pele.",
    before: "/IMG_0539.jpg?height=300&width=400&text=Antes+2",
    after: "/IMG_0538.jpg?height=300&width=400&text=Depois+2",
  },
  {
    id: 3,
    title: "Preenchimento Labial",
    description: "Aumento e definição dos lábios com ácido hialurônico.",
    before: "/IMG_0288.jpg?height=300&width=400&text=Antes+3",
    after: "/IMG_0286.jpg?height=300&width=400&text=Depois+3",
  },
  {
    id: 4,
    title: "Lifting Não-Cirúrgico",
    description: "Procedimento com fios de PDO para elevação e sustentação da face.",
    before: "/ANTES-PACIENTE-1-1.jpg?height=300&width=400&text=Antes+4",
    after: "/DEPOIS-PACIENTE-1-1.jpg?height=300&width=400&text=Depois+4",
  },
  {
    id: 5,
    title: "Tratamento Corporal",
    description: "Procedimento para definição e contorno corporal.",
    before: "/IMG_0404.jpg?height=300&width=400&text=Antes+5",
    after: "/IMG_2275.jpg?height=300&width=400&text=Depois+5",
  },
]

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === results.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? results.length - 1 : prevIndex - 1))
  }

  return (
    <section id="resultados" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Resultados</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conheça os resultados reais obtidos com nossos tratamentos estéticos avançados
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Carrossel de Resultados */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {results.map((result) => (
                <div key={result.id} className="w-full flex-shrink-0">
                  <div className="bg-white">
                    <div className="flex flex-col md:flex-row">
                      {/* Imagem Antes */}
                      <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={result.before || "/placeholder.svg"}
                            alt={`Antes - ${result.title}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                          />
                          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Antes
                          </div>
                        </div>
                      </div>

                      {/* Imagem Depois */}
                      <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={result.after || "/placeholder.svg"}
                            alt={`Depois - ${result.title}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-b-lg md:rounded-r-lg md:rounded-b-none"
                          />
                          <div className="absolute top-4 right-4 bg-[#D4AF37]/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Depois
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Informações do Tratamento */}
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{result.title}</h3>
                      <p className="text-gray-700">{result.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Setas de Navegação - Responsivas e bem posicionadas */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 text-[#C4A052] border border-[#C4A052] rounded-full shadow-md"
              onClick={prevSlide}
              aria-label="Resultado anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 text-[#C4A052] border border-[#C4A052] rounded-full shadow-md"
              onClick={nextSlide}
              aria-label="Próximo resultado"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-4">
            {results.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#D4AF37] w-4" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para resultado ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
