import { Stars } from '../Stars'
import { Tag } from '../Tag'
import { Container } from './styles'

export function Card({ data, ...rest }) {
    return (
        <Container data={data} to="/" {...rest}>
            <div>
                <h3>{data.title}</h3>
                <Stars ratings={data.ratings} />
            </div>
            <p>{data.description}</p>

            {data.tags && (
                <footer>
                    {data.tags.map(tag => (
                        <Tag title={tag.gender} key={tag.id} />
                    ))}
                </footer>
            )}
        </Container>
    )
}
