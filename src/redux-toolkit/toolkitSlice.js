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
import cards from "../Cards";



const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        game: false,
        time: 0,
        currentCard: null,
        comparedCard: null,
        cards: [],
        cardsArr1: [
            {
                isShowed: false,
                image: img1,
            },
            {
                isShowed: false,
                image: img2,
            },
            {
                isShowed: false,
                image: img3,
            },

            // img2,
            // img3, img4, img5, img6, img7, img8, img9,
            // img10, img11, img12, img13, img14, img15,img16, img17, img18
        ],
        cardsArr2: [
            {
                isShowed: false,
                image: img1,
            },
            {
                isShowed: false,
                image: img2,
            },
            {
                isShowed: false,
                image: img3,
            },
            // img1, img2, img3,
            // img4, img5, img6, img7, img8, img9,
            // img10, img11, img12, img13, img14, img15,img16, img17, img18
        ],

    },
    reducers: {
        // timer(state) {
        //     // function addSec () {
        //     //     function add (n) {n++}
        //     //     return add(state.time)
        //     function addSec () {state.time++}
        //
        //     setTimeout(addSec, 1000)
        //     // console.log(current(state.time))
        // },
        start(state) {
            state.cards.push(...state.cardsArr1, ...state.cardsArr2)
            state.cards.sort(() => Math.random()-0.5)
            state.game = true
                // while (state.cards) {
                // setTimeout(function () {
                //         state.time++
                //     }, 1000
                // )
                // }
            while (state.game  ) {
                state.time++
            }
            console.log(state.game)


        },
        showCard(state, action) {
            const item = state.cards.find(i => i.image === action.image)
            const newItem = {...item, isShowed:true}
            cards.item = newItem
            console.log(current(cards))
        }

    },
})

export default toolkitSlice.reducer

export const {
    start, showCard
} = toolkitSlice.actions
