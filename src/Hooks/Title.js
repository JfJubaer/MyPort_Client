import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} _ Jubaer's Portfolio`;
    }, [title])
}

export default useTitle;