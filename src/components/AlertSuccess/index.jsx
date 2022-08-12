import Alert from '../../styles/Alert'
import Icon from '../../styles/Icon'
import iconSuccess from '../../assets/icons/icon-success.png'
import { Text } from './styles'

export default function AlertSuccess({ children }) {
	return (
		<Alert color="#388e3c">
			<Icon
				style={{ width: '2rem' }}
				src={iconSuccess}
				alt="Ícone de sucesso."
			/>

			<Text>{children}</Text>
		</Alert>
	)
}
