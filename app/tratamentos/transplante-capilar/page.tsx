import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TransplanteCapilar() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Transplante+Capilar"
          alt="Transplante Capilar"
          fill
          className="absolute z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transplante Capilar</h1>
          <p className="text-xl md:text-2xl mb-8">Solução definitiva para a calvície e rarefação capilar</p>
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
              <h2 className="text-3xl font-bold mb-6">O que é Transplante Capilar?</h2>
              <p className="text-gray-600 mb-6">
                O transplante capilar é um procedimento cirúrgico minimamente invasivo que consiste na transferência de
                folículos capilares de uma área doadora (geralmente a parte posterior da cabeça) para áreas com calvície
                ou rarefação. Esta técnica proporciona resultados naturais e permanentes, devolvendo a autoestima e
                confiança aos pacientes.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              <ul className="space-y-2">
                {[
                  "Resultados permanentes e naturais",
                  "Aumento da densidade capilar",
                  "Melhora da aparência e autoestima",
                  "Procedimento minimamente invasivo",
                  "Recuperação rápida",
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
                src="/placeholder.svg?height=400&width=600&text=Transplante+Capilar"
                alt="Transplante Capilar"
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
                  before: "/placeholder.svg?height=200&width=200&text=Transplante+Capilar+Antes+1",
                  after: "/placeholder.svg?height=200&width=200&text=Transplante+Capilar+Depois+1",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Transplante+Capilar+Antes+2",
                  after: "/placeholder.svg?height=200&width=200&text=Transplante+Capilar+Depois+2",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Transplante+Capilar+Antes+3",
                  after: "/placeholder.svg?height=200&width=200&text=Transplante+Capilar+Depois+3",
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
                name: "Roberto Almeida",
                comment: "O transplante capilar mudou minha vida! Recuperei minha autoestima e aparência jovem.",
              },
              {
                name: "Carlos Mendes",
                comment: "Resultados incríveis e naturais. A equipe do Dr. Bruno Marques é excepcional!",
              },
              {
                name: "Paulo Rodrigues",
                comment:
                  "Após anos sofrendo com a calvície, finalmente encontrei uma solução definitiva. Recomendo a todos!",
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
              src="/placeholder.svg?height=300&width=400&text=Sala+Transplante+Capilar+1"
              alt="Sala de Transplante Capilar"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400&text=Equipamentos+Transplante+Capilar"
              alt="Equipamentos para Transplante Capilar"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400&text=Procedimento+Transplante+Capilar"
              alt="Procedimento de Transplante Capilar"
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
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso Transplante Capilar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnologia Avançada",
                description: "Utilizamos as técnicas mais modernas de transplante capilar.",
              },
              {
                title: "Equipe Especializada",
                description: "Profissionais altamente qualificados e experientes.",
              },
              {
                title: "Resultados Naturais",
                description: "Garantimos um resultado estético natural e harmonioso.",
              },
              {
                title: "Procedimento Personalizado",
                description: "Cada tratamento é adaptado às necessidades específicas do paciente.",
              },
              {
                title: "Ambiente Seguro",
                description: "Procedimentos realizados em ambiente clínico totalmente estéril.",
              },
              {
                title: "Acompanhamento Pós-procedimento",
                description: "Suporte completo durante todo o processo de recuperação.",
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
          <h2 className="text-3xl font-bold mb-4">Pronto para recuperar seus cabelos?</h2>
          <p className="text-xl mb-8">Agende sua consulta de Transplante Capilar hoje mesmo!</p>
          <Link href="https://wa.me/554799961355" passHref>
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100">
              Agendar Consulta
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
