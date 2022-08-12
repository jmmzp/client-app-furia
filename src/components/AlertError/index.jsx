import Alert from '../../styles/Alert'
import Icon from '../../styles/Icon'
import iconError from '../../assets/icons/icon-error.png'
import { Text } from './styles'

export default function AlertError({ children }) {
	return (
		<Alert color="#d32f2f">
			<Icon style={{ width: '2rem' }} src={iconError} alt="Ícone de erro." />

			<Text>{children}</Text>
		</Alert>
	)
}
