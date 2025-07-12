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
  Spinner,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useProduct } from "../zustand/useProducts";
import { sendOrder } from "../service/ordersServices";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BtnVolver from "../Components/Botones/BtnVolver";

const FinalizarCompra = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

  const onSubmit = async (data) => {
    const dataToSend = {
      ...data,
      total: totalPrice,
    };
    const response = await sendOrder("save", dataToSend);
    if (response && response.status === 200) {
      // SweetAlert de éxito
      Swal.fire({
        title: "Continuar Compra",
        text: "Para continuar con la compra lo redirigiremos a nuestro WhastApp",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        handlerSendWhatsApp();
        navigate("/");
        setLoading(false);
        clearCart();
        reset();
      });
    }
    return response;
  };

  const handlerSendWhatsApp = () => {
    setLoading(true);

    if (!loading) {
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
    }
  };

  return (
    <>
      <BtnVolver />
      <div className="flex flex-wrap pb-10 gap-6 w-full justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3/5">
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
                  {...register("nombreCliente", {
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
                {errors.nombreCliente && (
                  <Typography variant="small" color="red">
                    {errors.nombreCliente.message}
                  </Typography>
                )}
              </div>

              <div className="w-full">
                <Typography className="mb-2" variant="hapellidos_cliente">
                  Apellidos
                </Typography>
                <Input
                  label="Apellidos"
                  type="text"
                  size="lg"
                  {...register("apellidos_cliente", {
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
                {errors.apellidos_cliente && (
                  <Typography variant="small" color="red">
                    {errors.apellidos_cliente.message}
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
                  {...register("direccionCliente", {
                    required: "La dirección es obligatoria",
                    pattern: {
                      value: /^[a-zA-Z0-9\s#\-.,]{10,100}$/,
                      message:
                        "Dirección inválida. Usa letras, números y símbolos comunes como #, -, .",
                    },
                  })}
                />
                {errors.direccionCliente && (
                  <Typography variant="small" color="red">
                    {errors.direccionCliente.message}
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
                  {...register("telefonoCliente", {
                    required: "El teléfono es obligatorio",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Debe tener 10 dígitos numéricos",
                    },
                  })}
                />
                {errors.telefonoCliente && (
                  <Typography variant="small" color="red">
                    {errors.telefonoCliente.message}
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
                  {...register("identificacion", {
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
                {errors.identificacion && (
                  <Typography variant="small" color="red">
                    {errors.identificacion.message}
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
            <Button
              className="flex justify-center text-center transition-all duration-200"
              variant="gradient"
              fullWidth
              type="submit"
            >
              {loading ? <Spinner /> : "Ir a pagar"}
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
                Gracias por tu compra. Recibirás una notificación cuando tu
                pedido sea enviado.
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default FinalizarCompra;
