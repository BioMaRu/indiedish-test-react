import React from 'react';
import ListItem from './ListItem'
class List extends React.Component {
	render() {

		let elem = this.props.itemList.map((_item, index) => {
			return <ListItem 
						item={ _item } 
						index={ index }
						key={ index } 
						clickItem={ this.props.clickItem }
						removeItem={ this.props.removeItem }
						selectItem={ this.props.selectItem }
					/>
		})
    	return(
			<div className="list-container">
				{ elem }
			</div>
		)
	}
}

export default List