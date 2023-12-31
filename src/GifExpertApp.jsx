import { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory) ) return;
        
        // categories.push(newCategory);
        setCategories( [ newCategory, ...categories ] )
        // setCategories( cat => [...cat, 'Valorant' ] );
        
    }
    
    return (
        <>
        
        <h1>Busca el Gif que quieras Zuricata</h1>
        
        
        <AddCategory
        // setCategories = { setCategories } 
        onNewCategory = { value => onAddCategory(value) }
        
        />
        
        
        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category }
                    category={ category }
                />
                ))
            }
            
        </>
    )
}
        