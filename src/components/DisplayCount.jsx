import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux';

const DisplayCount = ({count}) => {
  return (
    <Card className='shadow-sm border border-0'>
        <Card.Body>
            <h4>Number of Todos : {count}</h4>
        </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state)=>{
    // console.log("length",state.todoReducer.length);
    return {count:state.todoReducer.length };

};
const mapDisptachToProps= (dispatch)=>({});

export default connect(mapStateToProps,mapDisptachToProps) (DisplayCount);