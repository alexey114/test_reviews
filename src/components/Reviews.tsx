import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { formatName } from '../helpers/formatName'
import { setPage } from '../redux/slice'
import { RootState } from '../redux/store'

interface Review {
  name: string;
  review: string;
  date: string;
}

interface StateProps {
  reviews: { [key: string]: Review[] };
  currentPage: number;
  reviewsPerPage: number;
  language: string;
}

interface DispatchProps {
  setPage: (page: number) => void;
}

type Props = StateProps & DispatchProps;

class Reviews extends Component<Props> {
  handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const { setPage } = this.props;
    setPage(Number(event.currentTarget.id));
  }

  render() {
    const { reviews, currentPage, reviewsPerPage, language } = this.props;
    const currentReviews = reviews[language]?.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage) || [];

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil((reviews[language]?.length || 0) / reviewsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <ul className="review-list">
          {currentReviews.map((review, index) => (
            <li key={index} className="review">
              <h3>{formatName(review.name)}</h3>
              <p>{review.review}</p>
              <small>{review.date}</small>
            </li>
          ))}
        </ul>
        <ul className="page-numbers">
          {pageNumbers.map(number => (
            <li
              key={number}
              id={number.toString()}
              onClick={this.handleClick}
              className={`page-numbers_choice ${currentPage === number ? 'active' : undefined}`}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  reviews: state.reviews.reviews,
  currentPage: state.reviews.currentPage,
  reviewsPerPage: state.reviews.reviewsPerPage,
  language: state.reviews.language,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setPage: (page: number) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);