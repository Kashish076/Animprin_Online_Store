import { createContext, useContext, useState } from "react";


const categoryContext = createContext();

const CategoryProvider = ({children}) => {

    const [categoySelected, setCategoySelected] = useState('');
    return (
        <categoryContext.Provider value={{ setCategoySelected, categoySelected }}>
          {children}
        </categoryContext.Provider>
      );
  
}

export const useCategoryState = () => {
    return useContext(categoryContext);
}
export default CategoryProvider