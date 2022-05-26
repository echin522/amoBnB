import React from "react";

class Amenities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amenities: {
                "Beach view": <i className="fa-solid fa-umbrella-beach"></i>,
                "Sea view": <i className="fa-solid fa-fish"></i>,
                "Sunset view": <i className="fa-solid fa-sun-haze"></i>,
                "Courtyard view": <i className="fa-solid fa-flower"></i>,
                "Kitchen": <i className="fa-solid fa-kitchen-set"></i>,
                "Air conditioning": <i className="fa-solid fa-snowflake"></i>,
                "Essential toiletries": <i className="fa-solid fa-toothbrush"></i>,
                "Cleaning products": <i className="fa-solid fa-soap"></i>,
                "Hot water": <i className="fa-solid fa-bowl-hot"></i>,
                "Bed linens": <i className="fa-solid fa-bed-empty"></i>,
                "Pillows": <i className="fa-solid fa-mattress-pillow"></i>,
                "Closet": <i className="fa-solid fa-clothes-hanger"></i>,
                "Washing machine": <i className="fa-solid fa-washing-machine"></i>,
                "Dryer": <i className="fa-solid fa-dryer"></i>,
                "Fireplace": <i className="fa-solid fa-fireplace"></i>,
                "Heating": <i className="fa-solid fa-heat"></i>,
                "Smoke alarm": <i className="fa-solid fa-sensor-cloud"></i>,
                "Fire alarm":<i className="fa-solid fa-sensor-fire"></i>,
                "Fire extinguisher": <i className="fa-solid fa-fire-extinguisher"></i>,
                "Refrigerator": <i className="fa-regular fa-refrigerator"></i>,
                "Microwave": <i className="fa-solid fa-microwave"></i>,
                "Silverware": <i className="fa-solid fa-plate-utensils"></i>,
                "Oven": <i className="fa-solid fa-oven"></i>,
                "Stove":  <i className="fa-solid fa-fire-burner"></i>,
                "Coffee maker": <i className="fa-solid fa-coffee-pot"></i>,
                "Wine glasses": <i className="fa-solid fa-wine-glass"></i>,
                "Blender": <i className="fa-solid fa-blender"></i>,
                "Free parking": <i className="fa-solid fa-car-side"></i>,
                "Pets allowed": <i className="fa-solid fa-paw"></i>,
                "Wifi": <i className="fa-solid fa-wifi"></i>,
                "TV": <i className="fa-solid fa-tv"></i>
            }
        }
    }

    render() {
        const {amenities} = this.state;
        return(
            <div>
                <h2>What this place offers</h2>
                <div id="listing-amenities">
                    <div id="amenity">
                        {amenities["Kitchen"]}
                        <p>Kitchen</p>
                    </div>
                    <div id="amenity">
                        {amenities["Beach view"]}
                        <p>Beach view</p>
                    </div>
                    <div id="amenity">
                        {amenities["Pets allowed"]}
                        <p>Pets allowed</p>
                    </div>
                    <div id="amenity">
                        {amenities["Pillows"]}
                        <p>Pillows</p>
                    </div>
                    <div id="amenity">
                        {amenities["TV"]}
                        <p>TV</p>
                    </div>
                    <div id="amenity">
                        {amenities["Free parking"]}
                        <p>Free parking</p>
                    </div>
                    <div id="amenity">
                        {amenities["Air conditioning"]}
                        <p>Air conditioning</p>
                    </div>
                    <div id="amenity">
                        {amenities["Wifi"]}
                        <p>Wifi</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Amenities;