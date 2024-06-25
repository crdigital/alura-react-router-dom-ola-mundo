import './Post.css';
import { Route, Routes, useParams } from "react-router-dom";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from 'react-markdown';
import posts from 'json/posts.json';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';

const Post = () => {

    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    });

    if (!post) {
        return (
            <NaoEncontrada />
        );
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                    </PostModelo>

                } />
            </Route>
        </Routes>
    );
}

export default Post;