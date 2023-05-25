import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {
      //console.log( newCategory )
      //setCategories([ ...categories, "Valorant"]);
      //categories.push(newCategory);
      if(categories.includes(newCategory)) return;

      setCategories([newCategory, ...categories]);
    }

  return (
    <>
        {/* titulos*/}
        <h1>GifExpertApp</h1>
        {/*Input */}
        <AddCategory 
          //setCategories={ setCategories}
          onNewCategory={value => onAddCategory(value) } //se puede hacer la forma resumida de event y mandar solo el onAddCategory
        />

        {/*Listado de Gif */}

        {
            categories.map( (category) => 
              (
                <GifGrid
                  key={category} 
                  category={category}/>
              )
          )
        }            

            {/*Gif Item*/}
    </>
  )
}
