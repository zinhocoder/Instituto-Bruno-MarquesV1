import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TemporalFaceLifting() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Temporal+Face+Lifting"
          alt="Temporal Face Lifting"
          fill
          className="absolute z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Temporal Face Lifting</h1>
          <p className="text-xl md:text-2xl mb-8">Técnica inovadora para lifting facial não cirúrgico</p>
          <Link href="#agendamento" passHref>
            <Button size="lg" className="bg-gold hover:bg-[#D4AF37] text-white">
              Agende sua Consulta
            </Button>
          </Link>
        </div>
      </section>

      {/* Descrição do Tratamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O que é Temporal Face Lifting?</h2>
              <p className="text-gray-600 mb-6">
                O Temporal Face Lifting é uma técnica inovadora de rejuvenescimento facial não cirúrgico que proporciona
                um efeito lifting natural e duradouro. Este procedimento minimamente invasivo utiliza técnicas avançadas
                para elevar e firmar a região temporal do rosto, resultando em uma aparência mais jovem e descansada.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              <ul className="space-y-2">
                {[
                  "Efeito lifting imediato",
                  "Rejuvenescimento facial",
                  "Redução de flacidez",
                  "Melhora do contorno facial",
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
                src="/placeholder.svg?height=400&width=600&text=Temporal+Face+Lifting"
                alt="Temporal Face Lifting"
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
                  before: "/placeholder.svg?height=200&width=200&text=Temporal+Lifting+Antes+1",
                  after: "/placeholder.svg?height=200&width=200&text=Temporal+Lifting+Depois+1",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Temporal+Lifting+Antes+2",
                  after: "/placeholder.svg?height=200&width=200&text=Temporal+Lifting+Depois+2",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Temporal+Lifting+Antes+3",
                  after: "/placeholder.svg?height=200&width=200&text=Temporal+Lifting+Depois+3",
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
                name: "Carla Mendonça",
                comment:
                  "O Temporal Face Lifting transformou minha aparência! Parece que rejuvenesci 10 anos em um único procedimento.",
              },
              {
                name: "Fernanda Oliveira",
                comment: "Resultados incríveis e naturais. A equipe do Dr. Bruno Marques é excepcional!",
              },
              {
                name: "Patrícia Lima",
                comment: "Adorei o resultado! O efeito lifting foi imediato e sem tempo de recuperação.",
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
              src="/placeholder.svg?height=300&width=400&text=Sala+Temporal+Lifting+1"
              alt="Sala de Temporal Face Lifting"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400&text=Equipamentos+Temporal+Lifting"
              alt="Equipamentos para Temporal Face Lifting"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400&text=Procedimento+Temporal+Lifting"
              alt="Procedimento de Temporal Face Lifting"
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
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso Temporal Face Lifting?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Técnica Exclusiva",
                description: "Metodologia desenvolvida e aperfeiçoada pelo Dr. Bruno Marques.",
              },
              {
                title: "Resultados Imediatos",
                description: "Efeito lifting visível logo após o procedimento.",
              },
              {
                title: "Sem Tempo de Recuperação",
                description: "Retorno imediato às atividades normais após o procedimento.",
              },
              {
                title: "Procedimento Personalizado",
                description: "Adaptado às necessidades específicas de cada paciente.",
              },
              {
                title: "Equipe Especializada",
                description: "Profissionais altamente treinados nesta técnica inovadora.",
              },
              {
                title: "Resultados Duradouros",
                description: "Efeitos que se mantêm por um longo período.",
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
          <h2 className="text-3xl font-bold mb-4">Pronto para rejuvenescer sua aparência?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Temporal Face Lifting hoje mesmo!</p>
          <Link href="https://wa.me/5547992865256" passHref>
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100">
              Agendar Consulta
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
