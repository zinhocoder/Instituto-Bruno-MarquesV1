"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PreenchimentoLabial() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Preenchimento Labial</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/preenchimento_labial_tratamento.jpg"
              alt="Preenchimento Labial"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">O que é Preenchimento Labial?</h2>
            <p className="text-gray-700 mb-6">
              O preenchimento labial é um procedimento estético que visa aumentar o volume e definir o contorno dos
              lábios, proporcionando um sorriso mais harmonioso e atraente. Utilizamos produtos seguros e técnicas
              modernas para garantir resultados naturais e personalizados.
            </p>
            <h3 className="text-xl font-semibold mb-2">Benefícios:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Aumento do volume labial</li>
              <li>Correção de assimetrias</li>
              <li>Definição do contorno dos lábios</li>
              <li>Suavização de linhas ao redor da boca</li>
              <li>Hidratação e rejuvenescimento dos lábios</li>
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
                    Especialista em medicina estética e preenchimentos faciais.
                    Profissional dedicado a proporcionar resultados naturais e harmoniosos.
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
