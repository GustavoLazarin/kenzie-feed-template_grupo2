import { useEffect } from "react"
import { UserNewsList } from "../../components/UserNewsList"
import { MdAddCircleOutline } from "react-icons/md"
import { useNewsContext } from "../../providers/NewsContext"
import { NewPostModal } from "../../components/modals/NewPostModal"

export const DashboardPage = () => {
    const { getOwnPosts, isCreating, setIsCreating } = useNewsContext()

    // Efeito de montagem, executa 1x na montagem do componente
    useEffect(() => {
        getOwnPosts() //Faz uma requisição GET nos posts do usuário
    }, [])

    return (
        <main>
            <section>
                <div>
                    <h2>Suas Publicações</h2>
                    <button onClick={() => setIsCreating(true)}>
                        <MdAddCircleOutline />
                        Novo Post
                    </button>
                </div>
                <UserNewsList />
            </section>
            {isCreating ? <NewPostModal /> : null}
        </main>
    )
}
