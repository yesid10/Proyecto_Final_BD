"use client"

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Badge,
} from "@material-tailwind/react";
import {
  FaHeart,
  FaUsers,
  FaAward,
  FaGlobe,
  FaHandshake,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import BtnVolver from "../Components/Botones/BtnVolver";

const values = [
  {
    icon: FaHeart,
    title: "Pasión por la Tradición",
    description:
      "Preservamos y honramos las técnicas artesanales ancestrales de Boyacá, transmitidas de generación en generación.",
  },
  {
    icon: FaUsers,
    title: "Comunidad Artesana",
    description: "Apoyamos a los artesanos locales, brindándoles una plataforma para mostrar su talento al mundo.",
  },
  {
    icon: FaAward,
    title: "Calidad Excepcional",
    description: "Cada pieza es única y elaborada con los más altos estándares de calidad y autenticidad.",
  },
  {
    icon: FaGlobe,
    title: "Alcance Global",
    description: "Llevamos la riqueza cultural de Colombia a hogares de todo el mundo a través de nuestras artesanías.",
  },
];

const achievements = [
  { number: "500+", label: "Artesanos Asociados" },
  { number: "15", label: "Años de Experiencia" },
  { number: "10,000+", label: "Clientes Satisfechos" },
  { number: "25", label: "Países Alcanzados" },
];

const timeline = [
  {
    year: "2009",
    title: "Fundación",
    description: "Nace Manos de Historia en Cucaita, Boyacá, con la misión de preservar las tradiciones artesanales.",
  },
  {
    year: "2012",
    title: "Primera Exportación",
    description: "Comenzamos a llevar nuestras artesanías a mercados internacionales, empezando por Estados Unidos.",
  },
  {
    year: "2015",
    title: "Certificación UNESCO",
    description: "Recibimos reconocimiento como preservadores del patrimonio cultural inmaterial.",
  },
  {
    year: "2018",
    title: "Plataforma Digital",
    description: "Lanzamos nuestra tienda en línea, conectando artesanos con clientes globales.",
  },
  {
    year: "2021",
    title: "Premio Nacional",
    description: "Ganamos el Premio Nacional de Artesanías por nuestro impacto social y cultural.",
  },
  {
    year: "2024",
    title: "Expansión Regional",
    description: "Ampliamos nuestro alcance a toda la región andina, incluyendo Ecuador y Perú.",
  },
];

const team = [
  {
    name: "María Esperanza Rodríguez",
    role: "Fundadora y Directora",
    description: "Visionaria que inició este proyecto para preservar las tradiciones de su tierra natal.",
    experience: "25 años en el sector artesanal",
  },
  {
    name: "Carlos Alberto Morales",
    role: "Director de Artesanos",
    description: "Coordinador de la red de artesanos y especialista en técnicas tradicionales.",
    experience: "18 años trabajando con comunidades",
  },
  {
    name: "Ana Lucía Vanegas",
    role: "Directora Comercial",
    description: "Experta en mercados internacionales y desarrollo de canales de venta.",
    experience: "15 años en comercio exterior",
  },
];

const AboutPage = () => {
  return (
    <>
    <BtnVolver/>
    <div className="min-h-screen bg-gradient-to-br from-primary_color to-primary_color">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-secondabg-secondary_color overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <Badge className="bg-primary_color text-secondabg-secondary_color hover:bg-primary_color text-lg px-4 py-2">
              Desde 2009 preservando tradiciones
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Sobre Nosotros</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Somos guardianes de la tradición artesanal boyacense, conectando el legado ancestral con el mundo moderno
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary_color to-transparent"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl bg-secondary_color overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-emerald-600 to-emerald-700"></div>
              <CardBody className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
                    <FaHeart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Typography variant="h3" className="text-gray-900 mb-4">Nuestra Misión</Typography>
                    <Typography className="text-gray-700 text-lg leading-relaxed">
                      Preservar, promover y comercializar las artesanías tradicionales de Boyacá, brindando a los
                      artesanos locales una plataforma digna para mostrar su talento y generar ingresos sostenibles que
                      fortalezcan sus comunidades.
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-0 shadow-xl bg-secondary_color overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-emerald-700 to-emerald-600"></div>
              <CardBody className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-xl flex items-center justify-center">
                    <FaGlobe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Typography variant="h3" className="text-gray-900 mb-4">Nuestra Visión</Typography>
                    <Typography className="text-gray-700 text-lg leading-relaxed">
                      Ser reconocidos mundialmente como la principal plataforma de artesanías colombianas auténticas,
                      siendo embajadores de la riqueza cultural de nuestro país y modelo de desarrollo sostenible para
                      comunidades artesanales.
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-gray-900 mb-4">Nuestros Valores</Typography>
            <Typography className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en Manos de Historia
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardBody className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <Typography variant="h5" className="text-gray-900">{value.title}</Typography>
                  <Typography className="text-gray-600 leading-relaxed">{value.description}</Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-gray-900 mb-4">Nuestros Logros</Typography>
            <Typography className="text-xl text-gray-600">Números que reflejan nuestro compromiso y crecimiento</Typography>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary_color rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-700 font-medium">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-gray-900 mb-4">Nuestra Historia</Typography>
            <Typography className="text-xl text-gray-600">
              Un recorrido por los momentos más importantes de nuestro crecimiento
            </Typography>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardBody className="p-6">
                        <Badge className="bg-emerald-600 hover:bg-emerald-600 text-secondabg-secondary_color mb-3">{item.year}</Badge>
                        <Typography variant="h5" className="text-gray-900 mb-2">{item.title}</Typography>
                        <Typography className="text-gray-600">{item.description}</Typography>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-secondabg-secondary_color shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-gray-900 mb-4">Nuestro Equipo</Typography>
            <Typography className="text-xl text-gray-600">Las personas que hacen posible nuestra misión día a día</Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardBody className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto text-secondabg-secondary_color text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <Typography variant="h5" className="text-gray-900">{member.name}</Typography>
                    <Typography className="text-emerald-600 font-medium mb-2">{member.role}</Typography>
                    <Typography className="text-gray-600 mb-3">{member.description}</Typography>
                    <Badge className="bg-emerald-50 text-emerald-700">
                      {member.experience}
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-gray-900 mb-4">Nuestro Proceso</Typography>
            <Typography className="text-xl text-gray-600">Cómo garantizamos la calidad y autenticidad en cada pieza</Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Selección",
                description: "Identificamos y seleccionamos artesanos con técnicas auténticas",
              },
              {
                step: "2",
                title: "Capacitación",
                description: "Brindamos formación en calidad y estándares comerciales",
              },
              {
                step: "3",
                title: "Producción",
                description: "Acompañamos el proceso creativo respetando las tradiciones",
              },
              {
                step: "4",
                title: "Comercialización",
                description: "Llevamos las obras a mercados nacionales e internacionales",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardBody className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto text-secondabg-secondary_color text-2xl font-bold">
                      {process.step}
                    </div>
                    <Typography variant="h5" className="text-gray-900">{process.title}</Typography>
                    <Typography className="text-gray-600">{process.description}</Typography>
                  </CardBody>
                </Card>
                {index < 3 && (
                  <FaArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 text-emerald-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 ">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <Typography variant="h2">¿Quieres ser parte de nuestra historia?</Typography>
          <Typography className="text-xl text-emerald-100">
            Únete a nuestra comunidad de artesanos o descubre nuestras increíbles creaciones
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary_color text-emerald-700 hover:bg-emerald-50 px-8 py-3">
              <FaHandshake className="w-5 h-5 mr-2" />
              Ser Artesano Asociado
            </Button>
            <Button
              size="lg"
              variant="outlined"
              className="border-secondabg-secondary_color text-secondabg-secondary_color hover:bg-primary_color hover:text-emerald-700 px-8 py-3 bg-transparent"
            >
              <FaStar className="w-5 h-5 mr-2" />
              Ver Nuestros Productos
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
    
  );
};

export default AboutPage;
