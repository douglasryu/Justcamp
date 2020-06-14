import React from "react";
import { connect } from "react-redux";
import Campcard from "./Campcard";

const Camplist = props => {
    const list = props.campsList;

    return (
        <div className="camplist">
            {list.map(site => {
                return (
                    <Campcard key={site.id} camp={site} />
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        campsList: Object.values(state.camps)
    }
}

export default connect(
    mapStateToProps,
    null
)(
    Camplist
);
