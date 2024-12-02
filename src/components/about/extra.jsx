/* eslint-disable react/no-unescaped-entities */
import Button from "../../components/shared/button";
import galImg from "../../assets/imgs/galimg (3).webp";
import img1 from "../../assets/imgs/galimg (5).webp";

function Extra() {
  return (
    <div className="mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:gap-x-20 lg:gap-x-64">
        <div className="flex flex-col ">
          <p className="text-amethyst text-base">London, BTS</p>
          <img src={img1} alt="" />

          <div className="mt-4">
            <Button text="View BTS" to="/behind-the-scenes" />
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-amethyst text-base">London, 2024</p>
          <img src={galImg} alt="artist on stage with light glare" />

          <div className="mt-4">
            <Button text="View Gallery" to="/gallery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
