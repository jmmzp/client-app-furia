import { useNavigate } from 'react-router-dom'
import logoFuria from '../../assets/logo-furia.png'
import FormRegister from '../../components/FormRegister'
import useUserContext from '../../hooks/useUserContext'
import Button from '../../styles/Button'
import Container from '../../styles/Container'
import { Footer, Span, Title, Wrapper } from './styles'

export default function Login() {
	const { modal } = useUserContext()
	const navigate = useNavigate()

	return (
		<Container>
			{modal}
			<Wrapper>
				<img src={logoFuria} alt="Logo do time da Furia esports." />

				<div>
					<Title>CADASTRE-SE</Title>

					<FormRegister />

					<Span>JÁ FAZ PARTE DA TORCIDA?</Span>

					<Button className="btn-login" onClick={() => navigate('/login')}>
						FAÇA LOGIN
					</Button>
				</div>

				<Footer>
					Este não é um site oficial Furia e-sports. Nada postado aqui tem
					ligação com a organização.
				</Footer>
			</Wrapper>
		</Container>
	)
}
