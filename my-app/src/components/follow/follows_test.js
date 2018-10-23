
import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux_store/actions/actionFetch";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  fetchFunction () {
    if (this.props.followersFetch === undefined){
      return <div>Followers Undefined...</div>;
    }
    return this.props.followersFetch.map((unit) => {
        return (
            <div className="followers_flex">
            <br />
             <img src={unit.img} className="icons_followers" alt="" />
                <article
                 className="followers_redux"
                 key={unit.id}>
                {unit.name}
                <br />
                <button className="EdgeButton1">
                <span className="follow_button">follow</span>
                </button>
                </article>
            </div>
        )
    })
}
  render() {
    const { error, loading} = this.props;
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <div>
{this.fetchFunction()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followersFetch: state.fetched.items,
  loading: state.fetched.loading,
  error: state.fetched.error
});

export default connect(mapStateToProps)(ProductList);