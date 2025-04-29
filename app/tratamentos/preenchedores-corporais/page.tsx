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

export default function PreenchedoresCorporais() {
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
    "Aumento de volume em áreas específicas",
    "Correção de assimetrias corporais",
    "Melhoria do contorno e definição",
    "Resultados imediatos e duradouros",
    "Procedimento minimamente invasivo",
  ]

  const areas = [
    {
      title: "Glúteos",
      description: "Aumento e modelagem para glúteos mais definidos e volumosos.",
    },
    {
      title: "Panturrilhas",
      description: "Definição e aumento de volume para pernas mais torneadas.",
    },
    {
      title: "Braços",
      description: "Correção de assimetrias e melhoria do contorno dos braços.",
    },
  ]

  const feedbacks = [
    {
      name: "Mariana Costa",
      comment: "Os preenchedores corporais transformaram minha silhueta! Estou muito mais confiante com meu corpo.",
    },
    {
      name: "Juliana Mendes",
      comment: "Resultados incríveis! O procedimento foi rápido e os resultados superaram minhas expectativas.",
    },
    {
      name: "Camila Rodrigues",
      comment: "Excelente tratamento! A equipe do Dr. Bruno Marques é extremamente profissional e atenciosa.",
    },
  ]

  const advantages = [
    {
      title: "Produtos Premium",
      description: "Utilizamos apenas preenchedores de alta qualidade e segurança.",
    },
    {
      title: "Equipe Especializada",
      description: "Profissionais altamente treinados em modelagem corporal.",
    },
    {
      title: "Resultados Naturais",
      description: "Foco em proporcionar um aumento de volume natural e harmonioso.",
    },
    {
      title: "Procedimento Personalizado",
      description: "Cada tratamento é adaptado às necessidades específicas do seu corpo.",
    },
    {
      title: "Ambiente Seguro",
      description: "Procedimentos realizados em ambiente clínico totalmente estéril.",
    },
    {
      title: "Acompanhamento Pós-procedimento",
      description: "Suporte completo para garantir sua satisfação e os melhores resultados.",
    },
  ]

  const spaceImages = [
    {
      src: "/placeholder.svg?height=300&width=400&text=Sala+Preenchedores+Corporais+1",
      alt: "Sala de Preenchedores Corporais",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Equipamentos+Preenchedores+Corporais",
      alt: "Equipamentos para Preenchedores Corporais",
    },
    {
      src: "/placeholder.svg?height=300&width=400&text=Procedimento+Preenchedores+Corporais",
      alt: "Procedimento de Preenchedores Corporais",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Preenchedores+Corporais"
          alt="Preenchedores Corporais"
          fill
          className="absolute z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Preenchedores Corporais</h1>
          <p className="text-xl md:text-2xl mb-8">Modelagem e definição corporal com preenchedores</p>
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
              <h2 className="text-3xl font-bold mb-6">O que são Preenchedores Corporais?</h2>
              <p className="text-gray-600 mb-6">
                Os Preenchedores Corporais são substâncias injetáveis utilizadas para modelar e definir diferentes áreas
                do corpo. Eles são eficazes para aumentar o volume, corrigir assimetrias e melhorar o contorno corporal,
                proporcionando resultados naturais e duradouros.
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
                          {benefit === "Aumento de volume em áreas específicas"
                            ? "Realça áreas como glúteos, panturrilhas e outras regiões que necessitam de mais volume."
                            : benefit === "Correção de assimetrias corporais"
                              ? "Equilibra diferenças naturais entre os lados do corpo para uma aparência mais harmoniosa."
                              : benefit === "Melhoria do contorno e definição"
                                ? "Define o contorno corporal, criando curvas mais acentuadas e atraentes."
                                : benefit === "Resultados imediatos e duradouros"
                                  ? "Efeitos visíveis logo após o procedimento e que se mantêm por longo período."
                                  : "Técnica com mínima invasão e rápida recuperação."}
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
                src="/placeholder.svg?height=400&width=600&text=Preenchedores+Corporais"
                alt="Preenchedores Corporais"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Tratamento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas de Tratamento</h2>
          {isMobile ? (
            <Accordion type="single" collapsible className="w-full">
              {areas.map((area, index) => (
                <AccordionItem key={index} value={`area-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{area.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{area.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {areas.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados Impressionantes</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  before: "/placeholder.svg?height=200&width=200&text=Preenchedores+Corporais+Antes+1",
                  after: "/placeholder.svg?height=200&width=200&text=Preenchedores+Corporais+Depois+1",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Preenchedores+Corporais+Antes+2",
                  after: "/placeholder.svg?height=200&width=200&text=Preenchedores+Corporais+Depois+2",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Preenchedores+Corporais+Antes+3",
                  after: "/placeholder.svg?height=200&width=200&text=Preenchedores+Corporais+Depois+3",
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
      <section className="py-16 bg-gray-50">
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
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossos Preenchedores Corporais?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu corpo?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Preenchedores Corporais hoje mesmo!</p>
          <div className="flex justify-center">
            <WhatsAppButton phoneNumber="5547992865256" size="lg">
              Agendar Consulta
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </Layout>
  )
}
