import { FiPlus } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'

import { Container } from './styles'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <Container>
            <Header />
            <div className="content">
                <div className="header">
                    <h2>Meus Filmes</h2>
                    <Link to="/new">
                        <Button title="Adicionar filme" icon={FiPlus} />
                    </Link>
                </div>

                <main>
                    <Card
                        data={{
                            name: 'Germanott',
                            id: 1,
                            title: 'The Inception',
                            ratings: 5,
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            tags: [
                                { id: '1', gender: 'drama' },
                                { id: '2', gender: 'ficção' }
                            ]
                        }}
                    />
                    <Card
                        data={{
                            name: 'Germanott',
                            id: 2,
                            title: 'ZombieLand',
                            ratings: 3,
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            tags: [
                                { id: '1', gender: 'ação' },
                                { id: '2', gender: 'ficção' },
                                { id: '3', gender: 'comédia' }
                            ]
                        }}
                    />
                    <Card
                        data={{
                            name: 'Germanott',
                            id: 3,
                            title: 'Bohemian Rhapsody',
                            ratings: 4,
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            tags: [
                                { id: '1', gender: 'musical' },
                                { id: '2', gender: 'documentário' }
                            ]
                        }}
                    />
                </main>
            </div>
        </Container>
    )
}
