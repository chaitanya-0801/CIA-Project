import CTAButton from "../Common/CTAButton";

const ServicesCTA = () => {
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
        Ready To Start Your Journey?
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-(--lightText)">
        Contact our experts today and take the first step toward
        studying, working, or traveling abroad.
      </p>

      <div className="flex justify-center mt-8">

        <CTAButton
          text="WhatsApp Us"
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

export default ServicesCTA;