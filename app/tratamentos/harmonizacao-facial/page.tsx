"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HarmonizacaoFacial() {
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

  const benefits = [
    "Correção de assimetrias faciais",
    "Suavização de linhas de expressão",
    "Aumento de volume em áreas específicas",
    "Melhora do contorno facial",
    "Rejuvenescimento da aparência",
  ]

  const feedbacks = [
    {
      name: "Maria Silva",
      comment: "Incrível como a harmonização facial melhorou minha autoestima. Resultados naturais e duradouros!",
    },
    {
      name: "João Santos",
      comment: "Profissionalismo e atenção aos detalhes. Recomendo o Dr. Bruno Marques a todos!",
    },
    {
      name: "Ana Oliveira",
      comment:
        "Transformação surpreendente! Me sinto mais jovem e confiante. Obrigada, equipe do Instituto Bruno Marques!",
    },
  ]

  const advantages = [
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos os equipamentos mais modernos do mercado.",
    },
    {
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados e experientes.",
    },
    {
      title: "Resultados Naturais",
      description: "Focamos em realçar sua beleza de forma sutil e harmoniosa.",
    },
    {
      title: "Atendimento Personalizado",
      description: "Cada tratamento é adaptado às necessidades individuais.",
    },
    {
      title: "Ambiente Acolhedor",
      description: "Espaço projetado para seu conforto e bem-estar.",
    },
    {
      title: "Pós-tratamento",
      description: "Acompanhamento cuidadoso para garantir os melhores resultados.",
    },
  ]

  const spaceImages = [
    {
      src: "/placeholder.svg?height=300&width=400&text=Sala+Harmonização+1",
      alt: "Sala de Harmonização Facial",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Equipamentos+Harmonização",
      alt: "Equipamentos para Harmonização",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Recepção+Clínica",
      alt: "Recepção da Clínica",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg"
          alt="Harmonização Facial"
          fill
          className="absolute z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Harmonização Facial</h1>
          <p className="text-xl md:text-2xl mb-8">Realce sua beleza natural com técnicas avançadas</p>
          <div className="flex justify-center">
            <Link href="#agendamento" passHref>
              <Button size="lg" className="bg-gold hover:bg-[#D4AF37] text-white">
                Agende sua Consulta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Descrição do Tratamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O que é Harmonização Facial?</h2>
              <p className="text-gray-600 mb-6">
                A harmonização facial é um conjunto de procedimentos estéticos que visa equilibrar e realçar os traços
                do rosto, proporcionando uma aparência mais harmoniosa e jovial. Utilizamos técnicas avançadas e
                produtos de alta qualidade para garantir resultados naturais e duradouros.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              {isMobile ? (
                <Accordion type="single" collapsible className="w-full">
                  {benefits.map((benefit, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pl-7 text-gray-600 text-sm">
                          {benefit === "Correção de assimetrias faciais"
                            ? "Equilibra as proporções do rosto para uma aparência mais harmoniosa."
                            : benefit === "Suavização de linhas de expressão"
                              ? "Reduz rugas e marcas de expressão para uma aparência mais jovem."
                              : benefit === "Aumento de volume em áreas específicas"
                                ? "Realça áreas como maçãs do rosto, lábios e queixo para melhor definição."
                                : benefit === "Melhora do contorno facial"
                                  ? "Define o contorno do rosto para uma aparência mais estruturada."
                                  : "Proporciona uma aparência mais jovem e descansada."}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <Image
                src="/conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg"
                alt="Harmonização Facial"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
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
                  before: "/placeholder.svg?height=200&width=200&text=Harmonização+Antes+1",
                  after: "/placeholder.svg?height=200&width=200&text=Harmonização+Depois+1",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Harmonização+Antes+2",
                  after: "/placeholder.svg?height=200&width=200&text=Harmonização+Depois+2",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Harmonização+Antes+3",
                  after: "/placeholder.svg?height=200&width=200&text=Harmonização+Depois+3",
                },
              ].map((item, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-full" : "md:basis-1/2"}>
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
            {feedbacks.map((feedback, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold" fill="#C4A052" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 break-words min-w-0 w-full">"{feedback.comment}"</p>
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

          {isMobile ? (
            <Carousel className="max-w-xs mx-auto">
              <CarouselContent>
                {spaceImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-2">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={300}
                            height={200}
                            className="rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {spaceImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossa Harmonização Facial?</h2>
          {isMobile ? (
            <Accordion type="single" collapsible className="w-full">
              {advantages.map((vantagem, index) => (
                <AccordionItem key={index} value={`vantagem-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{vantagem.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{vantagem.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((vantagem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{vantagem.title}</h3>
                    <p className="text-gray-600">{vantagem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="agendamento" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua aparência?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Harmonização Facial hoje mesmo!</p>
          <div className="flex justify-center">
            <WhatsAppButton phoneNumber="554799961355" size="lg">
              Agendar Consulta
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </Layout>
  )
}
