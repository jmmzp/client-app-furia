import Alert from '../../styles/Alert'
import Icon from '../../styles/Icon'
import iconWarning from '../../assets/icons/icon-warning.png'
import { Text } from './styles'

export default function AlertWarning({ children }) {
	return (
		<Alert color="#f57c00">
			<Icon
				style={{ width: '2rem' }}
				src={iconWarning}
				alt="Ícone de alerta."
			/>

			<Text>{children}</Text>
		</Alert>
	)
}
