import { configureStore } from "@reduxjs/toolkit"
import { HomeSlice } from "../HomeSlice"
import { TrainerSlice } from "../TrainerSlice"
import { TestimonialSlice } from "../TestimonialSlice"
import { ServiceSlice } from "../ServiceSlice"
import { ServiceDetailsSlice } from "../ServiceDetailsSlice"
import { BlogSlice } from "../BlogSlice"
import { BlogDetailsSlice } from "../BlogDetailsSlice"
import { AuthSlice } from "../AuthSlice"
import { ContactSlice } from "../ContactSlice"
import { BookServiceSlice } from "../BookServiceSlice"
import { FetchBookingDetailsSlice } from "../DasboardSlice"

const Store = configureStore({
    reducer: {

        home: HomeSlice.reducer,
        trainer: TrainerSlice.reducer,
        testimonial: TestimonialSlice.reducer,
        service: ServiceSlice.reducer,
        serviceDetails: ServiceDetailsSlice.reducer,
        blog: BlogSlice.reducer,
        blogDetails: BlogDetailsSlice.reducer,
        contact: ContactSlice.reducer,
        auth: AuthSlice.reducer,
        bookingData: BookServiceSlice.reducer,
        memberbooking: FetchBookingDetailsSlice.reducer

    }
})

export default Store