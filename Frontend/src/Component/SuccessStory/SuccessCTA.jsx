import CTAButton from "../Common/CTAButton";

const SuccessCTA = () => {
  return (
    <div
      className="
        bg-linear-to-br
        from-[#142D7A]
        via-[#1F3FAF]
        to-[#2948B8]
        py-20
        px-6
        text-center
        text-white
      "
    >
      <h2 className="text-4xl font-bold">
        Be Our Next Success Story
      </h2>

      <p className="mt-4 text-(--lightText)">
        Let us help you achieve your global dreams.
      </p>

      <div className="mt-8">
        <CTAButton
          text="Contact Us Today"
          className="
            bg-(--secondaryCtaBg)
            text-(--secondaryCtaText)
          "
          onClick={() => {
            window.open(
              "https://wa.me/918295280143",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
};

export default SuccessCTA;