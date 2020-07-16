import { apple } from "color"

const initState = {
    cart: [
        {
            id: 1,
            title: 'Apple',
            price: 2222.28,
            count: 10

        },
        {
            id: 2,
            title: 'Orange',
            price: 333.28,
            count: 40

        }
    ]
}

export default (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        default:
            return state
    }

}