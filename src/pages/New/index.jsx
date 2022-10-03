import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { TextButton } from '../../components/TextButton'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { FiArrowLeft } from 'react-icons/fi'

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <TextButton icon={FiArrowLeft} title="Voltar" />
                        </Link>
                        <h1>Novo filme</h1>
                    </header>
                    <Input placeholder="Título" />
                    <Input placeholder="Sua nota (de 0 a 5)" />
                    <TextArea placeholder="Observações" />
                    <section>
                        <Section title="Marcadores">
                            <div className="tags">
                                <NoteItem value="comédia" />
                                <NoteItem isNew value="Nova tag" />
                            </div>
                        </Section>
                    </section>
                    <section>
                        <div className="buttons">
                            <Button negative title="Exluir filme" />
                            <Button title="Salvar alterações" />
                        </div>
                    </section>
                </Form>
            </main>
        </Container>
    )
}
