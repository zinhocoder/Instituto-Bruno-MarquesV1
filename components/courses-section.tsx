"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Users } from "lucide-react"
import Link from "next/link"

const courses = [
  { name: "Toxina Botulínica", link: "/cursos/toxina-botulinica" },
  { name: "Bioestimuladores", link: "/cursos/bioestimuladores" },
  { name: "Endolaser (corporal e facial)", link: "/cursos/endolaser" },
  { name: "Temporal face lifting", link: "/cursos/temporal-face-lifting" },
  { name: "Preenchedores (facial e corporal)", link: "/cursos/preenchedores" },
  {
    name: "Bioplastia íntima masculina (aumento peniano)",
    link: "/cursos/bioplastia-intima-masculina",
  },
  { name: "Bioremodeladores (Pdrn, Exossomos e profhilo)", link: "/cursos/bioremodeladores" },
]

export default function CoursesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const itemsPerPage = isMobile ? 1 : 3
  const maxIndex = Math.max(0, courses.length - itemsPerPage)

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
    <section id="cursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Cursos e Mentorias</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Aprenda técnicas avançadas com os melhores especialistas do mercado
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`w-full md:w-1/3 flex-shrink-0 px-4 transition-opacity duration-300 ${
                    index >= currentIndex && index < currentIndex + itemsPerPage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="flex flex-col items-center p-6 h-full">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#C4A052] to-[#D4AF37] mb-4 flex items-center justify-center">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-center">{course.name}</h3>
                      <p className="text-center text-gray-600 mb-6 flex-grow">
                        Aprenda com os melhores especialistas do mercado.
                      </p>
                      <Link href={course.link} passHref>
                        <Button className="w-full bg-transparent border border-[#C4A052] text-[#C4A052] hover:bg-[#C4A052] hover:text-white transition-colors duration-300">
                          Saiba Mais
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
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
              aria-label="Curso anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 text-[#C4A052] border border-[#C4A052] rounded-full shadow-md"
              onClick={nextSlide}
              aria-label="Próximo curso"
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
        </div>
      </div>
    </section>
  )
}
