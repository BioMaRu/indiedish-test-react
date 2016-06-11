import React from 'react';
import InputBox from './InputBox'
import List from './List'

class ListApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectItem: -1,
			myList: [ 
				"Ant", "<strong>123</strong>", "Cat"
			]
		}
	}
	render() {
    	return(
			<div>		
				<InputBox onSubmit={ this.addItem.bind(this) } />
				<List 
					itemList={ this.state.myList } 
					clickItem={ this.clickItem.bind(this) }
					removeItem={ this.removeItem.bind(this) }
					selectItem={ this.state.selectItem }
				/>
			</div>
		)
	}
	addItem(text) {
		console.log('Add', text)
		let newarray = [ ...this.state.myList, text ]
		this.setState({
        	myList: newarray
        })
		
	}
	removeItem(text, index) {
		let _selectItem = -1;
		let newarray = this.state.myList.filter( (_item, _index,arr) => {
        	return index != _index;
    	})
		if(this.state.selectItem > index ){
			_selectItem = this.state.selectItem-1;
		}
		else if(this.state.myList.length == 0 || this.state.selectItem == index){
			_selectItem = -1;
		}
		else {
			_selectItem = this.state.selectItem
		}
		this.setState({
			selectItem: _selectItem,
        	myList: newarray
        })

	}
	clickItem(index) {
		this.setState({
        	selectItem: index
        })
	}
}

export default ListApp