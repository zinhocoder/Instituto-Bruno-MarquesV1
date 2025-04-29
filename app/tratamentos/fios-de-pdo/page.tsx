"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FiosDePDO() {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image src="/unnamed_(1).png" alt="Fios de PDO" fill className="absolute z-0 object-cover" />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fios de PDO</h1>
          <p className="text-xl md:text-2xl mb-8">Lifting não cirúrgico para um efeito rejuvenescedor imediato</p>
          <Link href="#agendamento" passHref>
            <div className="flex justify-center">
              <Button size="lg" className="bg-gold hover:bg-[#D4AF37] text-white">
                Agende sua Consulta
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Descrição do Tratamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {isMobile ? (
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <Image
                  src="/unnamed_(1).png"
                  alt="Fios de PDO"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center">O que são Fios de PDO?</h2>
                <p className="text-gray-600 mb-6">
                  Os fios de PDO (Polidioxanona) são uma técnica de rejuvenescimento facial não cirúrgica que utiliza
                  fios absorvíveis para promover lifting e estimular a produção de colágeno. Este tratamento oferece um
                  efeito lifting imediato e melhora progressiva da qualidade da pele.
                </p>
                <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                <div className="space-y-2">
                  {[
                    "Efeito lifting imediato",
                    "Estimulação da produção de colágeno",
                    "Melhora do contorno facial",
                    "Redução de flacidez",
                    "Procedimento minimamente invasivo",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">O que são Fios de PDO?</h2>
                <p className="text-gray-600 mb-6">
                  Os fios de PDO (Polidioxanona) são uma técnica de rejuvenescimento facial não cirúrgica que utiliza
                  fios absorvíveis para promover lifting e estimular a produção de colágeno. Este tratamento oferece um
                  efeito lifting imediato e melhora progressiva da qualidade da pele.
                </p>
                <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                <ul className="space-y-2">
                  {[
                    "Efeito lifting imediato",
                    "Estimulação da produção de colágeno",
                    "Melhora do contorno facial",
                    "Redução de flacidez",
                    "Procedimento minimamente invasivo",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Image
                  src="/unnamed_(1).png"
                  alt="Fios de PDO"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados Impressionantes</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  before: "/placeholder.svg?height=200&width=200&text=Fios+PDO+Antes+1",
                  after: "/placeholder.svg?height=200&width=200&text=Fios+PDO+Depois+1",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Fios+PDO+Antes+2",
                  after: "/placeholder.svg?height=200&width=200&text=Fios+PDO+Depois+2",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Fios+PDO+Antes+3",
                  after: "/placeholder.svg?height=200&width=200&text=Fios+PDO+Depois+3",
                },
              ].map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="grid grid-cols-2 gap-4">
                          <Image
                            src={item.before || "/placeholder.svg"}
                            alt={`Antes ${index + 1}`}
                            width={200}
                            height={200}
                            className="rounded-lg"
                          />
                          <Image
                            src={item.after || "/placeholder.svg"}
                            alt={`Depois ${index + 1}`}
                            width={200}
                            height={200}
                            className="rounded-lg"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Feedbacks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Fernanda Oliveira",
                comment: "Os fios de PDO transformaram meu rosto! O efeito lifting foi imediato e natural.",
              },
              {
                name: "Ricardo Santos",
                comment: "Excelente tratamento! Notei uma melhora significativa na flacidez do meu rosto.",
              },
              {
                name: "Amanda Lima",
                comment: "Adorei os resultados! Minha pele está mais firme e com aparência muito mais jovem.",
              },
            ].map((feedback, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold" fill="#C4A052" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{feedback.comment}"</p>
                  <p className="font-semibold">{feedback.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fotos do Espaço */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça Nosso Espaço</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Image
              src="/placeholder.svg?height=300&width=400&text=Sala+Fios+PDO+1"
              alt="Sala de Fios PDO"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400&text=Materiais+Fios+PDO"
              alt="Materiais para Fios PDO"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400&text=Consultório+Fios+PDO"
              alt="Consultório para Fios PDO"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossos Fios de PDO?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnologia Avançada",
                description: "Utilizamos os fios de PDO mais modernos e seguros do mercado.",
              },
              {
                title: "Profissionais Especializados",
                description: "Nossa equipe é altamente treinada em técnicas de aplicação de fios.",
              },
              {
                title: "Resultados Naturais",
                description: "Focamos em proporcionar um lifting natural, sem aparência artificial.",
              },
              {
                title: "Procedimento Personalizado",
                description: "Cada tratamento é adaptado às necessidades específicas do seu rosto.",
              },
              {
                title: "Ambiente Seguro",
                description: "Procedimentos realizados em ambiente clínico totalmente estéril.",
              },
              {
                title: "Acompanhamento Pós-procedimento",
                description: "Suporte completo para garantir sua satisfação e os melhores resultados.",
              },
            ].map((vantagem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vantagem.title}</h3>
                  <p className="text-gray-600">{vantagem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para rejuvenescer sua pele?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Fios de PDO hoje mesmo!</p>
          <Link href="https://wa.me/5547992865256" passHref>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100">
                Agendar Consulta
              </Button>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
