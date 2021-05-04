import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

	const [inputValue, setInputValue] = useState('')

	const handleInputVal = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (inputValue.trim().length > 2) {
			setCategories(categories => [inputValue, ...categories])
			setInputValue('')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={handleInputVal}
				placeholder="Busca un gif"
			/>
		</form>

	)
}

AddCategory.propTypesObjeto = {
	setCategories: PropTypes.func.isRequired
}
