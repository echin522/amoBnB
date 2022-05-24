import React from "react";

class Amenities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amenities: {
                "Beach view": <i class="fa-solid fa-umbrella-beach"></i>,
                "Sea view": <i class="fa-solid fa-fish"></i>,
                "Sunset view": <i class="fa-solid fa-sun-haze"></i>,
                "Courtyard view": <i class="fa-solid fa-flower"></i>,
                "Kitchen": <i class="fa-solid fa-kitchen-set"></i>,
                "Air conditioning": <i class="fa-solid fa-snowflake"></i>,
                "Essential toiletries": <i class="fa-solid fa-toothbrush"></i>,
                "Cleaning products": <i class="fa-solid fa-soap"></i>,
                "Hot water": <i class="fa-solid fa-bowl-hot"></i>,
                "Bed linens": <i class="fa-solid fa-blanket"></i>,
                "Pillows": <i class="fa-solid fa-mattress-pillow"></i>,
                "Closet": <i class="fa-solid fa-clothes-hanger"></i>,
                "Washing machine": <i class="fa-solid fa-washing-machine"></i>,
                "Dryer": <i class="fa-solid fa-dryer"></i>,
                "Fireplace": <i class="fa-solid fa-fireplace"></i>,
                "Heating": <i class="fa-solid fa-heat"></i>,
                "Smoke alarm": <i class="fa-solid fa-sensor-cloud"></i>,
                "Fire alarm":<i class="fa-solid fa-sensor-fire"></i>,
                "Fire extinguisher": <i class="fa-solid fa-fire-extinguisher"></i>,
                "Refrigerator": <i class="fa-solid fa-refrigerator"></i>,
                "Microwave": <i class="fa-solid fa-microwave"></i>,
                "Silverware": <i class="fa-solid fa-plate-utensils"></i>,
                "Oven": <i class="fa-solid fa-oven"></i>,
                "Stove":  <i class="fa-solid fa-fire-burner"></i>,
                "Coffee maker": <i class="fa-solid fa-coffee-pot"></i>,
                "Wine glasses": <i class="fa-solid fa-wine-glass"></i>,
                "Blender": <i class="fa-solid fa-blender"></i>,
                "Free parking": <i class="fa-solid fa-car-side"></i>,
                "Pets allowed": <i class="fa-solid fa-paw"></i>,
                "Wifi": <i class="fa-solid fa-wifi"></i>,
                "TV": <i class="fa-solid fa-tv"></i>
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
                        {amenities["Bed linens"]}
                        <p>Bed linens</p>
                    </div>
                    <div id="amenity">
                        {amenities["Pets allowed"]}
                        <p>Pets allowed</p>
                    </div>
                    <div id="amenity">
                        {amenities["Refrigerator"]}
                        <p>Refrigerator</p>
                    </div>
                    <div id="amenity">
                        {amenities["Heating"]}
                        <p>Heating</p>
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