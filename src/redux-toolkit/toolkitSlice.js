import {createSlice, current} from "@reduxjs/toolkit";
import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.jpeg'
import img4 from '../images/4.jpeg'
import img5 from '../images/5.png'
import img6 from '../images/6.jpeg'
import img7 from '../images/7.jpeg'
import img8 from '../images/8.webp'
import img9 from '../images/9.webp'
import img10 from '../images/10.webp'
import img11 from '../images/11.webp'
import img12 from '../images/12.webp'
import img13 from '../images/13.webp'
import img14 from '../images/14.jpeg'
import img15 from '../images/15.webp'
import img16 from '../images/16.jpeg'
import img17 from '../images/17.webp'
import img18 from '../images/18.webp'


const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        time: [0, 0],
        currentCard: null,
        comparedCard: null,
        cards: [],
        showedItemsIds: [],
        cardsArr1: [
            {
                id: 1,
                pairId: 1,
                isShowed: false,
                image: img1,
            },
            {
                id: 2,
                pairId: 2,
                isShowed: false,
                image: img2,
            },
            {
                id: 3,
                pairId: 3,
                isShowed: false,
                image: img3,
            },
            {
                id: 4,
                pairId: 4,
                isShowed: false,
                image: img4,
            },
            {
                id: 5,
                pairId: 5,
                isShowed: false,
                image: img5,
            },
            {
                id: 6,
                pairId: 6,
                isShowed: false,
                image: img6,
            },
            {
                id: 7,
                pairId: 7,
                isShowed: false,
                image: img7,
            },
            {
                id: 8,
                pairId: 8,
                isShowed: false,
                image: img8,
            },
            {
                id: 9,
                pairId: 9,
                isShowed: false,
                image: img9,
            },
            {
                id: 10,
                pairId: 10,
                isShowed: false,
                image: img10,
            },
            {
                id: 11,
                pairId: 11,
                isShowed: false,
                image: img11,
            },
            {
                id: 12,
                pairId: 12,
                isShowed: false,
                image: img12,
            },
            {
                id: 13,
                pairId: 13,
                isShowed: false,
                image: img13,
            },
            {
                id: 14,
                pairId: 14,
                isShowed: false,
                image: img14,
            },
            {
                id: 15,
                pairId: 15,
                isShowed: false,
                image: img15,
            },
            {
                id: 16,
                pairId: 16,
                isShowed: false,
                image: img16,
            },
            {
                id: 17,
                pairId: 17,
                isShowed: false,
                image: img17,
            },
            {
                id: 18,
                pairId: 18,
                isShowed: false,
                image: img18,
            }
        ],
        cardsArr2: [
            {
                id: 19,
                pairId: 1,
                isShowed: false,
                image: img1,
            },
            {
                id: 20,
                pairId: 2,
                isShowed: false,
                image: img2,
            },
            {
                id: 21,
                pairId: 3,
                isShowed: false,
                image: img3,
            },
            {
                id: 22,
                pairId: 4,
                isShowed: false,
                image: img4,
            },
            {
                id: 23,
                pairId: 5,
                isShowed: false,
                image: img5,
            },
            {
                id: 24,
                pairId: 6,
                isShowed: false,
                image: img6,
            },
            {
                id: 25,
                pairId: 7,
                isShowed: false,
                image: img7,
            },
            {
                id: 26,
                pairId: 8,
                isShowed: false,
                image: img8,
            },
            {
                id: 27,
                pairId: 9,
                isShowed: false,
                image: img9,
            },
            {
                id: 28,
                pairId: 10,
                isShowed: false,
                image: img10,
            },
            {
                id: 29,
                pairId: 11,
                isShowed: false,
                image: img11,
            },
            {
                id: 30,
                pairId: 12,
                isShowed: false,
                image: img12,
            },
            {
                id: 31,
                pairId: 13,
                isShowed: false,
                image: img13,
            },
            {
                id: 32,
                pairId: 14,
                isShowed: false,
                image: img14,
            },
            {
                id: 33,
                pairId: 15,
                isShowed: false,
                image: img15,
            },
            {
                id: 34,
                pairId: 16,
                isShowed: false,
                image: img16,
            },
            {
                id: 35,
                pairId: 17,
                isShowed: false,
                image: img17,
            },
            {
                id: 36,
                pairId: 18,
                isShowed: false,
                image: img18,
            },
        ],
    },
    reducers: {
        timer(state, action) {
            if (action.payload === false) {
                state.time[1]++
                if (state.time[1] > 59) {
                    state.time[1] = 0
                    state.time[0]++
                }
            }
        },
        start(state) {
            state.cards.push(...state.cardsArr1, ...state.cardsArr2)
            state.cards.sort(() => Math.random() - 0.5)
        },
        showCard(state, action) {
            let item = state.cards.find(i => i.id === action.payload)
            // item.isShowed = true
            const showedItem = {...item.id, ...item.pairId}
            state.showedItemsIds.push(showedItem)
            let showedItemsCount = state.showedItemsIds.length
            if (showedItemsCount === 2) {
                if (state.showedItemsIds[0].pairId === state.showedItemsIds[1].pairId){
                    let removedCards = state.cards.filter(
                        i => (i.pairId === (state.showedItemsIds[0].pairId))
                    )
                    removedCards.map(i => i.image = undefined)
                    // state.cards = state.cards.filter(
                    //     i => (i.image !== (state.showedItems[0].image
                    //                 || state.showedItems[1].image))
                    // )
                }
            }
        },
        hideCard(state) {
            // let item = state.cards.find(i => i.id === action.payload.id)
            if (
                // state.showedItems.length < 3
                // &&
                state.showedItemsIds.length > 0
            ) {
                state.showedItemsIds.length = 0
                state.cards.map(i => i.isShowed = false)
            }
            // item.isShowed = false

        },
    },
})

export default toolkitSlice.reducer

export const {start, timer, showCard, hideCard} = toolkitSlice.actions
