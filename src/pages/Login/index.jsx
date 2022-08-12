import { useNavigate } from 'react-router-dom'
import logoFuria from '../../assets/logo-furia.png'
import FormLogin from '../../components/FormLogin'
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
					<Title>LOGIN</Title>

					<FormLogin />

					<Span>AINDA NÃO É DA TORCIDA?</Span>

					<Button
						className="btn-register"
						onClick={() => navigate('/register')}
					>
						CADASTRE-SE
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
