import {createSlice} from "@reduxjs/toolkit";
import {getCards} from "./cardBase";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        gameOn: false,
        gameSize: 4,
        attempts: 0,
        successfulAttempts: 0,
        showedItemsIds: [],
        removedItemIds: [],
        cards: null
    },
    reducers: {
        start(state) {
            state.attempts = 0
            state.successfulAttempts = 0
            state.removedItemIds.length = 0
            state.showedItemsIds.length = 0
            state.cards = getCards(state.gameSize).sort(() => Math.random() - 0.5)
            state.gameOn = true
        },
        showCard(state, action) {
            if (state.showedItemsIds.length < 2) {
                state.showedItemsIds.push(action.payload)

            }
        },
        hideCard(state) {
            if (state.showedItemsIds.length === 2) {
                if (state.showedItemsIds[0].pairId === state.showedItemsIds[1].pairId) {
                    state.removedItemIds.push(state.showedItemsIds[0].id)
                    state.removedItemIds.push(state.showedItemsIds[1].id)
                    state.successfulAttempts = state.successfulAttempts + 1
                }
            }
            state.attempts = state.attempts + 1
            if (state.cards.length === state.removedItemIds.length) {
                state.gameOn = false
            }
            state.showedItemsIds = []
        },
        setMenu(state) {
            state.removedItemIds = []
            state.gameOn = false
            state.attempts = 0
        },
        setGameSize(state, action) {
            state.gameSize = action.payload
        },
    },
})

export default toolkitSlice.reducer

export const {start, showCard, hideCard, setMenu, setGameSize} = toolkitSlice.actions