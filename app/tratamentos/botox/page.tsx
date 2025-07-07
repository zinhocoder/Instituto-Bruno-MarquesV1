"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Botox() {
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
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/botox.png" alt="Botox" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                Tratamento Facial
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                <span className="text-gold">Botox</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Suavize linhas de expressão e rejuvenesça sua pele com o tratamento 
                mais eficaz e seguro do mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#agendamento" passHref>
                  <Button size="lg" className="bg-gold hover:bg-[#D4AF37] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Agende sua Consulta
                  </Button>
                </Link>
                <Link href="https://wa.me/554799961355" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                  >
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-transparent rounded-3xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">⚡</div>
                      <p className="text-sm font-medium text-gray-700">Rápido</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">✨</div>
                      <p className="text-sm font-medium text-gray-700">Natural</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💎</div>
                      <p className="text-sm font-medium text-gray-700">Eficaz</p>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">🛡️</div>
                      <p className="text-sm font-medium text-gray-700">Seguro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descrição do Tratamento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {isMobile ? (
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <Image src="/botox.png" alt="Botox" width={300} height={200} className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center">O que é Botox?</h2>
                <p className="text-gray-600 mb-6">
                  O Botox, ou toxina botulínica, é um tratamento estético não cirúrgico que suaviza linhas de expressão
                  e rugas, proporcionando uma aparência mais jovem e descansada. É amplamente utilizado para tratar
                  rugas na testa, entre as sobrancelhas e ao redor dos olhos.
                </p>
                <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                <div className="space-y-2">
                  {[
                    "Redução de rugas e linhas de expressão",
                    "Prevenção do surgimento de novas rugas",
                    "Rejuvenescimento facial",
                    "Resultados rápidos e duradouros",
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
                <h2 className="text-3xl font-bold mb-6">O que é Botox?</h2>
                <p className="text-gray-600 mb-6">
                  O Botox, ou toxina botulínica, é um tratamento estético não cirúrgico que suaviza linhas de expressão
                  e rugas, proporcionando uma aparência mais jovem e descansada. É amplamente utilizado para tratar
                  rugas na testa, entre as sobrancelhas e ao redor dos olhos.
                </p>
                <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                <ul className="space-y-2">
                  {[
                    "Redução de rugas e linhas de expressão",
                    "Prevenção do surgimento de novas rugas",
                    "Rejuvenescimento facial",
                    "Resultados rápidos e duradouros",
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
                <Image src="/BOTOX.jpg" alt="Botox" width={600} height={400} className="rounded-lg shadow-lg object-cover" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Para que serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Para que serve o Botox?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações deste tratamento revolucionário
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Objetivos do Tratamento</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Suavização de Rugas</h4>
                    <p className="text-gray-600">Reduzir e prevenir linhas de expressão na testa, entre as sobrancelhas e ao redor dos olhos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Rejuvenescimento Facial</h4>
                    <p className="text-gray-600">Proporcionar uma aparência mais jovem e descansada através da relaxação muscular.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Prevenção de Rugas</h4>
                    <p className="text-gray-600">Impedir a formação de novas linhas de expressão através do controle muscular.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Harmonização Facial</h4>
                    <p className="text-gray-600">Criar equilíbrio e simetria facial através de aplicações estratégicas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/BOTOX.jpg"
                alt="Botox - Tratamento Facial"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefícios do Botox</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra por que o Botox é o tratamento mais popular para rejuvenescimento facial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Resultados Rápidos",
                description: "Efeitos visíveis em 3-7 dias após a aplicação",
                icon: "⚡"
              },
              {
                title: "Procedimento Seguro",
                description: "Aprovado pela ANVISA e utilizado há mais de 20 anos",
                icon: "🛡️"
              },
              {
                title: "Durabilidade",
                description: "Resultados duram de 4 a 6 meses em média",
                icon: "⏰"
              },
              {
                title: "Não Invasivo",
                description: "Aplicação através de microagulhas, sem cortes",
                icon: "💉"
              },
              {
                title: "Natural",
                description: "Resultados sutis e naturais, sem aparência artificial",
                icon: "✨"
              },
              {
                title: "Preventivo",
                description: "Ajuda a prevenir o surgimento de novas rugas",
                icon: "🛡️"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Feedbacks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carla Mendes",
                comment: "O tratamento com Botox mudou minha vida! Minha pele está mais jovem e radiante.",
              },
              {
                name: "Roberto Alves",
                comment: "Resultados incríveis e naturais. A equipe do Dr. Bruno Marques é excepcional!",
              },
              {
                name: "Patrícia Lima",
                comment: "Adorei o resultado! As rugas sumiram e minha autoestima melhorou muito.",
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

      {/* Nosso Espaço */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Espaço</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Image
              src="/FullSizeRender.jpg"
              alt="Espaço Instituto Bruno Marques"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
            <Image
              src="/IMG_4431.jpg"
              alt="Clínica Instituto Bruno Marques"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
            <Image
              src="/FullSizeRender.png"
              alt="Instituto Bruno Marques"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o tratamento com Botox
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "O Botox é seguro?",
                  answer: "Sim, o Botox é um tratamento seguro e aprovado pela ANVISA. É utilizado há mais de 20 anos em procedimentos estéticos e possui um perfil de segurança muito alto quando aplicado por profissionais qualificados.",
                },
                {
                  question: "Quanto tempo duram os resultados?",
                  answer: "Os resultados do Botox duram em média de 4 a 6 meses. Após esse período, os músculos gradualmente recuperam sua função e as rugas podem reaparecer. Para manter os resultados, é recomendado fazer retoques periódicos.",
                },
                {
                  question: "O procedimento é doloroso?",
                  answer: "O Botox é aplicado com agulhas muito finas, causando apenas um leve desconforto. A maioria dos pacientes descreve a sensação como pequenos alfinetadas. O procedimento é rápido, durando aproximadamente 15-30 minutos.",
                },
                {
                  question: "Quando posso ver os resultados?",
                  answer: "Os primeiros efeitos do Botox começam a aparecer em 3-7 dias após a aplicação, com resultados completos visíveis em 10-14 dias. O efeito máximo é atingido em aproximadamente 2 semanas.",
                },
                {
                  question: "Existe algum período de recuperação?",
                  answer: "Não há período de recuperação necessário. Você pode retomar suas atividades normais imediatamente após o procedimento. Apenas evite deitar por 4 horas e não massageie a área tratada por 24 horas.",
                },
                {
                  question: "Quem pode fazer o tratamento?",
                  answer: "Adultos saudáveis que desejam reduzir rugas de expressão são candidatos ideais. Uma consulta de avaliação é essencial para determinar se o tratamento é adequado para cada caso específico.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especialista Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Especialista Responsável</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça o profissional que será responsável pelo seu tratamento
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-1">
                  <div className="relative h-full">
                    <Image
                      src="/bruno.jpg"
                      alt="Dr. Bruno Marques"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="bg-gold/90 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-sm font-medium">Especialista em</p>
                        <p className="text-lg font-bold">Botox e Toxina Botulínica</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Dr. Bruno Marques</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Médico Especialista em Medicina Estética</p>
                    <p className="text-gray-600 leading-relaxed">
                      Referência nacional em tratamentos com Botox, o Dr. Bruno Marques possui vasta experiência 
                      em aplicações de toxina botulínica. Com técnica refinada e conhecimento profundo da anatomia 
                      facial, garante resultados naturais e satisfatórios.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Médico e Fisioterapeuta</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">15+ anos de experiência</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Especialista em Botox</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Técnica avançada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Resultados naturais</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Milhares de aplicações</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center">
                      "Meu objetivo é proporcionar resultados naturais e harmoniosos que devolvam 
                      a juventude e a confiança aos meus pacientes."
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="https://wa.me/554799961355" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gold hover:bg-[#D4AF37] text-white px-8 py-3 w-full sm:w-auto">
                        Agendar Consulta
                      </Button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso tratamento com Botox?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experiência Comprovada",
                description: "Anos de experiência em aplicações de Botox.",
              },
              {
                title: "Produtos de Qualidade",
                description: "Utilizamos apenas Botox de marcas reconhecidas e aprovadas.",
              },
              {
                title: "Técnica Avançada",
                description: "Aplicação precisa para resultados naturais.",
              },
              {
                title: "Consulta Personalizada",
                description: "Avaliação individual para atender suas necessidades específicas.",
              },
              {
                title: "Ambiente Seguro",
                description: "Clínica equipada com as mais recentes tecnologias.",
              },
              {
                title: "Acompanhamento Pós-procedimento",
                description: "Suporte contínuo para garantir sua satisfação.",
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
          <p className="text-xl mb-8">Agende sua consulta de Botox hoje mesmo!</p>
          <Link href="https://wa.me/554799961355" passHref>
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
