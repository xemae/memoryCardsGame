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
        gameOn: false,
        gameSize: null,
        attempts: 0,
        successfulAttempts: 0,
        showedItemsIds: [],
        removedItemIds: [],
        cards: [
            {
                id: 1,
                pairId: 1,
                image: img1,
            },
            {
                id: 2,
                pairId: 2,
                image: img2,
            },
            {
                id: 3,
                pairId: 3,
                image: img3,
            },
            {
                id: 4,
                pairId: 4,
                image: img4,
            },
            {
                id: 5,
                pairId: 5,
                image: img5,
            },
            {
                id: 6,
                pairId: 6,
                image: img6,
            },
            {
                id: 7,
                pairId: 7,
                image: img7,
            },
            {
                id: 8,
                pairId: 8,
                image: img8,
            },
            {
                id: 9,
                pairId: 9,
                image: img9,
            },
            {
                id: 10,
                pairId: 10,
                image: img10,
            },
            {
                id: 11,
                pairId: 11,
                image: img11,
            },
            {
                id: 12,
                pairId: 12,
                image: img12,
            },
            {
                id: 13,
                pairId: 13,
                image: img13,
            },
            {
                id: 14,
                pairId: 14,
                image: img14,
            },
            {
                id: 15,
                pairId: 15,
                image: img15,
            },
            {
                id: 16,
                pairId: 16,
                image: img16,
            },
            {
                id: 17,
                pairId: 17,
                image: img17,
            },
            {
                id: 18,
                pairId: 18,
                image: img18,
            },
            {
                id: 19,
                pairId: 1,
                image: img1,
            },
            {
                id: 20,
                pairId: 2,
                image: img2,
            },
            {
                id: 21,
                pairId: 3,
                image: img3,
            },
            {
                id: 22,
                pairId: 4,
                image: img4,
            },
            {
                id: 23,
                pairId: 5,
                image: img5,
            },
            {
                id: 24,
                pairId: 6,
                image: img6,
            },
            {
                id: 25,
                pairId: 7,
                image: img7,
            },
            {
                id: 26,
                pairId: 8,
                image: img8,
            },
            {
                id: 27,
                pairId: 9,
                image: img9,
            },
            {
                id: 28,
                pairId: 10,
                image: img10,
            },
            {
                id: 29,
                pairId: 11,
                image: img11,
            },
            {
                id: 30,
                pairId: 12,
                image: img12,
            },
            {
                id: 31,
                pairId: 13,
                image: img13,
            },
            {
                id: 32,
                pairId: 14,
                image: img14,
            },
            {
                id: 33,
                pairId: 15,
                image: img15,
            },
            {
                id: 34,
                pairId: 16,
                image: img16,
            },
            {
                id: 35,
                pairId: 17,
                image: img17,
            },
            {
                id: 36,
                pairId: 18,
                image: img18,
            },
        ],
    },
    reducers: {
        start(state) {
            state.attempts = 0
            state.successfulAttempts = 0
            state.removedItemIds.length = 0
            state.showedItemsIds.length = 0
            state.cards.sort(() => Math.random() - 0.5)
            state.gameOn = true
        },
        showCard(state, action) {
            if (state.showedItemsIds.length < 2) {
                state.showedItemsIds.push(action.payload)
                if (state.showedItemsIds.length === 2) {
                    if (state.showedItemsIds[0].pairId === state.showedItemsIds[1].pairId) {
                        state.removedItemIds.push(state.showedItemsIds[0].id)
                        state.removedItemIds.push(state.showedItemsIds[1].id)
                        state.successfulAttempts = state.successfulAttempts + 1
                    }
                }
            }
        },
        hideCard(state) {
            state.attempts = state.attempts + 1

            if (state.cards.length === state.removedItemIds.length) {
                state.gameOn = false
                // state.removedItemIds = []
            }

            state.showedItemsIds = []

            console.log(state.gameOn)
        },
        setMenu(state) {
            state.removedItemIds = []
        },
        SetSize(state, action) {
            // state.removedItemIds = []
        }

    },
})

export default toolkitSlice.reducer

export const {start, showCard, hideCard, setMenu} = toolkitSlice.actions
