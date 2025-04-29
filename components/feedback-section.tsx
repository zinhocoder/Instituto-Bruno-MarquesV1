"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ana Oliveira",
    role: "Paciente de Harmonização Facial",
    content:
      "Minha experiência com o Instituto Bruno Marques foi incrível! O atendimento é personalizado e os resultados superaram minhas expectativas. Me sinto muito mais confiante agora.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Paciente de Preenchimento Labial",
    content:
      "Estava inseguro no início, mas a equipe me deixou muito tranquilo. O procedimento foi rápido e o resultado ficou natural, exatamente o que eu queria.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Juliana Santos",
    role: "Paciente de Bioestimuladores",
    content:
      "Já fiz diversos procedimentos no Instituto e sempre saio satisfeita. A atenção aos detalhes e o cuidado com o paciente são diferenciais que me fazem voltar sempre.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Roberto Almeida",
    role: "Paciente de Toxina Botulínica",
    content:
      "Resultados impressionantes e naturais. A equipe é extremamente profissional e o ambiente é acolhedor. Recomendo a todos que buscam qualidade.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Paciente de Skinbooster",
    content:
      "Minha pele está radiante após o tratamento! O conhecimento técnico dos profissionais é evidente e me senti segura durante todo o processo.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const itemsPerPage = isMobile ? 1 : 3
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage)

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
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <section id="feedbacks" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">O que nossos pacientes dizem</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conheça as experiências de quem já transformou sua vida com nossos tratamentos
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#D4AF37]">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 flex-grow">{testimonial.content}</p>
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
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 text-[#C4A052] border border-[#C4A052] rounded-full shadow-md"
              onClick={nextSlide}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#D4AF37] w-4" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/5547999961355?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
