//CSS
import styles from './EditPost.module.css'
//hooks
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useFetchDocument } from '../../hooks/useFetchDocument'

export default function EditPost() {
    const { id } = useParams()
    const { document: post } = useFetchDocument("posts", id)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)

            const textTags = post.tagArrays.join(", ")

            setTags(textTags)

        }
    }, [post])

    const { user } = useAuthValue()

    const { insertDocument, response } = useInsertDocument("posts")

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setFormError("")

        // validate image url
        try {
            new URL(image)
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.")
        }

        //criar o array de tags
        const tagArrays = tags.split(",").map((tag) => tag.trim().toLowerCase());

        // checar todos os valores
        if (!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os campos!")
        }

        if (formError) return;

        insertDocument({
            title,
            image,
            body,
            tagArrays,
            uid: user.uid,
            createdBy: user.displayName
        })

        // redirect to home page
        navigate("/")
    }

    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados do post como você desejar</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título:</span>
                            <input
                                type='text'
                                name='title'
                                required
                                placeholder='Pense num bom título...'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <label>
                            <span>URL da imagem:</span>
                            <input
                                type='text'
                                name='image'
                                required
                                placeholder='Insira uma imagem que representa o seu post'
                                onChange={(e) => setImage(e.target.value)}
                                value={image}
                            />
                        </label>
                        <p className={styles.preview_title}>Preview da imagem atual:</p>
                        <img
                            className={styles.image_preview}
                            src={post.image}
                            alt={post.title}
                        />
                        <label>
                            <span>Conteúdo:</span>
                            <textarea
                                name='body'
                                required
                                placeholder='Insira o conteúdo do post'
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                            >
                            </textarea>
                        </label>
                        <label>
                            <span>Tags:</span>
                            <input
                                type='text'
                                name='tags'
                                required
                                placeholder='Insira as tags separadas por vírgula'
                                onChange={(e) => setTags(e.target.value)}
                                value={tags}
                            />
                        </label>
                        {!response.loading && <button className='btn'>Editar</button>}
                        {response.loading && <button className='btn' disabled>Aguarde...</button>}
                        {response.error && <p className='error'>{response.error}</p>}
                        {formError && <p className='error'>{formError}</p>}
                    </form>
                </>
            )}
        </div>
    )
}