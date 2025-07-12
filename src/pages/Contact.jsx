import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Textarea,
} from "@material-tailwind/react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { useLocation } from "react-router-dom";
import BtnVolver from "../Components/Botones/BtnVolver";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#mapa") {
      const mapaElement = document.getElementById("#mapa");
      if (mapaElement) {
        mapaElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <BtnVolver />
      <div className="min-h-screen bg-gray-50">
        {/* Contenido principal */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros a
              través de cualquiera de los siguientes medios.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Información de contacto */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-2">
                <CardHeader floated={false} shadow={false} className="pb-0">
                  <Typography
                    variant="h5"
                    color="green"
                    className="text-primary_color"
                  >
                    Información de Contacto
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Encuentra todas las formas de comunicarte con nosotros
                  </Typography>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="w-5 h-5 text-primary_color mt-1" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">(+57) 311 859 9554</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MdEmail className="w-5 h-5 text-primary_color mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@manosdehistoria.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MdLocationOn className="w-5 h-5 text-primary_color mt-1" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-gray-600">
                        Cucaita, Boyacá
                        <br />
                        Colombia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MdAccessTime className="w-5 h-5 text-primary_color mt-1" />
                    <div>
                      <p className="font-medium">Horarios de Atención</p>
                      <p className="text-gray-600">
                        Lunes - Viernes: 8:00 AM - 6:00 PM
                        <br />
                        Sábados: 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Redes sociales */}
              <Card className="p-2">
                <CardHeader floated={false} shadow={false} className="pb-0">
                  <Typography
                    variant="h5"
                    color="green"
                    className="text-primary_color"
                  >
                    Síguenos
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Mantente conectado con nosotros en redes sociales
                  </Typography>
                </CardHeader>
                <CardBody>
                  <div className="flex gap-4">
                    <Button
                      variant="outlined"
                      size="sm"
                      className="hover:bg-green-50 hover:border-green-700 p-2"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outlined"
                      size="sm"
                      className="hover:bg-green-50 hover:border-green-700 p-2"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outlined"
                      size="sm"
                      className="hover:bg-green-50 hover:border-green-700 p-2"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outlined"
                      size="sm"
                      className="hover:bg-green-50 hover:border-green-700 p-2"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Formulario de contacto */}
            <div className="lg:col-span-2">
              <Card className="p-2">
                <CardHeader floated={false} shadow={false} className="pb-0">
                  <Typography
                    variant="h5"
                    color="green"
                    className="text-primary_color"
                  >
                    Envíanos un Mensaje
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Completa el formulario y nos pondremos en contacto contigo
                    lo antes posible
                  </Typography>
                </CardHeader>
                <CardBody>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Nombre *"
                        id="nombre"
                        name="nombre"
                        required
                      />
                      <Input
                        label="Email *"
                        id="email"
                        name="email"
                        type="email"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input label="Teléfono" id="telefono" name="telefono" />
                      <Input
                        label="Asunto *"
                        id="asunto"
                        name="asunto"
                        required
                      />
                    </div>

                    <Textarea
                      label="Mensaje *"
                      id="mensaje"
                      name="mensaje"
                      required
                      className="min-h-[120px]"
                    />

                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="terminos"
                        name="terminos"
                        className="rounded"
                      />
                      <Typography
                        as="label"
                        htmlFor="terminos"
                        className="text-sm text-gray-600 cursor-pointer"
                      >
                        Acepto los términos y condiciones y la política de
                        privacidad
                      </Typography>
                    </div>

                    <Button className="w-full bg-primary_color hover:opacity-90 text-white">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Mapa o información adicional */}
          <div className="mt-12">
            <Card className="p-2">
              <CardHeader floated={false} shadow={false} className="pb-0">
                <Typography
                  variant="h5"
                  color="green"
                  className="text-primary_color"
                >
                  Nuestra Ubicación
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Visítanos en nuestra ubicación en Cucaita, Boyacá
                </Typography>
              </CardHeader>
              <CardBody>
                <div
                  id="mapa"
                  className="bg-gray-100 h-64 rounded-lg flex items-center justify-center"
                >
                  <iframe
                    title="Mapa Cucaita"
                    src="https://www.google.com/maps?q=Cucaita,+Boyac%C3%A1,+Colombia&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardBody>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
