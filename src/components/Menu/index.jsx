import { useNavigate } from 'react-router-dom'
import iconClose from '../../assets/icons/icon-close.png'
import logoFuria from '../../assets/logo-furia.png'
import useUserContext from '../../hooks/useUserContext'
import Icon from '../../styles/Icon'
import { CustomMenu, TextBox } from './styles'

export default function Menu() {
	const { setModal } = useUserContext()
	const navigate = useNavigate()

	const handleNavigateMenu = url => {
		navigate(`/${url}`)

		return setModal(null)
	}

	return (
		<CustomMenu>
			<div>
				<Icon
					src={iconClose}
					alt="Ícone de xis para fechar modal do menu."
					onClick={() => setModal(null)}
				/>
			</div>

			<TextBox>
				<p onClick={() => handleNavigateMenu('')}>HOME</p>
				<p onClick={() => handleNavigateMenu('bets')}>APOSTAS</p>
				<p onClick={() => handleNavigateMenu('players')}>PLAYERS</p>
				<p onClick={() => handleNavigateMenu('profile')}>PERFIL</p>
			</TextBox>

			<img className="logo" src={logoFuria} alt="" />
		</CustomMenu>
	)
}
