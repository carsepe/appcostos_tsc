type Currency = 'COP' | 'USD' | 'MXN'

interface Price{
    number: number,
    currency: Currency
}

interface ExpensesItem{
    id: number, 
    title: string,
    cost: Price
}

interface IExpenses{
    expenses: ArrayList<ExpensesItem>,
    finalCurrency: Currency,
    add(item:ExpensesItem):boolean
    get():ExpensesItem|null
    getTotal():string,
    remove(id:null):boolean
}

class Expenses{
}