import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedLight: null
		};
	}

	render() {
		// Declara variables
		let selectedRed = null;
		let selectedYellow = null;
		let selectedGreen = null;

		// Se hace comparación del estado para aplicar el box-shadow a la luz seleccionada
		if (this.state.selectedLight == "red") {
			selectedRed = "selectedRed";
		} else if (this.state.selectedLight == "yellow") {
			selectedYellow = "selectedYellow";
		} else if (this.state.selectedLight == "green") {
			selectedGreen = "selectedGreen";
		}

		return (
			<div>
				{/* parte superior del semáforo */}
				<div id="top"></div>
				{/* cuerpo del semáforo */}
				<div id="container">
					{/* Luces del semáforo, se concatena el selected para dar el estilo box shadow */}
					{/* El onClick cambia el estado a uno de los colores deseados */}
					<div
						className={"red-light " + selectedRed}
						onClick={() =>
							this.setState({ selectedLight: "red" })
						}></div>
					<div
						className={"yellow-light " + selectedYellow}
						onClick={() =>
							this.setState({ selectedLight: "yellow" })
						}></div>
					<div
						className={"green-light " + selectedGreen}
						onClick={() =>
							this.setState({ selectedLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
