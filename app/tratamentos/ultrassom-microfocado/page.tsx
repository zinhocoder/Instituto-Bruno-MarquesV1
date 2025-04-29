import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UltrassomMicrofocado() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Ultrassom+Microfocado"
          alt="Ultrassom Microfocado"
          fill
          className="absolute z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ultrassom Microfocado</h1>
          <p className="text-xl md:text-2xl mb-8">Tecnologia avançada para lifting e firmeza da pele</p>
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
              <h2 className="text-3xl font-bold mb-6">O que é Ultrassom Microfocado?</h2>
              <p className="text-gray-600 mb-6">
                O Ultrassom Microfocado é uma tecnologia avançada não invasiva que utiliza energia ultrassônica para
                estimular a produção de colágeno nas camadas profundas da pele. Este tratamento proporciona um efeito
                lifting natural, melhorando a firmeza e elasticidade da pele, reduzindo rugas e linhas de expressão.
              </p>
              <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
              <ul className="space-y-2">
                {[
                  "Efeito lifting sem cirurgia",
                  "Estimulação da produção de colágeno",
                  "Melhora da firmeza e elasticidade da pele",
                  "Redução de rugas e linhas de expressão",
                  "Resultados naturais e duradouros",
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
                src="/placeholder.svg?height=400&width=600&text=Ultrassom+Microfocado"
                alt="Ultrassom Microfocado"
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
                  before: "/placeholder.svg?height=200&width=200&text=Ultrassom+Antes+1",
                  after: "/placeholder.svg?height=200&width=200&text=Ultrassom+Depois+1",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Ultrassom+Antes+2",
                  after: "/placeholder.svg?height=200&width=200&text=Ultrassom+Depois+2",
                },
                {
                  before: "/placeholder.svg?height=200&width=200&text=Ultrassom+Antes+3",
                  after: "/placeholder.svg?height=200&width=200&text=Ultrassom+Depois+3",
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
                name: "Renata Almeida",
                comment:
                  "O Ultrassom Microfocado foi incrível! Notei uma melhora significativa na firmeza da minha pele após o tratamento.",
              },
              {
                name: "Luciana Santos",
                comment:
                  "Resultados surpreendentes! Minha pele está muito mais firme e as rugas diminuíram consideravelmente.",
              },
              {
                name: "Cristina Oliveira",
                comment: "Excelente tratamento! O efeito lifting foi visível logo após a primeira sessão.",
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
              src="/placeholder.svg?height=300&width=400&text=Sala+Ultrassom+1"
              alt="Sala de Ultrassom Microfocado"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400&text=Equipamento+Ultrassom"
              alt="Equipamento de Ultrassom Microfocado"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=400&text=Procedimento+Ultrassom"
              alt="Procedimento de Ultrassom Microfocado"
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
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso Ultrassom Microfocado?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnologia de Ponta",
                description: "Utilizamos os equipamentos mais modernos e eficazes do mercado.",
              },
              {
                title: "Equipe Especializada",
                description: "Profissionais altamente qualificados e experientes.",
              },
              {
                title: "Resultados Comprovados",
                description: "Milhares de clientes satisfeitos com resultados visíveis.",
              },
              {
                title: "Tratamento Personalizado",
                description: "Adaptamos o procedimento às necessidades específicas de cada paciente.",
              },
              {
                title: "Procedimento Não Invasivo",
                description: "Sem cortes, sem anestesia e sem tempo de recuperação.",
              },
              {
                title: "Acompanhamento Pós-procedimento",
                description: "Suporte completo para garantir os melhores resultados.",
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
          <p className="text-xl mb-8">Agende sua sessão de Ultrassom Microfocado hoje mesmo!</p>
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
