import Alert from '../../styles/Alert'
import Icon from '../../styles/Icon'
import iconInfo from '../../assets/icons/icon-info.png'
import { Text } from './styles'

export default function AlertInfo({ children }) {
	return (
		<Alert color="#0288d1">
			<Icon
				style={{ width: '2rem' }}
				src={iconInfo}
				alt="Ícone de informção."
			/>

			<Text>{children}</Text>
		</Alert>
	)
}
