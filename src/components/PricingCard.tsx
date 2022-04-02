import { FC } from "react";

import "../styles/pricing-card.css";

type Props = {
  title: string;
  price: number;
};

const PricingCard: FC<Props> = ({ title, price }) => {
  return (
    <div className="pricing-card">
      <div className="top">
        <h3 className="title">{title}</h3>
      </div>
      <div className="bottom">
        <h1 className="price">
          ₱{price}
          <span>/year</span>
        </h1>
      </div>
    </div>
  );
};

export default PricingCard;
