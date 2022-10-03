import { Container } from './styles'

export function Button({ title, icon: Icon, negative }) {
    return (
        <Container negative={negative} type="button">
            {Icon && <Icon />}
            {title}
        </Container>
    )
}
