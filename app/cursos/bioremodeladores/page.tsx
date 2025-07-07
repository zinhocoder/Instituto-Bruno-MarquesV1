"use client"

import Layout from "@/components/layout"
import { CourseHeader } from "@/components/course-header"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CursoBioremodeladores() {
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
      <CourseHeader
        title="Curso de Bioremodeladores (PDRN, Exossomos e Profhilo)"
        subtitle="Domine as técnicas mais avançadas em rejuvenescimento e remodelação da pele"
        imageUrl="/conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Descrição do Curso */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {isMobile ? (
            <div className="space-y-6">
              <Image
                src="/conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg"
                alt="Curso de Bioremodeladores"
                width={300}
                height={200}
                className="rounded-lg shadow-lg mx-auto mb-6"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">Sobre o Curso</h2>
                <p className="text-gray-700 mb-6">
                  O curso de Bioremodeladores oferece uma formação avançada sobre o uso de PDRN, Exossomos e Profhilo
                  para rejuvenescimento e remodelação da pele. Aprenda as técnicas mais inovadoras para melhorar a
                  qualidade da pele e proporcionar resultados naturais aos seus pacientes.
                </p>
                <h3 className="text-xl font-semibold mb-2">O que você vai aprender:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  {[
                    "Princípios dos bioremodeladores e seus mecanismos de ação",
                    "Indicações e contraindicações de cada produto",
                    "Técnicas de aplicação para diferentes áreas do rosto e corpo",
                    "Protocolos de tratamento personalizados",
                    "Combinação com outros procedimentos estéticos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-3xl font-bold mb-4">Sobre o Curso</h2>
                <p className="text-gray-700 mb-6">
                  O curso de Bioremodeladores oferece uma formação avançada sobre o uso de PDRN, Exossomos e Profhilo
                  para rejuvenescimento e remodelação da pele. Aprenda as técnicas mais inovadoras para melhorar a
                  qualidade da pele e proporcionar resultados naturais aos seus pacientes.
                </p>
                <h3 className="text-xl font-semibold mb-2">O que você vai aprender:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Princípios dos bioremodeladores e seus mecanismos de ação</li>
                  <li>Indicações e contraindicações de cada produto</li>
                  <li>Técnicas de aplicação para diferentes áreas do rosto e corpo</li>
                  <li>Protocolos de tratamento personalizados</li>
                  <li>Combinação com outros procedimentos estéticos</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2">Informações do Curso:</h3>
                <ul className="list-none text-gray-700 mb-6">
                  <li>
                    <strong>Duração:</strong> 16 horas
                  </li>
                  <li>
                    <strong>Modalidade:</strong> Presencial com demonstração prática
                  </li>
                  <li>
                    <strong>Certificação:</strong> Certificado de conclusão emitido pelo Instituto Bruno Marques
                  </li>
                </ul>
                <Link href="https://wa.me/554799961355" passHref>
                  <div className="flex">
                    <Button className="bg-gold text-white hover:bg-[#D4AF37] transition-colors duration-300 text-lg px-8 py-3">
                      Inscreva-se Agora
                    </Button>
                  </div>
                </Link>
              </div>
              <div>
                <Image
                  src="/conceito-de-tratamento-de-beleza-jovem-recebendo-massagem-facial-de-cosmetologista-cortada-1.jpg"
                  alt="Curso de Bioremodeladores"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </>
          )}
        </div>

        {/* Dr. Bruno Marques Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Dr. Bruno Marques</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Referência nacional em Bioremodeladores e seu mentor neste curso exclusivo
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
                  Especialista em Medicina Estética Avançada e referência nacional em tratamentos com bioremodeladores,
                  o Dr. Bruno Marques traz sua vasta experiência e conhecimento para oferecer os melhores resultados
                  aos seus pacientes. Ele é médico e fisioterapeuta formado, especializado em estética facial e
                  corporal, com expertise em técnicas avançadas de bioremodelação com PDRN, Exossomos e Profhilo.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-5 h-5 bg-gold rounded-full flex-shrink-0"></span>
                    <span className="text-sm md:text-base text-gray-700">
                      Mais de 15 anos de experiência em procedimentos estéticos
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-5 h-5 bg-gold rounded-full flex-shrink-0"></span>
                    <span className="text-sm md:text-base text-gray-700">
                      Formação internacional em técnicas avançadas de bioremodelação
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-5 h-5 bg-gold rounded-full flex-shrink-0"></span>
                    <span className="text-sm md:text-base text-gray-700">
                      Milhares de procedimentos realizados com sucesso
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-5 h-5 bg-gold rounded-full flex-shrink-0"></span>
                    <span className="text-sm md:text-base text-gray-700">
                      Palestrante e instrutor em congressos nacionais e internacionais
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-5 h-5 bg-gold rounded-full flex-shrink-0"></span>
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

        {/* Depoimentos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">O que nossos alunos dizem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dra. Mariana Silva",
                testimonial:
                  "O curso do Dr. Bruno abriu meus olhos para o potencial dos bioremodeladores. As técnicas aprendidas revolucionaram minha prática clínica!",
              },
              {
                name: "Dr. André Oliveira",
                testimonial: "Excelente conteúdo e abordagem prática. O Dr. Bruno é um instrutor excepcional!",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{item.testimonial}"</p>
                  <p className="font-semibold text-gold">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual é a diferença entre PDRN, Exossomos e Profhilo?</AccordionTrigger>
              <AccordionContent>
                PDRN, Exossomos e Profhilo são diferentes tipos de bioremodeladores com mecanismos de ação distintos.
                PDRN estimula a regeneração celular, Exossomos atuam na comunicação intercelular, e Profhilo é um
                complexo de ácido hialurônico que promove bioestimulação e hidratação profunda. O curso abordará
                detalhadamente as características e aplicações de cada um.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quais são os resultados esperados com o uso de bioremodeladores?</AccordionTrigger>
              <AccordionContent>
                Os bioremodeladores podem proporcionar melhora na qualidade da pele, aumento da hidratação, estimulação
                da produção de colágeno e elastina, e um efeito geral de rejuvenescimento. Os resultados variam de
                acordo com o produto utilizado e as características individuais do paciente. Durante o curso, você
                aprenderá a avaliar e prever os resultados para cada tipo de tratamento.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>O curso inclui prática hands-on?</AccordionTrigger>
              <AccordionContent>
                Sim, o curso inclui demonstrações práticas e oportunidades para os participantes praticarem as técnicas
                de aplicação em modelos anatômicos sob supervisão. Isso permite que você ganhe confiança e habilidade
                nas técnicas antes de aplicá-las em pacientes reais.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Final */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Pronto para dominar as técnicas de bioremodelação?</h2>
          <p className="text-xl text-gray-600 mb-8">Inscreva-se agora e transforme sua prática em medicina estética!</p>
          <Link href="https://wa.me/554799961355" passHref>
            <div className="flex justify-center">
              <Button className="bg-gold text-white hover:bg-[#D4AF37] transition-colors duration-300 text-lg px-12 py-4">
                Garantir Minha Vaga
              </Button>
            </div>
          </Link>
        </section>
      </div>
    </Layout>
  )
}
