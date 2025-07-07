"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ChevronRight, Clock, Shield, Award, ThumbsUp, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HarmonizacaoIntimaMasculina() {
  const [showResults, setShowResults] = useState(false)

  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/photo_2023-05-12_15-13-08.png"
            alt="Harmonização Íntima Masculina"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                Procedimento Íntimo
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Harmonização <span className="text-gold">Íntima Masculina</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
                Aumento peniano seguro e eficaz com técnicas avançadas e resultados comprovados, 
                proporcionando maior satisfação e autoestima.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/554799961355" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-[#D4AF37] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Agende sua Consulta
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                  onClick={() => {
                    const element = document.querySelector("#beneficios")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-transparent rounded-3xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/50 rounded-2xl">
                      <div className="text-3xl font-bold text-gold mb-2">💪</div>
                      <p className="text-sm font-medium text-gray-700">Seguro</p>
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para que serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Para que serve a Harmonização Íntima Masculina?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda os objetivos e indicações deste procedimento especializado
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
                    <h4 className="text-lg font-semibold mb-2">Aumento do Diâmetro Peniano</h4>
                    <p className="text-gray-600">Procedimento para aumentar o volume e diâmetro do pênis através de técnicas especializadas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Melhora da Autoestima</h4>
                    <p className="text-gray-600">Aumentar a confiança e satisfação pessoal relacionada à aparência íntima.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Correção de Assimetrias</h4>
                    <p className="text-gray-600">Harmonizar proporções e corrigir diferenças anatômicas quando necessário.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Melhora da Satisfação Íntima</h4>
                    <p className="text-gray-600">Proporcionar maior satisfação nas relações íntimas através do aumento da confiança.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/photo_2023-05-12_15-13-08.png"
                alt="Harmonização Íntima Masculina"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefícios da Harmonização Íntima Masculina</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as vantagens deste procedimento minimamente invasivo que pode transformar sua vida íntima e
              autoestima
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ThumbsUp className="w-12 h-12 text-gold" />,
                title: "Aumento do Diâmetro",
                description:
                  "Ganho significativo de medidas penianas, proporcionando maior satisfação durante as relações.",
              },
              {
                icon: <Shield className="w-12 h-12 text-gold" />,
                title: "Procedimento Seguro",
                description:
                  "Técnica minimamente invasiva realizada com produtos biocompatíveis e aprovados pela ANVISA.",
              },
              {
                icon: <Clock className="w-12 h-12 text-gold" />,
                title: "Recuperação Rápida",
                description: "Retorno às atividades normais em poucos dias, com resultados imediatos e duradouros.",
              },
              {
                icon: <Award className="w-12 h-12 text-gold" />,
                title: "Resultados Naturais",
                description: "Aparência e sensação completamente naturais, sem comprometer a funcionalidade.",
              },
              {
                icon: <Star className="w-12 h-12 text-gold" />,
                title: "Aumento da Autoestima",
                description: "Maior confiança e satisfação na vida íntima, melhorando a qualidade de vida.",
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-gold" />,
                title: "Sem Internação",
                description: "Procedimento ambulatorial que não requer hospitalização ou anestesia geral.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona o Procedimento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda o passo a passo da Harmonização Íntima Masculina realizada no Instituto Bruno Marques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div>
              <Image
                src="/IMG_2979.png?height=600&width=800&text=Procedimento+Harmonizacao+Intima"
                alt="Procedimento de Harmonização Íntima Masculina"
                width={400}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Avaliação Inicial",
                    description:
                      "Consulta detalhada para entender suas expectativas e avaliar a viabilidade do procedimento para o seu caso específico.",
                  },
                  {
                    number: "02",
                    title: "Planejamento Personalizado",
                    description:
                      "Desenvolvimento de um plano de tratamento individualizado, considerando suas características anatômicas e objetivos desejados.",
                  },
                  {
                    number: "03",
                    title: "Procedimento",
                    description:
                      "Aplicação de preenchedores para aumento peniano, destravamento peniano e espessamento dérmico, além da redução de gordura localizada. Procedimento seguro, minimamente invasivo.",
                  },
                  {
                    number: "04",
                    title: "Recuperação",
                    description:
                      "Período de recuperação rápido, com orientações específicas para garantir os melhores resultados e minimizar desconfortos.",
                  },
                  {
                    number: "05",
                    title: "Acompanhamento",
                    description:
                      "Consultas de acompanhamento para monitorar os resultados e garantir sua satisfação com o procedimento.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Antes e Depois Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Antes e Depois</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Confira resultados que só o Instituto Bruno Marques garante com técnicas avançadas e os melhores produtos
              do mercado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden">
              {!showResults ? (
                <div className="relative">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src="/aumento-peniano-beneficios-harmonizacao-intima.jpg?height=600&width=1000&text=Resultados+Harmonizacao+Intima"
                      alt="Resultados Harmonização Íntima Masculina (Imagem borrada)"
                      fill
                      className="object-cover blur-lg"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black bg-opacity-50">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      Clique no botão abaixo se quiser conferir nossos resultados e ter acesso ao antes e depois.
                    </h3>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-8"
                      onClick={() => setShowResults(true)}
                    >
                      Ver Resultados
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-center">Antes</h3>
                    <Image
                      src="/placeholder.svg?height=400&width=500&text=Antes"
                      alt="Antes do procedimento"
                      width={500}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-center">Depois</h3>
                    <Image
                      src="/placeholder.svg?height=400&width=500&text=Depois"
                      alt="Depois do procedimento"
                      width={500}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300 mb-6">
                Confira alguns exemplos de casos que atendemos e obtiveram resultados incríveis!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-8"
                onClick={() => window.open("https://wa.me/554799961355", "_blank")}
              >
                Agende sua Avaliação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Depoimentos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que nossos pacientes dizem sobre sua experiência e resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "R.S., 24 anos",
                testimonial:
                  "Sempre tive insegurança com relação ao tamanho. Após a harmonização íntima, minha autoconfiança aumentou significativamente e minha vida íntima melhorou muito.",
                rating: 5,
              },
              {
                name: "M.A., 35 anos",
                testimonial:
                  "Procedimento sem dor e sem cortes, com resultados imediatos. O Dr. Bruno e sua equipe garantem total profissionalismo e discrição em cada etapa do tratamento.",
                rating: 5,
              },
              {
                name: "J.P., 48 anos",
                testimonial:
                  "Após pesquisar muito, escolhi o Instituto Bruno Marques e não me arrependo. Os resultados superaram minhas expectativas e a recuperação foi rápida.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none">
                <CardContent className="p-8">
                  <div className="flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.testimonial}"</p>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
                          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tire suas dúvidas sobre a Harmonização Íntima Masculina
              </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "O procedimento é doloroso?",
                  answer:
                    "O procedimento é realizado com anestesia local, o que minimiza significativamente o desconforto. A maioria dos pacientes relata apenas um leve incômodo durante e após o procedimento, que pode ser facilmente controlado com medicação.",
                },
                {
                  question: "Quanto tempo duram os resultados?",
                  answer:
                    "Os resultados da Harmonização Íntima Masculina são duradouros, podendo permanecer por vários anos. No entanto, a longevidade dos resultados varia de acordo com cada corpo, metabolismo e estilo de vida. Para manter os efeitos desejados, o ideal é realizar manutenções periódicas, sendo recomendado um intervalo de aproximadamente 12 meses.",
                },
                {
                  question: "O procedimento afeta a função sexual?",
                  answer:
                    "A Harmonização Íntima Masculina não afeta negativamente a função sexual. Na verdade, muitos pacientes relatam maior confiança e satisfação após o procedimento, o que pode contribuir para uma vida sexual mais prazerosa.",
                },
                {
                  question: "Quanto tempo leva para recuperação?",
                  answer:
                    "A recuperação é relativamente rápida. A maioria dos pacientes pode retornar às atividades normais em 2-3 dias, evitando apenas atividades físicas intensas. Em relação à atividade sexual, recomenda-se uma abstinência de 13 a 15 dias, conforme orientação médica.",
                },
                {
                  question: "Quais são os riscos do procedimento?",
                  answer:
                    "Como qualquer procedimento médico, existem riscos, embora sejam mínimos quando realizado por profissionais qualificados. Possíveis efeitos colaterais incluem inchaço temporário e hematomas. Complicações mais sérias são raras quando o procedimento é realizado por especialistas experientes.",
                },
                {
                  question: "Quem pode realizar o procedimento?",
                  answer:
                    "Homens adultos saudáveis que desejam aumentar o diâmetro peniano são candidatos potenciais. Uma avaliação médica prévia é essencial para determinar se o procedimento é adequado para cada caso específico.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-left font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 from-[#C4A052] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Transforme sua vida íntima hoje mesmo</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma consulta de avaliação com nossos especialistas e descubra como a Harmonização Íntima Masculina pode
            aumentar sua autoconfiança e satisfação
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-12"
            onClick={() => window.open("https://wa.me/554799961355", "_blank")}
          >
            Agende sua Consulta
          </Button>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher o Instituto Bruno Marques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os diferenciais que fazem do Instituto Bruno Marques referência em Harmonização Íntima Masculina
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Equipe Especializada",
                  description:
                    "Profissionais altamente qualificados e com vasta experiência em procedimentos íntimos masculinos.",
                },
                {
                  title: "Tecnologia de Ponta",
                  description:
                    "Utilizamos os mais avançados materiais e técnicas disponíveis no mercado para garantir resultados superiores.",
                },
                {
                  title: "Ambiente Discreto",
                  description:
                    "Privacidade e confidencialidade total durante todo o processo, desde a consulta até o pós-procedimento.",
                },
                {
                  title: "Atendimento Personalizado",
                  description:
                    "Cada paciente recebe um plano de tratamento individualizado, adaptado às suas necessidades específicas.",
                },
              ].map((differential, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{differential.title}</h3>
                    <p className="text-gray-600">{differential.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Image
                src="/FullSizeRender.png?height=600&width=800&text=Instituto+Bruno+Marques"
                alt="Instituto Bruno Marques"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Especialista Section */}
      <section className="py-20 bg-gray-50">
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
                      src="/harmonizacaopenianabruno.jpg"
                      alt="Dr. Bruno Marques"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="bg-gold/90 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-sm font-medium">Especialista em</p>
                        <p className="text-lg font-bold">Harmonização Íntima Masculina</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800">Dr. Bruno Marques</h3>
                    <p className="text-gold font-semibold text-lg mb-4">Médico Especialista em Medicina Estética</p>
                    <p className="text-gray-600 leading-relaxed">
                      Referência nacional em Harmonização Íntima Masculina, o Dr. Bruno Marques é pioneiro 
                      em técnicas avançadas de harmonização íntima no Brasil. Com mais de 15 anos de experiência, 
                      já realizou milhares de procedimentos com excelência e segurança.
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
                        <span className="text-gray-700 text-sm">Formação internacional</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Palestrante internacional</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Técnicas exclusivas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Milhares de casos</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center">
                      "Meu compromisso é proporcionar resultados excepcionais que devolvam a autoconfiança 
                      e melhorem a qualidade de vida dos meus pacientes."
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

      {/* Final CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-3">Insatisfeito com o que vê?</h2>
          <p className="text-2xl font-semibold text-gold mb-6">A solução que você procura está aqui!</p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato hoje mesmo e descubra como podemos transformar sua confiança e satisfação
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052] text-lg px-12"
            onClick={() => window.open("https://wa.me/554799961355", "_blank")}
          >
            Agende sua Consulta
          </Button>
        </div>
      </section>
    </Layout>
  )
}
