import React, { useState } from "react";
import { useAuth } from "../../zustand/authUsers";

const AdminPage = () => {
  const { usuarios, editUser } = useAuth();
  
  const [editingUser, setEditingUser] = useState(null);

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
  return (
    <div>
    <div className="flex justify-between mx-10 my-10">
      <h1 className="text-3xl font-semibold mb-5">Gestión de Usuarios</h1>
      <button
        onClick={() => console.log("Redirigir a formulario de nuevo usuario")}
        className="bg-primary_color text-white py-2 px-4 rounded hover:bg-colo_text transition-all duration-500 hover:scale-95 mb-5"
      >
        Agregar Nuevo Usuario
      </button>
    </div>

    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-100 border-b">
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Nombre</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Rol</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((user) => (
          <tr key={user.usuarioId} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2 text-sm text-gray-800">{user.usuarioId}</td>
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
                  <button
                    
                    className="text-green-500 hover:text-green-700 mr-3"
                  >
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
