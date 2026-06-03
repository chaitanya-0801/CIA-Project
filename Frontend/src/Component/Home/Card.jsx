import WhyChooseUsData from "../../Data/WhyChooseUs";
const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {WhyChooseUsData.map((item) => {
        const IconComponent = item.icon;
        return (
          <div key={item.id} className="bg-(--backgroundSecondary) hover:bg-(--backgroundLight) hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-6 w-80 border-2 border-(--borderColor)">
            <div className="text-4xl mb-4 text-blue-500">
              <IconComponent />
            </div>
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-(--secondaryText)"> {item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
