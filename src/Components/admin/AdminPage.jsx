import React, { useState } from "react";
import { useAuth } from "../../zustand/authUsers";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const { usuarios, editUser, addUser, removeUser } = useAuth();

  const [editingUser, setEditingUser] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEdit = (user) => {
    setEditingUser(user); // Establece el usuario que se va a editar
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({
      ...editingUser,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setEditingUser(null); // Cancela la edición
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const prepareDataForBackend = (formData) => {
    
    const productData = {
      nombre: formData.nombre,
      email: formData.email,
      imageUrl: formData.image,
      password: formData.password,
      rol: formData.rol
    };
    return productData;
  };

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    // Aquí enviarías los datos al backend
    handleOpen(); // Cerrar el modal al finalizar
    addUser(prepareDataForBackend(data), navigate);
  };


  const handleDelete = (usuarioId) => {
    removeUser(usuarioId)
  }

  return (
    <div>
      <div className="flex justify-between mx-10 my-10">
        <h1 className="text-3xl font-semibold mb-5">Gestión de Usuarios</h1>
        {/* <button
        onClick={() => console.log("Redirigir a formulario de nuevo usuario")}
        className="bg-primary_color text-white py-2 px-4 rounded hover:bg-colo_text transition-all duration-500 hover:scale-95 mb-5"
      >
        Agregar Nuevo Usuario
      </button> */}
        <Button
        className="bg-primary_color text-gray-300 hover:scale-95 transition-all duration-300"
        onClick={handleOpen}
      >
        Agregar Nuevo Usuario
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Agregar Nuevo Usuario
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Ingrese los datos del usuario que desea agregar
              </Typography>
              {/* Campo Nombre */}
              <Typography className="-mb-2" variant="h6">
                Nombre
              </Typography>
              <Input
                label="Nombre"
                size="lg"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                })}
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm">
                  {errors.nombre.message}
                </p>
              )}

              {/* Campo Email */}
              <Typography className="-mb-2" variant="h6">
                Email
              </Typography>
              <Input
                label="Email"
                size="lg"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Ingrese un email válido",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Campo Password */}
              <Typography className="-mb-2" variant="h6">
                Password
              </Typography>
              <Input
                label="Password"
                size="lg"
                type="password"
                {...register("password", {
                  required: "El password es obligatorio",
                 
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              {/* Campo Rol */}
              <Typography className="-mb-2" variant="h6">
                Rol
              </Typography>
              <Input
                label="Rol"
                size="lg"
                {...register("rol", { required: "El rol es obligatorio" })}
              />
              {errors.rol && (
                <p className="text-red-500 text-sm">{errors.rol.message}</p>
              )}

              {/* Campo URL de imagen */}
              <Typography className="-mb-2" variant="h6">
                URL de la foto de perfil
              </Typography>
              <Input
                label="URL de Imagen"
                size="lg"
                {...register("image", {
                  required: "La URL de la imagen es obligatoria",
                  pattern: {
                    value:
                      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i,
                    message: "Ingrese una URL de imagen válida",
                  },
                })}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" className="bg-colo_text" fullWidth>
                Agregar Usuario
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Nombre
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Email
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Rol
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.usuarioId} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">
                {user.usuarioId}
              </td>
              <td className="flex items-center px-4 py-2 text-sm text-gray-800">
                {editingUser?.usuarioId === user.usuarioId ? (
                  <input
                    type="text"
                    name="nombre"
                    value={editingUser.nombre}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                ) : (
                  <>
                    <img
                      className="w-10 h-10 rounded-full mr-3"
                      src={user.imageUrl}
                      alt="Imagen del usuario"
                    />
                    <span>{user.nombre}</span>
                  </>
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {editingUser?.usuarioId === user.usuarioId ? (
                  <input
                    type="email"
                    name="email"
                    value={editingUser.email}
                    onChange={handleChange}
                    className="border rounded p-2"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {editingUser?.usuarioId === user.usuarioId ? (
                  <select
                    name="rol"
                    value={editingUser.rol}
                    onChange={handleChange}
                    className="border rounded p-2"
                  >
                    <option value="ADMIN">ADMIN</option>
                    <option value="USER">USER</option>
                  </select>
                ) : (
                  user.rol
                )}
              </td>
              <td className="px-4 py-2 text-sm">
                {editingUser?.usuarioId === user.usuarioId ? (
                  <>
                    <button className="text-green-500 hover:text-green-700 mr-3">
                      Guardar
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-500 hover:text-blue-700 mr-3"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(user.usuarioId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
