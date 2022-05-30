import React from 'react'

interface IViewProps {
	className?: string;
	style?: React.CSSProperties;
	id?: string;
	divRef?: any;
	children?: any | any[];
}

const View = (props: IViewProps) => {
	const passedProps = {
		className: props.className || '',
		style: props.style,
		id: props.id,
		ref: props.divRef,
	}

	return (
		<div {...passedProps}>
				{props.children}
		</div>
	)
}

export default View