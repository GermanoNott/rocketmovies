import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'

export function SignUp() {
    return (
        <Container>
            <Form>
                <div className="top">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Faça seu login</h2>
                </div>
                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha" type="password" icon={FiLock} />

                <Button title="Cadastrar" />

                <Link to="/">
                    <TextButton title="Voltar para login" icon={FiArrowLeft} />
                </Link>
            </Form>
            <Background />
        </Container>
    )
}
