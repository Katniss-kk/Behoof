import { PriceRangeUIProps } from "@/types/types";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function PriceRangeUI({
  priceText,
  setPriceText,
  handleTextInputChange,
  minPrice,
  maxPrice,
  range,
  handleSliderChange,
}: PriceRangeUIProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block text-sm font-medium">От</label>
          <input
            type="text"
            value={priceText[0]}
            onChange={(e) =>
              setPriceText([Number(e.target.value), priceText[1]])
            }
            onBlur={handleTextInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">До</label>
          <input
            type="number"
            value={priceText[1]}
            onChange={(e) =>
              setPriceText([priceText[0], Number(e.target.value)])
            }
            onBlur={handleTextInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

      <div>
        <Slider
          range
          min={minPrice}
          max={maxPrice}
          value={range}
          onChange={handleSliderChange}
          styles={{
            track: {
              backgroundColor: "var(--input-range)",
              height: 4,
            },
            rail: {
              backgroundColor: "var(--input-range-rail)",
              height: 4,
            },
            handle: {
              backgroundColor: "var(--input-range)",
              borderColor: "var(--input-range)",
              width: 20,
              height: 20,
              opacity: 1,
              marginTop: -8,
            },
          }}
        />
      </div>
    </div>
  );
}
