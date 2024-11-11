import { useState } from 'react'
// import { AddCategory } from './components/index'; // No es necesario poner el index, por defecto al apuntar a la carpeta lo primero que busca es el index
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['How I Met Your Mother'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return; // Si ya existe la categoría, se sale de la función y no procede
        }

        setCategories([newCategory, ...categories]);
        // setcategories([ ...categories,category ]);

    }

    const onDeleteCategories = () => {
        setCategories([])
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            <button onClick={event => onDeleteCategories()}>Eliminar Categorías</button>

            {/* Listado de Gifs */}
            {
                categories.map(category => ( // No es necesario poner el return
                    <GifGrid key={category} category={category} />
                ))
            }
            {/* Gif Item */}
        </>
    )
}
