import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/searchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions () {
    return (
        <div>
            <Header/>
            <Summary />
        <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighLight variant="income">
                                 R$ 12.000,00
                            </PriceHighLight>
                            </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>

                    <tr>
                        <td width="50%">Hamburguer</td>
                        <td>
                            <PriceHighLight variant="outcome">
                                - R$ 59,00                           
                            </PriceHighLight>
                        </td>
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                   
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}