import React from "react";
import Card from "./Card";
import icon1 from "./asserts/icon-1.png"
import icon2 from "./asserts/icon-2.png"

const CardSection = () => {
    return(
        <section className="flex justify-center items-center mt-20">
            <div className="flex justify-center items-center gap-4 w-[60%]">
                <Card 
                    logo={icon1}
                    title="Analytics Dashboard"
                    content="Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
                    link="View dashboard"
                />
                <Card 
                    logo={icon2}
                    title="Digital Credit Tokens"
                    content="Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."
                    link="View tokens"
                />
            </div>
        </section>
    )
}

export default CardSection;