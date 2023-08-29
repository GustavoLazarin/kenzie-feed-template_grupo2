import { createContext, useContext } from "react"

const NewsContext = createContext({})

export const useNewsContext = () => {
    return useContext(NewsContext)
}

export const NewsProvider = ({ children }) => {
    return <NewsContext.Provider value={{}}>{children}</NewsContext.Provider>
}
