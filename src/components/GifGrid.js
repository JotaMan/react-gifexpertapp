import React from 'react'
import {GifGridItem} from './GifGridItem'
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

	const {data: images, loading} = useFetchGifs(category)

	return (
		<>
			<h3>{category}</h3>
			{loading && <p className="card animate__animated animate__flash">Loading...</p>}

			<div className="card-grid">{
				images.map((images) => {
					return (
						<GifGridItem
							key={images.id}
							{...images} />
					)
				})
			}
			</div>
		</>
	)
}
