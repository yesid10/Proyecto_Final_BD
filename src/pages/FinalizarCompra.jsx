import {
  CreditCardIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/16/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useProduct } from "../zustand/useProducts";

const FinalizarCompra = () => {
  const {
    cart,
    totalPrice,
    setPriceTotal,
    loadCart,
    removeFromCart,
    clearCart,
  } = useProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handlerSendWhatsApp = () => {
    const numeroWhatsApp = "573125642753";
    const dominio = "http://localhost:5173";
    let mensaje =
      "Hola Manos de Historia, quiero realizar una compra con los siguientes productos: \n";
    const productos = cart.forEach((item) => {
      mensaje += `-Producto: ${item.nombre}\n-Cantidad: ${
        item.quantity
      }\n-Precio: $${item.precio}\n${encodeURI(item.imagen_url)}\n\n`;
    });
    mensaje += `Total: $${totalPrice + 15000} (incluye envío)\n`;

    //Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    //Se arma la URL de WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    //Se redirige al usuario a otra pestania
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-wrap py-20 gap-6 w-full justify-center">
      <form onSubmit={handleSubmit()} className="max-w-3/5">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h2" color="blue-gray">
            Finalizar Compra
          </Typography>
          <Typography
            className="mb-3 font-normal"
            variant="paragraph"
            color="gray"
          >
            Ingresa la información requerida para que tu pedido no tarde. 👌
          </Typography>

          {/* Nombres y Apellidos */}
          <div className="flex w-full justify-between gap-8">
            <div className="w-full">
              <Typography className="mb-2" variant="h6">
                Nombres
              </Typography>
              <Input
                label="Nombres"
                type="text"
                size="lg"
                {...register("nombres", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 3,
                    message: "Debe tener al menos 3 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]+$/i,
                    message: "Solo se permiten letras y espacios",
                  },
                })}
              />
              {errors.nombres && (
                <Typography variant="small" color="red">
                  {errors.nombres.message}
                </Typography>
              )}
            </div>

            <div className="w-full">
              <Typography className="mb-2" variant="h6">
                Apellidos
              </Typography>
              <Input
                label="Apellidos"
                type="text"
                size="lg"
                {...register("apellidos", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 3,
                    message: "Debe tener al menos 3 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]+$/i,
                    message: "Solo se permiten letras y espacios",
                  },
                })}
              />
              {errors.apellidos && (
                <Typography variant="small" color="red">
                  {errors.apellidos.message}
                </Typography>
              )}
            </div>
          </div>

          {/* Dirección y Teléfono */}
          <div className="flex w-full justify-between gap-8">
            <div className="w-3/4">
              <Typography className="mb-2" variant="h6">
                Dirección de entrega
              </Typography>
              <Input
                label="Dirección"
                placeholder="Calle 5 #6-07 Tunja, Boyacá"
                type="text"
                size="lg"
                {...register("direccion", {
                  required: "La dirección es obligatoria",
                  pattern: {
                    value: /^[a-zA-Z0-9\s#\-.,]{10,100}$/,
                    message:
                      "Dirección inválida. Usa letras, números y símbolos comunes como #, -, .",
                  },
                })}
              />
              {errors.direccion && (
                <Typography variant="small" color="red">
                  {errors.direccion.message}
                </Typography>
              )}
            </div>

            <div className="w-full">
              <Typography className="mb-2" variant="h6">
                Teléfono
              </Typography>
              <Input
                label="Tel."
                type="tel"
                placeholder="3000000000"
                size="lg"
                {...register("telefono", {
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Debe tener 10 dígitos numéricos",
                  },
                })}
              />
              {errors.telefono && (
                <Typography variant="small" color="red">
                  {errors.telefono.message}
                </Typography>
              )}
            </div>
          </div>

          {/* Cédula y Correo */}
          <div className="flex w-full justify-between gap-8">
            <div className="w-full">
              <Typography className="mb-2" variant="h6">
                Cédula
              </Typography>
              <Input
                label="Número de Cédula"
                placeholder="1000000000"
                type="number"
                size="lg"
                {...register("cedula", {
                  required: "La cédula es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 dígitos",
                  },
                  maxLength: {
                    value: 11,
                    message: "No debe superar los 11 dígitos",
                  },
                })}
              />
              {errors.cedula && (
                <Typography variant="small" color="red">
                  {errors.cedula.message}
                </Typography>
              )}
            </div>

            <div className="w-3/4">
              <Typography className="mb-2" variant="h6">
                Correo de contacto
              </Typography>
              <Input
                label="Email"
                type="email"
                placeholder="ejemplo@ejemplo.com"
                size="lg"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de correo inválido",
                  },
                })}
              />
              {errors.email && (
                <Typography variant="small" color="red">
                  {errors.email.message}
                </Typography>
              )}
            </div>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth type="submit">
            Ir a pagar
          </Button>
        </CardFooter>
      </form>

      <Card className="h-full shadow-lg">
        <CardHeader floated={false} className="bg-titles_color p-4">
          <Typography variant="h5" color="white">
            Resumen del pedido
          </Typography>
        </CardHeader>

        <CardBody className="space-y-4">
          <Typography
            variant="small"
            className="text-primary_color font-medium"
          >
            Productos: {cart.length} artículo(s)
          </Typography>

          {/* Tabla de productos */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 rounded-md">
              <thead className="bg-gray-100 text-sm text-primary_color">
                <tr>
                  <th className="p-2">Imagen</th>
                  <th className="p-2">Nombre</th>
                  <th className="p-2 text-center">Cantidad</th>
                  <th className="p-2 text-right">Precio</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((product, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">
                      <img
                        src={product.imagen_url}
                        alt={product.nombre}
                        className="h-10 w-10 object-cover rounded"
                      />
                    </td>
                    <td className="p-2">{product.nombre}</td>
                    <td className="p-2 text-center">{product.quantity}</td>
                    <td className="p-2 text-right">${product.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total y Envío */}
          <List className="p-0">
            <ListItem>
              <ListItemPrefix>
                <CreditCardIcon className="h-5 w-5 text-primary_color" />
              </ListItemPrefix>
              Total: ${totalPrice}
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <TruckIcon className="h-5 w-5 text-primary_color" />
              </ListItemPrefix>
              Envío: Gratis
            </ListItem>
          </List>

          <div className="border-t pt-4">
            <Typography variant="small" color="gray">
              Gracias por tu compra. Recibirás una notificación cuando tu pedido
              sea enviado.
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FinalizarCompra;
