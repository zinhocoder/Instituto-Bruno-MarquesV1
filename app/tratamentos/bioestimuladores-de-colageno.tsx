"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BioestimuladoresDeColageno() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Bioestimuladores de Colágeno</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Bioestimulador-de-Colageno-1-1024x768.jpg"
              alt="Bioestimuladores de Colágeno"
              layout="fill"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">O que são Bioestimuladores de Colágeno?</h2>
            <p className="text-gray-700 mb-6">
              Bioestimuladores de colágeno são tratamentos estéticos que estimulam a produção natural de colágeno na
              pele. Eles ajudam a melhorar a firmeza, elasticidade e textura da pele, combatendo os sinais de
              envelhecimento de forma natural e duradoura.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefícios:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Aumento da produção de colágeno</li>
              <li>Melhora da firmeza e elasticidade da pele</li>
              <li>Redução de rugas e linhas finas</li>
              <li>Rejuvenescimento facial e corporal</li>
              <li>Resultados progressivos e duradouros</li>
            </ul>
            <Button
              className="bg-gradient-to-r from-[#C4A052] to-[#D4AF37] text-white hover:from-[#D4AF37] hover:to-[#C4A052]"
              onClick={() => window.open("https://wa.me/554799961355", "_blank")}
            >
              Agende sua Consulta
            </Button>
          </div>
        </div>

        {/* Especialistas */}
        <section className="py-16 bg-gray-50 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nosso Especialista</h2>
            <div className="flex justify-center">
              <Card className="max-w-md">
                <CardContent className="p-6 text-center">
                  <Image
                    src="/bruno.jpg"
                    alt="Dr. Bruno Marques"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">Dr. Bruno Marques</h3>
                  <p className="text-gold font-medium mb-3">Médico Especialista</p>
                  <p className="text-gray-600 text-sm">
                    Especialista em medicina estética e bioestimuladores de colágeno.
                    Profissional dedicado a proporcionar resultados naturais e duradouros.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
