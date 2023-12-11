import { categories } from "../utils/constants";
import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";

const SideNav = () => {
  // context yapısna abone olma
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);

  return (
    <nav className="flex flex-col p-4">
      {categories.map((item, i) => (
        <div
          //seçilen kategoriyi context'e gönderme
          onClick={() => setSelectedCategory(item)}
          key={i}
        >
          <div
            className={`
          ${selectedCategory.name === item.name && "bg-[#2d2d2d]"}
          flex items-center gap-2 p-2 py-4 text-lg cursor-pointer rounded-md transition hover:bg-[#2d2d2d]`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {/* eğerki objenin diver değeri true ise ekrana çizgi bas */}
          {item.divider && <hr />}
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
