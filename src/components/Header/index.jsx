import { Input } from '../Input'
import { Container, ProfileHeader } from './styles'
import { Link } from 'react-router-dom'
export function Header() {
    return (
        <Container>
            <h2>RocketMovies</h2>
            <Input placeholder="Pesquisar pelo título" />
            <ProfileHeader>
                <div>
                    <strong>Germano Nottingham</strong>
                    <span>
                        <a href="/">sair</a>
                    </span>
                </div>
                <Link to="/profile">
                    <img
                        src="https://github.com/germanonott.png"
                        alt="Foto do usuário"
                    />
                </Link>
            </ProfileHeader>
        </Container>
    )
}
