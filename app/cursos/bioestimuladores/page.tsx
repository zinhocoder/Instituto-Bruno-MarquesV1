"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CursoBioestimuladores() {
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
        <Image
          src="/Bioestimulador-de-Colageno-1-1024x768.jpg"
          alt="Curso de Bioestimuladores"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curso de Bioestimuladores</h1>
          <p className="text-xl md:text-2xl mb-8">
            Aprenda as técnicas mais avançadas para estimular a produção de colágeno
          </p>
          <Link href="#inscricao" passHref>
            <div className="flex justify-center">
              <Button size="lg" className="bg-gold hover:bg-[#D4AF37] text-white">
                Inscreva-se Agora
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que fazer este curso?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Técnicas Inovadoras",
                description: "Aprenda as mais recentes técnicas de bioestimulação",
              },
              {
                icon: Clock,
                title: "Resultados Duradouros",
                description: "Ofereça tratamentos com efeitos prolongados",
              },
              { icon: Users, title: "Diferencial no Mercado", description: "Destaque-se com conhecimentos avançados" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes do Curso Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que você vai aprender</h2>

          {isMobile ? (
            <div className="space-y-6">
              {/* Imagem no topo para mobile */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/Bioestimulador-de-Colageno-1-1024x768.jpg"
                  alt="Aplicação de Bioestimuladores"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Lista em formato de accordion para mobile */}
              <div className="space-y-4">
                {[
                  "Tipos de bioestimuladores e suas indicações",
                  "Anatomia facial e pontos de aplicação",
                  "Técnicas de aplicação seguras e eficazes",
                  "Protocolos de tratamento personalizados",
                  "Combinação com outros procedimentos estéticos",
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-gold mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-4">
                  {[
                    "Tipos de bioestimuladores e suas indicações",
                    "Anatomia facial e pontos de aplicação",
                    "Técnicas de aplicação seguras e eficazes",
                    "Protocolos de tratamento personalizados",
                    "Combinação com outros procedimentos estéticos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-gold mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Image
                  src="/Bioestimulador-de-Colageno-1-1024x768.jpg"
                  alt="Aplicação de Bioestimuladores"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Informações do Curso Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Informações do Curso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Duração", description: "16 horas" },
              { icon: Calendar, title: "Modalidade", description: "Presencial" },
              { icon: Users, title: "Vagas Limitadas", description: "Turmas reduzidas" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Bruno Marques Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Dr. Bruno Marques</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Referência nacional em Bioestimuladores e seu mentor neste curso exclusivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/bruno.jpg"
                alt="Dr. Bruno Marques"
                width={400}
                height={500}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-bold mb-4 text-gray-800">Seu Mentor e Especialista</h3>
              <p className="text-sm md:text-lg text-gray-600 mb-6">
                Especialista em Medicina Estética Avançada e referência nacional em tratamentos com bioestimuladores,
                o Dr. Bruno Marques traz sua vasta experiência e conhecimento para oferecer os melhores resultados
                aos seus pacientes. Ele é médico e fisioterapeuta formado, especializado em estética facial e
                corporal, com expertise em técnicas avançadas de bioestimulação de colágeno.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    Mais de 15 anos de experiência em procedimentos estéticos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    Formação internacional em técnicas avançadas de bioestimulação
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    Milhares de procedimentos realizados com sucesso
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    Palestrante e instrutor em congressos nacionais e internacionais
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    Desenvolvedor de protocolos exclusivos para resultados superiores
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-600 italic mb-6">
                "Meu objetivo é compartilhar todo o conhecimento que adquiri ao longo dos anos, formando profissionais
                de excelência que possam oferecer resultados excepcionais e seguros aos seus pacientes."
              </p>

              <Button
                className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
                onClick={() => window.open("https://wa.me/5547999961355", "_blank")}
              >
                Aprenda com Dr. Bruno Marques
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos alunos dizem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Felipe Oliveira",
                testimonial:
                  "O curso do Dr. Bruno abriu meus olhos para as possibilidades dos bioestimuladores. Excelente conteúdo!",
              },
              {
                name: "Dra. Camila Rodrigues",
                testimonial:
                  "As técnicas aprendidas revolucionaram minha abordagem no rejuvenescimento facial. Resultados impressionantes!",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{item.testimonial}"</p>
                  <p className="font-semibold text-gold">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quais tipos de bioestimuladores são abordados no curso?</AccordionTrigger>
              <AccordionContent>
                O curso aborda os principais bioestimuladores disponíveis no mercado, incluindo ácido poli-L-láctico,
                hidroxiapatita de cálcio e policaprolactona, entre outros.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>É necessário ter experiência prévia com preenchedores?</AccordionTrigger>
              <AccordionContent>
                Embora a experiência prévia com preenchedores seja benéfica, não é um pré-requisito. O curso é
                estruturado para atender tanto iniciantes quanto profissionais experientes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>O curso inclui prática em pacientes reais?</AccordionTrigger>
              <AccordionContent>
                O curso inclui demonstrações ao vivo e prática em modelos anatômicos. Por questões éticas e legais, não
                realizamos práticas em pacientes reais durante o curso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscricao" className="py-16 bg-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para revolucionar seus tratamentos?</h2>
          <p className="text-xl mb-8">Inscreva-se agora e domine as técnicas de Bioestimuladores!</p>
          <Link href="https://wa.me/554799961355" passHref>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100">
                Garantir Minha Vaga
              </Button>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
