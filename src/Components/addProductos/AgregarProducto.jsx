import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useProduct } from "../../zustand/useProducts";
import { useNavigate } from "react-router-dom";

const AgregarProducto = () => {

  const navigate = useNavigate();
  // Desestructuramos las funciones y variables necesarias desde el estado global de productos
  const { categories, addProduct, functionGetProducts, productToEdit, updateProduct } = useProduct();

  // Configuración de react-hook-form para manejar el formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Si hay un producto a editar, inicializamos el formulario con esos datos
useEffect(() => {
  if (productToEdit) {
    reset({
      nombre: productToEdit.nombre,
      precio: productToEdit.precio,
      descripcion: productToEdit.description,
      imagen_url: productToEdit.imagen_url,
      stock: productToEdit.stock,
      categoria: productToEdit.categoriaId, // Usa categoriaId para inicializar
    });
  }
}, [productToEdit, reset]);

  // Preparar los datos para enviar al backend
  const prepareDataForBackend = (formData) => {
    console.log("Fromdata", formData)
    const productData = {
      // categoriaId: parseInt(formData.categoria),
      nombre: formData.nombre,
      description: formData.descripcion,
      precio: parseFloat(formData.precio),
      imagen_url: formData.imagen_url,
      stock: parseInt(formData.stock),
    };
    return productData;
  };


  // Función para manejar el envío del formulario
  const onSubmit = async (data) => {

    console.log(prepareDataForBackend(data))

    
    // const categoriaId = categories.find(cat => cat.nombre === data.categoria);
    console.log("Categoria id", data)

    //Si hay un producto a editar, actualizamos el producto, si no, lo agregamos
    if (productToEdit) {
      console.log("Producto enviado para editar:", data);
      // Si hay un producto a editar, actualiza el producto
      await updateProduct(productToEdit.productoId, prepareDataForBackend(data), navigate);
    } else {
      // Si no hay un producto a editar, agrega un nuevo producto
      await addProduct(prepareDataForBackend(data), navigate);
    }

    functionGetProducts(); // Actualiza la lista de productos
    reset(); // Resetea el formulario después de enviarlo
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-5">
        {productToEdit ? "Editar Producto" : "Agregar Producto"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Campo de Categoría */}
        <div>
          <label htmlFor="categoria" className="block text-gray-700">
            Categoría
          </label>
          <select
            id="categoria"
            name="categoria"
            {...register("categoria", {
              required: "La categoría es obligatoria",
            })}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((categoria) => (
              <option key={categoria.categoriaId} defaultValue={productToEdit?.categoriaId} value={categoria.categoriaId}>
                {categoria.nombre}
              </option>
            ))}
          </select>
          {errors.categoria && (
            <p className="text-red-500 text-sm">{errors.categoria.message}</p>
          )}
        </div>

        {/* Campo de Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-gray-700">
            Nombre del Producto
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa el nombre del producto"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-colo_text focus:outline-none"
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm">{errors.nombre.message}</p>
          )}
        </div>

        {/* Campo de Precio */}
        <div>
          <label htmlFor="precio" className="block text-gray-700">
            Precio
          </label>
          <input
            id="precio"
            type="number"
            placeholder="Ingresa el precio del producto"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: { value: 1, message: "El precio debe ser mayor a 0" },
            })}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-colo_text focus:outline-none"
          />
          {errors.precio && (
            <p className="text-red-500 text-sm">{errors.precio.message}</p>
          )}
        </div>

        {/* Campo de Descripción */}
        <div>
          <label htmlFor="descripcion" className="block text-gray-700">
            Descripción
          </label>
          <textarea
            id="descripcion"
            placeholder="Ingresa una descripción para el producto"
            {...register("descripcion", {
              required: "La descripción es obligatoria",
            })}
            rows="4"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-colo_text focus:outline-none"
          ></textarea>
          {errors.descripcion && (
            <p className="text-red-500 text-sm">{errors.descripcion.message}</p>
          )}
        </div>

        {/* Campo de URL de Imagen */}
        <div>
          <label htmlFor="imagen_url" className="block text-gray-700">
            URL de la Imagen
          </label>
          <input
            id="imagen_url"
            type="url"
            placeholder="Ingresa la URL de la imagen"
            {...register("imagen_url", {
              required: "La URL de la imagen es obligatoria",
            })}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-colo_text focus:outline-none"
          />
          {errors.imagen_url && (
            <p className="text-red-500 text-sm">{errors.imagen_url.message}</p>
          )}
        </div>

        {/* Campo de Stock */}
        <div>
          <label htmlFor="stock" className="block text-gray-700">
            Stock
          </label>
          <input
            id="stock"
            type="number"
            placeholder="Ingresa la cantidad en stock"
            {...register("stock", {
              required: "El stock es obligatorio",
              min: { value: 0, message: "El stock no puede ser negativo" },
            })}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-colo_text focus:outline-none"
          />
          {errors.stock && (
            <p className="text-red-500 text-sm">{errors.stock.message}</p>
          )}
        </div>

        {/* Botón de Enviar */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary_color text-white rounded-md hover:bg-colo_text hover:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-colo_text"
          >
            {productToEdit ? "Editar Producto" : "Agregar Producto"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarProducto;
