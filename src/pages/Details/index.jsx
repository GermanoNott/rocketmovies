import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Stars } from '../../components/Stars'
import { TextButton } from '../../components/TextButton'
import { Container, Content, MovieInfo, AuthorInfo } from './styles'
import { FiClock, FiArrowLeft } from 'react-icons/fi'

export function Details(data) {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <TextButton icon={FiArrowLeft} title="voltar" />
                    <MovieInfo>
                        <h1>{data.title || 'ZombieLand'} </h1>
                        <div className="star">
                            <Stars ratings={data.ratings || 3} />
                        </div>
                    </MovieInfo>
                    <AuthorInfo>
                        <div>
                            <img src="https://github.com/germanonott.png" />

                            <span>Por {data.name || 'Germano Nottingham'}</span>
                        </div>

                        <div>
                            <FiClock />
                            <span>{data.updated_at || '27/09/2022 15:00'}</span>
                        </div>
                    </AuthorInfo>
                    <div className="tags">
                        <Tag title="ficção científica" />
                        <Tag title="comédia" />
                        <Tag title="pós-apocaliptico" />
                    </div>

                    <p>
                        {data.description ||
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet veritatis facilis enim ad? Magni nostrum obcaecati, provident velit blanditiis aut neque iste cupiditate aperiam dolorem animi labore, nisi magnam doloribus praesentium perspiciatis ea debitis dolore tempore sapiente nobis quis? Mollitia doloremque, accusamus a eos laborum nam enim adipisci similique facilis rem veritatis quisquam, ex, rerum deleniti quae est modi officiis eveniet minima consectetur! Dolorem dolorum placeat impedit quas molestiae libero molestias nemo! Tempora dignissimos non mollitia rem autem ad necessitatibus.Aesentium perspiciatis ea debitis dolore tempore sapiente nobis quis? Mollitia doloremque, accusamus a eos laborum nam enim adipisci similique facilis rem veritatis quisquam, ex, rerum deleniti quae est modi officiis eveniet minima consectetur! Dolorem dolorum placeat impedit quas molestiae libero molestias nemo! Tempora dignissimos non mollitia rem autem ad necessitatibus'}
                    </p>
                </Content>
            </main>
        </Container>
    )
}
