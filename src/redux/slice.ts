import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Review {
  name: string;
  review: string;
  date: string;
}

interface ReviewsState {
  reviews: Record<string, Review[]>;
  currentPage: number;
  reviewsPerPage: number;
  language: string;
}

const initialState: ReviewsState = {
  reviews: {
    ru: [],
    en: []
  },
  currentPage: 1,
  reviewsPerPage: 10,
  language: 'ru'
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setReviews: (state, action: PayloadAction<{ language: string; reviews: Review[] }>) => {
      state.reviews[action.payload.language] = action.payload.reviews;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    }
  }
});

export const { setPage, setReviews, setLanguage } = reviewsSlice.actions;
export type { ReviewsState }
export default reviewsSlice.reducer;