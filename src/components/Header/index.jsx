import { useNavigate } from 'react-router-dom'
import iconLogout from '../../assets/icons/icon-logout.png'
import iconMenu from '../../assets/icons/icon-menu.png'
import logoFuria from '../../assets/logo-furia.png'
import useUserContext from '../../hooks/useUserContext'
import Icon from '../../styles/Icon'
import Menu from '../Menu'
import { CustomHeader, Logo } from './styles'

export default function Header() {
	const navigate = useNavigate()
	const { setModal, logout } = useUserContext()

	return (
		<CustomHeader>
			<Icon
				src={iconMenu}
				alt="Ícone para abrir menu."
				onClick={() => setModal(<Menu />)}
			/>

			<Logo
				src={logoFuria}
				alt="Logo do time da Furia."
				onClick={() => navigate('/')}
			/>

			<Icon
				src={iconLogout}
				alt="Ícone para deslogar."
				onClick={() => logout()}
			/>
		</CustomHeader>
	)
}
