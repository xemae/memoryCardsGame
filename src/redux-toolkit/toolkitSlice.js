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
        time: null,
        currentCard: {},
        cards: [],
        cardsArr1: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9,
            img10, img11, img12, img13, img14, img15,img16, img17, img18
        ],
        cardsArr2: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9,
            img10, img11, img12, img13, img14, img15,img16, img17, img18
        ],

    },
    reducers: {
        start(state) {
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
                    return [array[i], array[j]] = [array[j], array[i]];
                }
            }
            state.cards.push(state.cardsArr1, state.cardsArr2)
            state.cards = shuffle(state.cards)
            console.log(state.cards)
            }


    },
        showCard(state, action) {

        },


    // }
})

export default toolkitSlice.reducer

export const {
    start, showCard
} = toolkitSlice.actions
