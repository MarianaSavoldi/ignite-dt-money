import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      // Outra opção de solução:
      //   switch (transaction.type) {
      //     case 'income':
      //       acc.income += transaction.price
      //       acc.total += transaction.price
      //       break
      //     case 'outcome':
      //       acc.outcome += transaction.price
      //       acc.total -= transaction.price
      //       break
      //     default:
      //       return acc
      //   }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )
  return summary
}
