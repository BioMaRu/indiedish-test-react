import React from 'react';

class ListItem extends React.Component {
	render() {
    	return(
			<div className={"list" + ((this.props.selectItem==this.props.index)? ' active':'') } onClick={ this.clickItem.bind(this) }>
				<div className="item">{ this.props.item }</div>
				<div className="close" onClick={ this.removeItem.bind(this) }>X</div>
			</div>
		)
	}
	clickItem() {
		this.props.clickItem(this.props.index)
		setTimeout(function(){ alert(this.props.item) }.bind(this), 100 )
	}
	removeItem(e) {
		e.stopPropagation()
		this.props.removeItem(this.props.item, this.props.index)
	}
}

export default ListItem