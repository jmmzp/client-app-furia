import useUserContext from '../../hooks/useUserContext'
import {
	AllCards,
	BoxAllOdds,
	BoxOdd,
	Card,
	DescriptionBet,
	OddBet,
	OptionBet
} from './styles'

export default function CardBet() {
	const { openBets } = useUserContext()

	return (
		<AllCards>
			{openBets.map(bet => (
				<Card>
					<DescriptionBet>{bet.descricao}</DescriptionBet>

					<BoxAllOdds>
						<BoxOdd>
							<OptionBet>{bet.opcao_1}</OptionBet>
							<OddBet>{bet.odd_1}</OddBet>
						</BoxOdd>

						<BoxOdd>
							<OptionBet>{bet.opcao_2}</OptionBet>
							<OddBet>{bet.odd_2}</OddBet>
						</BoxOdd>
					</BoxAllOdds>
				</Card>
			))}
		</AllCards>
	)
}
